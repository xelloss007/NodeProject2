/**
 * http://usejsdoc.org/
 */

const http = require('http');

const hostname = '192.168.205.135';
const port = 3000;
var num = 0;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  num++;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('num', num);
  res.end('hi yujin LoVe num : '+ num + '\n');

  if(num >= 10){
	  server.close();
  }
});

server.on('close', function() {
	console.log('server close');
	process.exit();
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});