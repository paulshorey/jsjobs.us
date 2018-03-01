const Router = require('nextjs-dynamic-routes')
 
const router = new Router()
 
router.add({ name: 'about', pattern: '/about' })
router.add({ name: 'search_server', pattern: '/search_server/:search?' })
router.add({ name: 'search_static', pattern: '/search_static' })
 
module.exports = router