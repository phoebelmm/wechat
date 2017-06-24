var mysql = require('mysql');
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'stu'
});
pool.query('select * from user',function (err,rows) {
    if (err){
        console.error(err);
    }else {
        console.log(rows);
    }
})