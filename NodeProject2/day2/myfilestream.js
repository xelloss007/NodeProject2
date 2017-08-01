/**
 * http://usejsdoc.org/
 */

/*
  1. 파일 관리하는 모듈을 만들어서 이를 불러와서 실행하는
   자바 스크립트를 만들어라
   myfilestream.js

   파일 읽기,
   파일 쓰기
   폴더 생성
   파일 삭제
   파일 이름 변경
   파일 목록 불러오기

 */


//------------------------------------------------------

const fs = require('fs');
const path = require('path'); //경로

//파일 읽기
//비동기방식

exports.myFileRead = function(fname, dirname, func){
	var dirfName = path.join(dirname, fname);
	fs.readFile(dirfName, func);
};

//동기방식
//exports.myFileRead = function(fname, dirname){
//	var dirfName = path.join(dirname, fname);
//	fs.readFile(dirfName, function(err, data){
//		if( err ){
//			console.log(err);
//			return;
//		}
//		console.log('동기방식 : ' + data);
//
//	});
//};
//------------------------------------------------------
//파일 목록 불러오기
//비동기방식
exports.myReadDir = function(dir, fn){
	fs.readdir(dir, fn);
};

//동기방식

//------------------------------------------------------
