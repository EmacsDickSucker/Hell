const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

// Serve static files from the "public" directory
app.use(serve(__dirname + '/public'));

app.listen(3000);