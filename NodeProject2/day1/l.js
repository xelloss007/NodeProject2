/**
 * http://usejsdoc.org/
 */

//p.128 

const fs = require('fs');
const path = require('path');

var newFolder = path.join(__dirname, 'data');

fs.stat(newFolder, function(err, stat){
	if(err){
		fs.mkdir(newFolder, 0666, function(err){
			if(err){
				console.log('폴더 만들기 실패');
			}else{
				console.log('폴더 만들기 성공');
			}
		});
	}else{
		console.log('이미있음');
	}
});