const sqModel = require('../lib/mysql.js');

var fn_index = async (ctx, next) => {
  console.log(ctx.request);
  ctx.response.body = 'hello'
}

var fn_test = async (ctx, next) => {
  console.log(ctx.request)
  ctx.response.body = {status: 1, message: '成功', data: 123}
}

module.exports = {
  'GET /': fn_index,
  'GET /getTest': fn_test
}