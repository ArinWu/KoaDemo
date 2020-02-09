
const koa = require('koa')
const app = new koa();

const fs = require('fs')

const app  = new koa();
const Router = require('koa-router')

const router = new Router();

router
    .get('/', function(ctx, next) {
    ctx.body = 'Hello JSPang'
    })
    .get('/todo', (ctx, next) => {
        ctx.body="Todo"
    })

app
    .use(
        router.routes()
    )
    .use(router.allowedMethods());

app.listen(3000, ()=> {
    console.log('3000')
})