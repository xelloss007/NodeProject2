/**
 * http://usejsdoc.org/
 */

//p.120 파일을 직접 열고 닫으면서 읽거나 쓰기
//순서가 중요하니깐 집중하자.

const fs = require('fs');

fs.open('./sam.txt', 'w', function(err, fd){ //'w' : 파일이 없으면 만들어지고 파일이 있으면 이전 내용을 모두 삭제합니다.
	if(err){
		console.log(err);
		return;
	}
	console.log(fd);

	var buf = new Buffer('안녕! 상호씨\n');
	fs.write(fd, buf, 0, buf.length, function(err, written, buffer){
		if( err ){
			console.log(err);
//			return;
		}
		console.log(written);	//18  bytes
		console.log(buffer);
		fs.close(fd, function(){
			console.log('close success');
		});
	});
});

//fs.close(fd, function(){
//console.log('close success');
//});
//});