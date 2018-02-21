
const { createServer } = require('http')
const next = require('next')
const dev = process.env.NODE_ENV === 'development'
const port = 3000
const appConfig = function(){
	if (dev) {
		return {dev};
	}
};
const app = next(appConfig())

const routes = require('./routes')
const express = require('express')
const handle = app.getRequestHandler()



// process.secret = require('../secret/all.js'); // not on GitHub!
const fs = require('fs')


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
	const server = express()


	/*
		FIRST, API ROUTES
	*/
	server.get('/api/all', function(request, response) {
		console.log('GET /api/all');
		
		// format response
		let data = Object.values(jobsDB);
		let thelimit = "test";

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
		THEN, APPLICATION ROUTES
	*/

	// next.js - routes
	server.get('/', (req, res) => {
		return handle(req, res)
	})
	routes.forEach(function(name){
		server.get('/'+name, (req, res) => {
			return handle(req, res)
		})
	});


	// next.js - special case
	server.get('/:search?/:in?/:location?', (req, res) => {
		if (req.params.search === "_next" || req.params.search === "static") {
			return handle(req, res)
		}
		if (req.params.search === "in") {
			req.params.search = undefined;
			req.params.location = req.params.in;
			req.params.in = "in";
		}

		// url
		if (
			(req.params.search && req.params.search.indexOf('.')!==-1) || 
			(req.params.location && req.params.location.indexOf('.')!==-1)
		) {
			// serve favicon.ico or whatever else got in here by accident
			return handle(req, res)
		}
		console.log("\nPAGE /search = "+req.params.search+'/'+req.params.in+'/'+req.params.location+"\n");
		
		// params
		if (!req.query) {
			req.query = {};
		}
		req.query.location = req.params.location;
		req.query.text = req.params.search;

		// queyr
		let data = Object.values(jobsDB);

		if (data[0]) {

				// filter
				if (req.query) {

								// search
								var query = req.query;
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
				let query_limit = parseInt(req.query.limit) || 1000;
				let query_start = parseInt(req.query.start) || 0;
				data = data.slice( query_start, query_limit+query_start);

		}

		// nothing found
		if (!data.length) {
			return handle(req, res)
		}

		// success! serve data
		const responseData = {results: data.length, data:data, error:0};
		return app.render(req, res, '/search', responseData)
	})


	// next.js - index
	server.get('*', (req, res) => {
		return handle(req, res)
	})


	// start server
	server.listen(port, (err) => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})