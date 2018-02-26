/*
	process.env
*/
process.env.PATH = __dirname;
process.env.PORT = 1080;
const DEV = process.env.NODE_ENV === 'development';
/*
	global.shh
*/
global.shh = require('/www/secret/all.js'); // not on GitHub!
/*
	global.rqr
*/
global.rqr = global.rqr || {};
global.rqr.express = require('express');
global.rqr.express_parser = require('body-parser');
global.rqr.fs = require('fs');
global.rqr.http = require('http');
global.rqr.https = require('https');
global.rqr.url = require('url');
global.rqr.crypto = require('crypto');
global.rqr.chrono = require('chrono-node');
global.rqr.cookieParser = require('cookie-parser');
global.rqr.bodyParser = require('body-parser');
global.rqr.mongoose = require('mongoose');
/*
	global.logger
*/
let dna_logger = require('logdna').setupDefaultLogger(global.shh.logdna.ingestionKey, {
	index_meta: true,
	hostname: "ps-jobs",
	app: DEV ? "API-dev" : "API-pro"
});
let fixLogger = function(useLib) {
	var doLog = function(level, ...args) {
		if (args[0].stack) {
			// Error
			this[level]( args[0].stack, args[0].message );
			console[level]( args[0].stack );
		}
		else {
			// multiple
			this[level]( ...args );
			console[level]( ...args);
		}
	}.bind(useLib);
	return {
		log: function(...logWhat){ doLog("log",...logWhat) },
		info: function(...logWhat){ doLog("info",...logWhat) },
		warn: function(...logWhat){ doLog("warn",...logWhat) },
		error: function(...logWhat){ doLog("error",...logWhat) }
	}
}
global.logger = fixLogger(dna_logger);
/*
global.server
*/
global.server = global.rqr.express();
global.server.use(function(request, response, next){
	response.setHeader('Access-Control-Allow-Origin', '*'); // CHANGE THIS BEFORE ADDING SENSITIVE DATA!
	response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cache-Control, Pragma, Authorization, Content-Length, X-Requested-With, X-Host');
	if ('OPTIONS' == request.method) {
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
global.model
global.collection
*/
global.model = {};
global.collection = {};
global.rqr.mongoose.connect('mongodb://'+global.shh.mongod.user+':'+global.shh.mongod.pwd+'@localhost');
global.collection.jobs = global.rqr.mongoose.connection.collection('jobs');
global.jobsDB = [];
global.collection.jobs.find({}).toArray(function(error, data) {
	global.jobsDB = data;
});


/************************************************************************************
	API
*/
/*
	API: 500 Error
*/
global.server.use(function(err, req, response, next) {
let data = {error:1,message:err.message}
if (DEV) {
	data.stack = err.stack;
}
response.setHeader('Content-Type', 'application/json');
response.writeHead(500);
response.write(JSON.stringify(data,null,"\t"));
response.end();
});
/*
	API: GET
*/
global.server.get('/api/v1/jobs', function(request, response) {
	let data = global.jobsDB;
	// oops!
	if (error) throw error;
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
	data.sort(function(a,b) {
		return b._rating - a._rating;
	});
	// limit
	let query_limit = parseInt(request.query.limit) || 1000;
	let query_start = parseInt(request.query.start) || 0;
	data = data.slice( query_start, query_limit+query_start);
	}
	// send
	response.setHeader('Content-Type', 'application/json');
	response.writeHead(200);
	response.write(JSON.stringify({results:data.length,data:data},null,"\t"));
	response.end();
});
/*
	API: POST
*/
global.server.post('/api/v1/jobs-apify-webhook', function(request, response) {
	// dev env
	if (!request.body._id) {
		request.body._id = "QhYiWH5sRYN4Rf8vP";
	}
	// fetch data
	const resultsUrl = "https://api.apify.com/v1/execs/"+request.body._id+"/results";
	global.rqr.https.get(resultsUrl, res => {
		res.setEncoding("utf8");
		let body = "";
		res.on("data", data => {
			body += data;
		});
		res.on("end", () => {
			// finally...
			let resultsProcessed = 0;
			let resultsData = JSON.parse(body);
			if (resultsData && resultsData[0] && resultsData[0].pageFunctionResult) {
				for (var rD in resultsData) {
					let job = resultsData[rD].pageFunctionResult;
					resultsProcessed += processJobs(job);
				}
				global.logger.info({ "API: POST `/api/v1/jobs-apify-webhook` successful": { source: resultsUrl, results: resultsProcessed }});
			} else {
				global.logger.error({"API: POST `/api/v1/jobs-apify-webhook` failed to return data: ": resultsUrl});
			}
		});
	});
	// success response without waiting for async data above
	response.setHeader('Content-Type', 'application/json');
	response.writeHead(200);
	response.write(JSON.stringify({data:"OK", error:0},null,"\t"));
	response.end();
});

// magic
const processJobs = function(results){

	// format
	let added = 0;
	const addJobs = {};
	for (var r in results) {
		// each
		var res = results[r];
		for (var k in res) {
			if (typeof res[k] === "string") {
				res[k] = res[k].replace(/\s/g, ' ');
				res[k] = res[k].trim();
			}
		}
		// filter
		res.posted = global.rqr.chrono.parseDate(res.posted);

		// save to DB
		res._status = "new";
		res._id = global.rqr.crypto.createHash('md5').update(res.name+" "+res.company).digest('hex');
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
