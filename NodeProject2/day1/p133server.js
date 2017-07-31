/**
 * http://usejsdoc.org/
 */

const net = require('net');

var server = net.createServer((socket) => {
	console.log(socket.remoteAddress);
	socket.on('data', (data) => {
		console.log('read data : ' + data);
		socket.write('echo : ' + data);
	});
	socket.on('end', () => {
		console.log('connected close');
	});
});

server.listen(55555);
console.log('server start');


