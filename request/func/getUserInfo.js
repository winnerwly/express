// 操作数据库
const db = require("../mysql");
// 解析url地址
const url = require('url');
// 解析url中请求的数据
const querystring = require('querystring');
function getUserInfo (req, res) {
  try {
    const uri = req.url;
    const str = url.parse(uri).query;
    const data = querystring.parse(str);
    const page = data.page || 1;
    const rows = data.rows || 10;

    console.log(data);
    const sql = `select * from user limit ${(page-1)*rows},${rows}`;
    console.log(sql);
    db.query(sql, function (err, rows) {
        res.send(rows);
    })
  }
  catch (e) {
    console.log('代码执行出错了!!!', e);
    res.send('123');
  }
}

module.exports = {
  getUserInfo
};