const routes = module.exports = require('next-routes')()

routes.add('about'),
routes.add('search_server', '/search_server/:search?'),
routes.add('search_static', '/search_static/:search?')

// routes
// .add('about')
// .add('blog', '/blog/:slug')
// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})