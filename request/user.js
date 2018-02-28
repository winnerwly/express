const user = require('./func/getUserInfo');
const express = require('express');
// 操作数据库
const db = require("./mysql");
// 解析url地址
const url = require('url');
// 解析url中请求的数据
const querystring = require('querystring');

module.exports = function (app) {

    app.get('/userinfo', function (req,res){
        user.getUserInfo(req, res)
    })
    //用户登陆
    app.post('/user', function (req, res) {
        // res.render("login", {'title': 'zhuasdua'})
        console.log(req.body);
        // console.log('res', res);

        let username = req.body.username;
        let password = req.body.password;
        console.log(username+"...."+password)
        db.query(`select * from user where name='${username}'`, function (err, rows) {
            if (err) {
                console.log(err);
                res.send([{code: 500,msg: '查询异常'}])
            } else {
                if(rows.length==0){
                    res.send([{code: 201,msg: '用户名不存在'}])
                }
                else if(rows[0].password != password){
                    res.send([{code: 201,msg: '密码错误'}])
                }else if(rows[0].password == password){
                    res.send([{code: 200,msg: '查询成功',obj: rows[0]}])
                }

            }
        })
    })

}
