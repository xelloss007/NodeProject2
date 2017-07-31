/**
 * http://usejsdoc.org/
 */

const fs = require('fs');
const readline = require('readline');
var fname = 'p132exam.txt';
var fInput = fs.createReadStream(fname);

const rl = readline.createInterface(fInput, process.stdout);

//'line'마다 이벤트가 방출되는 input스트림 라인 종료 입력을 수신한다 ( \n, \r나 \r\n). 
//이것은 대개 사용자가 <Enter>또는 <Return>키를 누르면 발생 합니다.
rl.on('line', (data) => {
	var tokens = data.split(' ');
	var name = tokens[0];
	  console.log(name);
//	  console.log(data);
	});

rl.on('close', function(){
	console.log('read end');
});