/**
 * http://usejsdoc.org/
 */


//p.117  파일 다루기

const fs = require('fs');  //const : 상수 , var : 변수.

//비동기방식

fs.readFile('../package.json', 'utf-8', function(err, data){  //첫번째 : 에러, 두번째 : 정상적으로 작동했을시
	if( err ){
		console.log(err);
		return;
	}
	console.log('read data : ' + data);
});

//	console.log('data : ' + data); //밖에 다 쓰면 안됨. 안에 써야함...


// 동기방식
//var data = fs.readFileSync('../package.json', 'utf-8');

//console.log('data : ' + data);