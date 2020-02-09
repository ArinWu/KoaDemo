
const koa = require('koa')
const app = new koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
const fs = require('fs')
function render(page) {
    return new Promise((resolve, reject) => {
        let pageUrl = `./page/${page}`;
        fs.readFile(pageUrl, 'binary', (err, data) => {
            console.log('file reading')
            if(err) {
                reject(err)
            }else {
                resolve(data)
            }
        })
    })
}

async function route(url) {
    let page = '404.html';
    switch(url) {
        case '/':
            page = 'index.html';
            break;
        case '/index':
            page = 'index.html'
            break;
        case '/todo':
            page = 'todo.html'
            
        case '/404':
            page = '404.html'
        default: break;
    }
    let html = await render (page);
    return html;
}
// 处理url,然后处理文件
app.use(async (ctx) => {

    let url = ctx.request.url;
    let html = await route(url)
    ctx.body = html;

})

app.listen(3000, ()=> {
    console.log('3000')
})