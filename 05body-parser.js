
const koa = require('koa')
const app = new koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
app.use(async (ctx) => {
    if(ctx.url === '/' && ctx.method === 'GET') {
        let html = `
        <h1>post demo</h1>
        <form method="POST" action="/">
            <input name="username" />
            <input name="passward" />
            <input name="label" />
            <button type="submit">submit</button>
        </form>
        `;
        ctx.body = html
        
    }else if(ctx.url === '/' && ctx.method === 'POST') {
        
        ctx.body= ctx.request.body
    }else {
        ctx.body="404"
    }
})
//处理一波提交后的数据
function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata="";
            ctx.req.on('data', (data) => {
                postdata +=data
            })
            ctx.req.addListener('end', function() {
                let parseData = parseToJson(postdata)
                resolve(parseData)
            })
        }catch(err) {
            reject(err)
        }
    })
}
// 转json
//username=%E4%BD%A0%E5%A5%BD&username=%E4%BD%A0%E5%A5%BD 
const parseToJson = (queryStr) => {
    let queryData={}
    let queryStrList=queryStr.split('&')
    console.log(queryStrList);
    console.log(queryStrList.entries())
    for(let [index, queryStr] of queryStrList.entries() ) {
        let itemList = queryStr.split('=')
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);

    }
    return queryData
    
}
app.listen(3000, ()=> {
    console.log('3000')
})