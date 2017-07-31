/**
 * http://usejsdoc.org/
 */

const net = require('net');

var ip = '192.168.205.118';
var port = '55555';

var client = new net.Socket();

client.connect(port, ip, function(){
	console.log('connect client');
	client.write('안녕!');
});

client.on('data', (data) => {
	console.log('receive data : ' + data);
//	client.destroy(); //접속을 끊어줌.
	client.end(); //쌍방 접속을 끊어줌~~~
});
client.on('end', () => {
	console.log('connected close');
});