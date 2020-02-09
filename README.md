[https://chenshenhai.github.io/koa2-note/note/route/koa-router.html](https://chenshenhai.github.io/koa2-note/note/route/koa-router.html)

[https://jspang.com/detailed?id=34#toc23](https://jspang.com/detailed?id=34#toc23)

#开始
###基本命令：
```

npm init -y
npm install --save koa
node xxx.js
```

###基本文件
```
const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
```
#插件，中间件

###koa-bodyparser, 处理url
```
npm install --save koa-bodyparser@3
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
```

###koa-router路由
###koa-cookies
###koa-static（中

###koa-ejs