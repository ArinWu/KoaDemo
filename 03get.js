const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {
    let url = ctx.url;
    //request获取get
    let request = ctx.request;

    let req_query = request.query;
    let req_string = request.querystring;

    //上下文获取et
    let ctxquery = ctx.query
    let ctx_querystrng = ctx.querystring
    ctx.body= {
        url,
        req_query,
        req_string,
        ctxquery,
        ctx_querystrng,
    }
})
app.listen(3000, ()=> {
    console.log('3000')
})
//http://localhost:3000/?age=300&tia=3000
//{"url":"/?age=300&tia=3000","req_query":{"age":"300","tia":"3000"},"req_string":"age=300&tia=3000"}