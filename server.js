

var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname))
app.get('/',function (req,res) {
    res.sendfile('./index.html');
});

var clients = [];
var server = require('http').createServer(app);
var io  = require('socket.io')(server);
io.on('connection',function (socket) {
    clients.push(socket);
    socket.on('message',function (msg) {
       clients.forEach(function (client) {
           client.send(msg);
       });
    });
});
server.listen(80);