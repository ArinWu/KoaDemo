
const koa = require('koa')
const app = new koa();
const Router = require('koa-router')

// const router = new Router({
//     prefix: '/home'
// });
let home = new Router()
home
    .get('/home', async(ctx) => {
    ctx.body = 'home'
    })
    .get('/todo', async(ctx) => {
        ctx.body = 'todo'
    })
let page = new Router()
page
    .get('/home', async(ctx) => {
    ctx.body = 'home'
    })
    .get('/todo', async(ctx) => {
        ctx.body = 'todo'
    })

let router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, ()=> {
    console.log('3000')
})