/**
	1. 파일 관리하는 모듈을 만들어서 이를 불러와서 실행하는 자바 스크립트를 만들어라

	myfilestream.js
	파일 읽기
	파일 쓰기
	폴더 생성
	파일 삭제
	파일 이름 변경
	파일 목록 불러오기
*/

const myfs = require('./myfilestream');

var fname = 'package.json';
var fdir = '.';
var foldername = 'folder';

/*
// 파일 읽기.
console.log('1');
// 우항을 끝내면 좌항에 대입하겠다. = 동기작업을 의미한다.
// var data = myfs.myfileread(fname, dirname);
// 그래서 동기작업을 위해서 변수 대입을 없앴다.
console.log('2');
myfs.myfileread(fname, fdir, (err, data) => {
	if( err ) {
		console.log('err %s', err);
		return;
	}
	// 현재 작업 결과 위치는 이 함수를 벗어나질 못했다.( 값 전달이 안됐다. )
	console.log('myTest : %s', data);
});
console.log('3');
*/


/*
// 파일 쓰기.
var infile = './infile.txt';
var outfile = './outfile.txt';
console.log('1');
myfs.myfilewrite(infile, outfile);
console.log('2');
*/


/*
// 폴더 생성
myfs.mymkdir(foldername, fdir, (err) => {
	if( err ) {
		console.log('folder making fail');
	} else {
		console.log('folder making success');
	}
});
*/


/*
// 파일 삭제
var dfile = 'dfile.txt';
myfs.mydeletefile(dfile, err => {
	if( err ) {
		console.log(err);
	} else {
		console.log('delete complete');
	}
});
*/


/*
// 파일 이름 변경
var oldfname = 'oldfile.txt';
var newfname = 'newfile.txt';

myfs.myrenamefile(fdir, oldfname, newfname, (err) => {
	if( err ) {
		console.log('rename fail');
	} else {
		console.log('rename success');
	}
});
*/


/*
// 목록 읽기.
myfs.myreaddir('.', (err, files) => {
	if( err ) {
		console.log('err %s', err);
		return;
	};
	files.forEach( value => {
		console.log(value);
	});
});
 */