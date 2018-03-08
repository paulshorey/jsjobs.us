/*
	process.env
*/
process.env.PATH = __dirname;
process.env.PORT = 1080;
const DEV = process.env.NODE_ENV === "development";
/*
	global.shh
*/
global.shh = require("/www/secret/all.js"); // not on GitHub!
/*
	global.rqr
*/
global.rqr = global.rqr || {};
global.rqr.express = require("express");
global.rqr.express_parser = require("body-parser");
global.rqr.fs = require("fs");
global.rqr.http = require("http");
global.rqr.https = require("https");
global.rqr.url = require("url");
global.rqr.crypto = require("crypto");
global.rqr.chrono = require("chrono-node");
global.rqr.cookieParser = require("cookie-parser");
global.rqr.bodyParser = require("body-parser");
global.rqr.mongoose = require("mongoose");
/*
	global.S3 (AWS)
*/
process.env.AWS_ACCESS_KEY_ID = global.shh.AWS.ACCESS_KEY_ID;
process.env.AWS_SECRET_ACCESS_KEY = global.shh.AWS.SECRET_ACCESS_KEY;
process.env.AWS_SESSION_TOKEN = global.shh.AWS.SESSION_TOKEN;
global.S3 = require("aws-sdk/clients/s3");
global.S3UploadToBucket = function(name, content) {
	// bucket
	var bucket = new global.S3({ apiVersion: "2006-03-01" });
	var bucketParams = { Bucket: "jsjobsapi" };
	// file
	bucketParams.Body = content;
	bucketParams.Key = name;
	bucketParams.ContentType = "text/json; charset=utf-8";
	bucketParams.ContentDisposition = "inline";
	// upload
	bucket.upload(bucketParams, function(err, data) {
		if (err) {
			console.log("Error", err);
		}
		if (data) {
			console.log("Upload Success", data.Location);
		}
	});
};
/*
	global.logger
*/
let dna_logger = require("logdna").setupDefaultLogger(global.shh.logdna.ingestionKey, {
	index_meta: true,
	hostname: "jsjobs.us/api",
	app: DEV ? "API-dev" : "API-pro"
});
let fixLogger = function(useLib) {
	var doLog = function(level, ...args) {
		if (args[0].stack) {
			// Error
			this[level](args[0].stack, args[0].message);
			console[level](args[0].stack);
		} else {
			// multiple
			this[level](...args);
			console[level](...args);
		}
	}.bind(useLib);
	return {
		log: function(...logWhat) {
			doLog("log", ...logWhat);
		},
		info: function(...logWhat) {
			doLog("info", ...logWhat);
		},
		warn: function(...logWhat) {
			doLog("warn", ...logWhat);
		},
		error: function(...logWhat) {
			doLog("error", ...logWhat);
		}
	};
};
global.logger = fixLogger(dna_logger);
/*
global.server
*/
global.server = global.rqr.express();
global.server.use(function(request, response, next) {
	response.setHeader("Access-Control-Allow-Origin", "*"); // CHANGE THIS BEFORE ADDING SENSITIVE DATA!
	response.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type, Cache-Control, Pragma, Authorization, Content-Length, X-Requested-With, X-Host");
	if ("OPTIONS" == request.method) {
		response.writeHead(200);
		response.end();
		return;
	} else {
		next();
		return;
	}
});
global.server.use(global.rqr.bodyParser.json());
global.server.use(global.rqr.bodyParser.urlencoded({ extended: false }));
global.server.use(global.rqr.cookieParser());
/*
global.model
*/
global.model = {};
/*
global.collection
*/
global.collection = {};
global.rqr.mongoose.connect("mongodb://" + global.shh.mongod.user + ":" + global.shh.mongod.pwd + "@localhost").then(function() {
	global.collection.jobs = global.rqr.mongoose.connection.db.collection("jobs", function(err, collection) {
		collection.count({}, function(error, count) {
			console.log("collection.jobs.count() => " + count);
		});
	});
	global.collection.jobsla = global.rqr.mongoose.connection.db.collection("jobsla", function(err, collection) {
		collection.count({}, function(error, count) {
			console.log("collection.jobsla.count() => " + count);
		});
	});
});
global.collectionSearch = function(params = { collection: undefined, find: {}, sort: undefined, skip: 0, limit: 50 }) {
	var mPromise = new Promise(function(resolve, reject) {
		global.collection.jobs = global.rqr.mongoose.connection.db.collection(params.collection, function(err, collection) {
			let query = collection.find(params.find, null, params.options);
			if (params.limit) {
				query = query.limit(params.limit);
			}
			if (params.skip) {
				query = query.skip(params.skip);
			}
			if (params.sort) {
				query = query.sort(params.sort);
			}
			query.toArray(function(error, results) {
				console.log("collection." + params.collection + ".find({...}) => " + results.length);
				resolve(results);
			});
		});
	});
	return mPromise;
};

/************************************************************************************
	API
*/

/*
	API: 500 Error
*/
global.server.use(function(err, req, response, next) {
	let data = { error: 1, message: err.message };
	if (DEV) {
		data.stack = err.stack;
	}
	response.setHeader("Content-Type", "application/json");
	response.writeHead(500);
	response.write(JSON.stringify(data, null, "\t"));
	response.end();
});

/*
	API: GET
*/
global.server.get("/api/v1/:collection/:area?", async function(request, response) {
	// meta
	const collection = request.params.collection + (request.params.area || "");
	// data
	let data = await global.collectionSearch({ collection: collection, find: {}, sort: { posted: -1 }, skip: 0, limit: 50 });
	// send
	response.setHeader("Content-Type", "application/json");
	response.writeHead(200);
	response.write(JSON.stringify({ results: data.length, data: data }, null, "\t"));
	response.end();
});
/*
	API: POST
*/
global.server.post("/api/v1/:collection/:area?", function(request, response) {
	// meta
	const area = request.params.area;
	const collection = request.params.collection + (area || "");
	const cacheUrl_initial = `api/v1/${collection}-50.json`;
	const cacheUrl = `api/v1/${collection}.json`;
	// data
	const resultsArray = [];
	let added = 0;
	let post = request.body;
	let post_url = post.url || "?";
	let post_data = post.data || [];
	for (var r in post_data) {
		// each
		var res = post_data[r];
		for (var k in res) {
			if (typeof res[k] === "string") {
				res[k] = res[k].replace(/\s/g, " ");
				res[k] = res[k].trim();
			}
		}
		// filter
		res.posted = global.rqr.chrono.parseDate(res.posted);
		// save to DB
		res._status = "new";
		res._id = global.rqr.crypto
			.createHash("md5")
			.update(res.name + " " + res.company)
			.digest("hex");
		// memory
		resultsArray[res._id] = res;
		// mongoose
		global.collection[collection].save(res);
		added++;
	}
	/*
		save data
	*/
	global.S3UploadToBucket(cacheUrl, JSON.stringify(resultsArray));
	global.S3UploadToBucket(cacheUrl_initial, JSON.stringify(resultsArray.slice(0, 50)));
	global.logger.info({ ["API: POST `/api/v1/" + collection + "/" + area + "` successful"]: { collection, area, added } });

	// success response without waiting for async data above
	response.setHeader("Content-Type", "application/json");
	response.writeHead(200);
	response.write(JSON.stringify({ data: "OK", error: 0 }, null, "\t"));
	response.end();
});

global.server.post("/api/v1/:collection/apify-webhook/:area?", function(request, response) {
	// meta
	const collection = request.params.collection + (request.params.area || "");
	const cacheUrl_initial = `api/v1/${collection}-50.json`;
	const cacheUrl = `api/v1/${collection}.json`;
	// data
	const resultsArray = [];
	const resultsUrl = "https://api.apify.com/v1/execs/" + request.body._id + "/results";
	global.rqr.https.get(resultsUrl, res => {
		res.setEncoding("utf8");
		let body = "";
		res.on("data", data => {
			body += data;
		});
		res.on("end", () => {
			// process data
			let added = 0;
			let resultsSets = JSON.parse(body);
			if (resultsSets && resultsSets[0] && resultsSets[0].pageFunctionResult) {
				for (var rD in resultsSets) {
					let results = resultsSets[rD].pageFunctionResult;
					// format
					const addJobs = {};
					for (var r in results) {
						// each
						var res = results[r];
						for (var k in res) {
							if (typeof res[k] === "string") {
								res[k] = res[k].replace(/\s/g, " ");
								res[k] = res[k].trim();
							}
						}
						// filter
						res.posted = global.rqr.chrono.parseDate(res.posted);
						// save to DB
						res._status = "new";
						res._id = global.rqr.crypto
							.createHash("md5")
							.update(res.name + " " + res.company)
							.digest("hex");
						// memory
						resultsArray[res._id] = res;
						// mongoose
						global.collection[collection].save(res);
						added++;
					}
				}
				global.logger.info({ ["API: POST `/api/v1/" + collection + "/apify-webhook` successful"]: { resultsUrl, results: added } });

				/*
					save data
				*/
				global.S3UploadToBucket(cacheUrl, JSON.stringify(resultsArray));
				global.S3UploadToBucket(cacheUrl_initial, JSON.stringify(resultsArray.slice(0, 50)));
			} else {
				global.logger.error({ ["API: POST `/api/v1/" + collection + "/apify-webhook` failed to return data: "]: resultsUrl });
			}
		});
	});
	// success response without waiting for async data above
	response.setHeader("Content-Type", "application/json");
	response.writeHead(200);
	response.write(JSON.stringify({ data: "OK", error: 0 }, null, "\t"));
	response.end();
});

/*
SERVE
*/
module.exports = global.server;
