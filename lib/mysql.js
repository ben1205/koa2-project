const mysql = require('mysql');
const config = require('../config/default.js');

var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port : config.database.PORT
});

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve (rows)
          }
          connection.release()
        })
      }
    })
  })
}

// 查找用户示例
exports.findUserData = (name) => {
  let _sql = `select * from users where name="${name}";`
  return query(_sql)
}