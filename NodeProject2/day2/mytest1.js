/**
 * http://usejsdoc.org/
 */


//myfiestream.js를 불러다 쓰고 싶을때 require 사용
const myfs = require('./myfilestream');

//------------------------------------------------------

var fname = 'package.json';
var dirname = '..';

//파일 읽기
//비동기방식

myfs.myFileRead(fname, dirname, function(err, data){
	if( err ){
		console.log(err);
		return;
	}
	console.log('Test : ' + data);
	
	
	
//	myfs.myReadDir('.', function(err, files) {
//		if( err ){
//			console.log(err);
//			return;
//		}
//		files.forEach(function(v) {
//			console.log(v);
//		})
//	});
});


//동기방식
//var data = myfs.myFileRead(fname, dirname);
//console.log(data);


//------------------------------------------------------

//파일 목록 불러오기
//비동기방식
myfs.myReadDir('.', function(err, files) {
	if( err ){
		console.log(err);
		return;
	}
	files.forEach(function(v) {
		console.log(v);
	})
});

//동기방식


//------------------------------------------------------
//파일 쓰기
