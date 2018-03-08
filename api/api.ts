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
	hostname: "ps-jobs",
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
// global.server.use(logger(DEV ? 'dev' : undefined));
global.server.use(global.rqr.bodyParser.json());
global.server.use(global.rqr.bodyParser.urlencoded({ extended: false }));
global.server.use(global.rqr.cookieParser());
/*
temporary
*/
global.jobsDB = [];
/*
global.model
global.collection
*/

global.model = {};
global.collection = {};
global.rqr.mongoose.connect("mongodb://" + global.shh.mongod.user + ":" + global.shh.mongod.pwd + "@localhost").then(function() {
	global.collection.jobs = global.rqr.mongoose.connection.db.collection("jobs", function(err, collection) {
		collection.find({}).toArray(function(error, data) {
			console.log("found: " + data.length);
			global.jobsDB = data;
		});
	});
});

// setTimeout(function() {
// 	// DEBUG THIS: mongoose sometimes fails...
// 	global.jobsDB = [];
// 	let jobsFound = global.collection.jobs.find({});
// 	console.log(typeof jobsFound, jobsFound);
// 	if (typeof jobsFound !== "undefined") {
// 		jobsFound.toArray(function(error, data) {
// 			global.jobsDB = data;
// 		});
// 	}
// }, 1000);
// global.jobsDB = [];
// global.collection.jobs.find({}).toArray(function(error, data) {
// 	global.jobsDB = data;
// });

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
global.server.get("/api/v1/jobs.json", function(request, response) {
	let data = global.jobsDB;
	// ok!
	if (data[0]) {
		// filter
		if (request.query) {
			// search
			var query = request.query;
			for (var param in query) {
				if (typeof data[0][param] !== "undefined") {
					var qRegEx = new RegExp(query[param], "i"); // I like RegExp! Not most efficient, but ok for a site with one user
					data = data.filter(function(job) {
						return qRegEx.test(job[param]); // Don't think you can inject malicious code from a URI variable into a RegExpression. Can you?
					});
				}
			}
		}
		// sort
		data.sort(function(a, b) {
			return b._rating - a._rating;
		});
		// limit
		let query_limit = parseInt(request.query.limit) || 1000;
		let query_start = parseInt(request.query.start) || 0;
		data = data.slice(query_start, query_limit + query_start);
	}
	// send
	response.setHeader("Content-Type", "application/json");
	response.writeHead(200);
	response.write(JSON.stringify({ results: data.length, data: data }, null, "\t"));
	response.end();
});
/*
	API: POST
*/
global.server.post("/api/v1/jobs-apify-webhook/:location", function(request, response) {
	// location
	const location_suffix = request.params.location ? "-" + request.params.location : "";
	const jobsUrl_initial = `api/v1/jobs${location_suffix}-50.json`;
	const jobsUrl = `api/v1/jobs${location_suffix}.json`;
	// dev env
	if (!request.body._id) {
		request.body._id = "F4aaFM6efGqF6g6DH";
	}
	// fetch data
	const resultsUrl = "https://api.apify.com/v1/execs/" + request.body._id + "/results";
	global.rqr.https.get(resultsUrl, res => {
		res.setEncoding("utf8");
		let body = "";
		res.on("data", data => {
			body += data;
		});
		res.on("end", () => {
			// process data
			let resultsProcessed = 0;
			let resultsData = JSON.parse(body);
			if (resultsData && resultsData[0] && resultsData[0].pageFunctionResult) {
				for (var rD in resultsData) {
					let job = resultsData[rD].pageFunctionResult;
					resultsProcessed += processJobs(job);
				}
				global.logger.info({ "API: POST `/api/v1/jobs-apify-webhook` successful": { source: resultsUrl, results: resultsProcessed } });

				/*
					save data
				*/
				S3UploadToBucket(jobsUrl, JSON.stringify(global.jobsDB));
				S3UploadToBucket(jobsUrl_initial, JSON.stringify(global.jobsDB.slice(0, 50)));
			} else {
				global.logger.error({ "API: POST `/api/v1/jobs-apify-webhook` failed to return data: ": resultsUrl });
			}
		});
	});
	// success response without waiting for async data above
	response.setHeader("Content-Type", "application/json");
	response.writeHead(200);
	response.write(JSON.stringify({ data: "OK", error: 0 }, null, "\t"));
	response.end();
});

// magic
const processJobs = function(results) {
	// format
	let added = 0;
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
		global.jobsDB[res._id] = res;
		// mongoose
		global.collection.jobs.save(res);
		added++;
	}

	// return error or number
	return added;
};

/*
ROUTES
*/
// var index = require('./routes/index');
// var users = require('./routes/users');
// global.server.use(express.static(path.join(__dirname, 'public')));
// global.server.use('/', index);
// global.server.use('/users', users);
// global.server.use(function(req, res, next) {
// var err = new Error('Not Found');
// err.status = 404;
// next(err);
// });
/*
SERVE
*/
module.exports = global.server;
