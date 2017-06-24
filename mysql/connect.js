
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'stu'

});
connection.connect();
/*
var sql = 'select * from student';
connection.query(sql,function (err,rows,field) {
    if (err){
        console.error(err);
    }else {
        console.log(rows);
        console.log(field);
    }
})*/

/*
var username = 'zhangsan';
var password = '123';
var sql = 'insert into user(username,password) values("'+ username +'","'+ password +'")';
connection.query(sql,function (err,rows,field) {
    if (err){
        console.error(err);
    }else {
        console.log(rows);
        console.log(field);
    }
});*/
var username = 'zhangsan';
var password = '123';
var sql = 'select * from user where username =? and password=?';
console.log(sql);
connection.query(sql,[username,password],function (err,result) {
    if (err){
        console.error(err);
    }else{

        if (result.length > 0){
            console.log(result);
        }
    }
    connection.destroy();
});