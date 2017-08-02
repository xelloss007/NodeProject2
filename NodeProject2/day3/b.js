/**
 * http://usejsdoc.org/
 */

//p.138 예제

const http = require('http');
const fs = require('fs');

const port = 3000;
const server = http.createServer();

server.listen(port, () => {
	console.log('server start');
});
server.on('connection', (s) => { //상대방의 접속을 관리할 객체
	var addr = s.address();
	console.log('접속 ip : ' + addr.address)
});
var num = 0;
server.on('request', (req, res) => {
	num++;
	console.log('method : ' + req.method);
	console.log('url : ' + req.url);
	console.log('ip : ' + req.socket.address().address); //아이피 뽑아냄

	//혹시라도 페이지가 다운로드되면 이쪽이 오타!! 
	//appliction/json
	res.writeHead(200, {'content-type' : 'text/html;charset=utf-8', 'a' : 'LEE'});
	fs.readFile('b.html', 'utf8', (err, data) => {
		if(err){
			res.write('서버가 바쁩니다 다시접속');
			console.log(err);
		}else{
			res.write(data);
		}
		res.end();
	})
	
//	res.write('<html>');
//	res.write('<head>');
//	res.write('</head>');
//	res.write('<body>');
//	res.write('num : ' + num + '<br>');
//	res.write('</body>');
//	res.write('</html>');
//	res.end();
	
//	res.end('hi');
});

server.on('close', function() {
	console.log('접속종료');
})