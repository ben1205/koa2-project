const Koa = require('koa');
const config = require('./config/default.js');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

app.listen(config.port)
console.log(`app is running at ${config.port}`)