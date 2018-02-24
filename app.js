const url = require('url')
const fs = require('fs')
const { createServer } = require('http')
const next = require('next')
const dev = process.env.NODE_ENV === 'development'
const port = 3000
const server = require('express')()
server.use(function(request, response, next){
	var referrer = url.parse(request.headers.referer||'', true, true).hostname;
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


const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)


// process.secret = require('../secret/all.js'); // not on GitHub!


let jobsDB = {};
const jobsDB_file = "/www/db/v1_jobs";
if (!fs.existsSync("/www/db")){
		fs.mkdirSync("/www/db");
}
if (fs.existsSync(jobsDB_file)) {
		fs.readFile(jobsDB_file, 'utf8', function (err, data) {
				if (data) {
						jobsDB = JSON.parse(data);
				}
		});
} else {
		fs.writeFile(jobsDB_file, jobsDB);
};

app.prepare()
.then(() => {


	/*
		FIRST, API ROUTES
	*/
	server.get('/api/all', function(request, response) {
		console.log('GET /api/all');
		
		// format response
		let data = Object.values(jobsDB);

		if (data[0]) {

			// filter
			if (request.query) {

					// search
					var query = request.query;
					for (var param in query) {
						if (typeof data[0][param] !== "undefined") {
							console.log(param, typeof query[param], query[param]);
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

		// success response
		response.setHeader('Content-Type', 'application/json');
		response.writeHead(200);
		response.write(JSON.stringify({results: data.length, data:data, error:0},null,"\t"));
		response.end();

	});
	server.get('/api*', function(request, response) {
		// success response
		response.setHeader('Content-Type', 'application/json');
		response.writeHead(400);
		response.write(JSON.stringify({error:1,errorMessage:"no API at this URL"},null,"\t"));
		response.end();
	});





	/*
		Application ROUTES
	*/
	server.use(handler);

	/*
		START SERVER
	*/
	server.listen(port, (err) => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})