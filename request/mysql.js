var mysql = require('mysql');

var pool = mysql.createPool({
    // host     : 'localhost',
    host     : '101.132.71.32',
    user     : 'root',
    password : '123',
    port: '3306',
    database: 'thinkphp',
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
}

exports.query = query;
