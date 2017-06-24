var async = require('async');
async.auto ({
    mix: ['water','flour',function (result,cb) {
        console.log(result);
        cb(null,result.water+result.flour);
    }],
    stream: ['mix',function (result,cb) {
        cb(null,result.mix+result.water+result.flour);
    }],
    water : function (cb) {
        cb(null,'谁');
    },
    flour : function(cb){

        cb(null,'面粉');
    }


},function (err,result) {
    console.log(result);
});