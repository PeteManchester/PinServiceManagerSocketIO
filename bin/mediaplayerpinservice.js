//var io = require('socket.io')(8088,  ({path: '/pete/test'},{host:'0.0.0.0'}));

///Class to monitor the pin changes made by MediaServer
///When it receives a 'save' message from a MediaServer it will broadcast the message to all registered Mediaservers

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http,  ({path: '/PinServiceManager1/webapi/broadcast'}));

var pins = '{}';
var fs = require('fs');


http.listen(8088, '0.0.0.0', function(){
    console.log('ServerAdapter: ' + io.adapter());
});

io.on('connection', function (socket) {
    console.log('Connected to client');
    try {
        var test = fs.readFileSync('pins.json');
        pins = JSON.parse(test);
    }
    catch (e) {

    }

    //Is a MediaServer calling the 'save' method
    socket.on('save', function (message) {
        console.log('Save Pins: ' + message);
        this.pins = JSON.parse(message);
        fs.writeFileSync('pins.json',message);
        broadcastMessage(socket,'pins',this.pins);
    });

    socket.on('disconnect', function (data) {
        console.log('disconnected from client: ' + data);
    });


});

function broadcastMessage(socket, action, text) {
    console.log('Broadcast Action: ' + action + ' text: ' + text);
    socket.broadcast.emit(action, text);
}


function sendMessage(socket, action, text) {
    console.log('Send Action: ' + action + ' text: ' + text);
    socket.emit(action, text);
}