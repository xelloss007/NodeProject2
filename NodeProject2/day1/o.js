/**
 * http://usejsdoc.org/
 */

const fs = require('fs');
const path = require('path');

//이름바꾸기

var oldname = path.join(__dirname, 'test.txt');
var newname = path.join(__dirname, 'java.txt');

fs.stat(oldname, function(err, stat){
	if(stat){
		fs.rename(oldname, newname, function(err){
			if(err){
				console.log('rename 실패');
			}else{
				console.log('rename 성공');
			}
		});
	}
});



//목록 불러오기

fs.readdir('.', function(err, files){ //콜백 디렉토리에있는 파일의 이름이 배열.
	if(err){
		console.log('list err');
		return;
	}
	
	files.forEach(function(v, index){
		console.log(v, index);
	});
	
});
