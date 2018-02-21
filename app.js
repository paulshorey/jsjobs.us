
const { createServer } = require('http')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const routes = require('./routes')
const express = require('express')
const handle = app.getRequestHandler()
process.fs = require('fs')
process.console = console;


let jobsDB = {};
const jobsDB_file = "/www/db/v1_jobs";
if (!process.fs.existsSync("/www/db")){
		process.fs.mkdirSync("/www/db");
}
if (process.fs.existsSync(jobsDB_file)) {
		process.fs.readFile(jobsDB_file, 'utf8', function (err, data) {
				if (data) {
						jobsDB = JSON.parse(data);
				}
		});
} else {
		process.fs.writeFile(jobsDB_file, jobsDB);
};


app.prepare()
.then(() => {
	const server = express()


	// next.js - routes
	routes.forEach(function(name){
		server.get('/'+name, (req, res) => {
			return app.render(req, res, '/'+name, req.query)
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
												process.console.log(param, typeof query[param], query[param]);
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