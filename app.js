const url = require('url')
const fs = require('fs')
const { createServer } = require('http')
const next = require('next')
const dev = process.env.NODE_ENV === 'development'
const devApp = dev ? {dev} : undefined;
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
const app = next(devApp)
const handler = routes.getRequestHandler(app)


app.prepare()
.then(() => {
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