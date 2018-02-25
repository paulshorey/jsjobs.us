const url = require('url')
const fs = require('fs')
const { createServer } = require('http')
const next = require('next')
const dev = process.env.NODE_ENV === 'development'
const devApp = dev ? {dev} : undefined;
const port = 3000
const server = require('express')()
// app.use(favicon(dirname + '/public/favicon.ico'));


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