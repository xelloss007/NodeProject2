/**
 * http://usejsdoc.org/
 */

//const myfs = require('./myfiestream');
//
//myfs.readFile('./java.txt', function(err, data){
//	if(err){
//		console.log(err);
//	}else{
//		console.log(data);
//	}
//});

//var data = myfs.readFileSync('java.txt');
//console.log('data');




//------------------------------------------------------


const fs = require('fs');
const path = require('path');

var fname = 'package.json';
var dirname = '..';

var dirfName = path.join(dirname, fname); //앞경로에 뒤경로를 붙입니다.
var data1 = 'basic';
fs.readFile(dirfName, 'utf8', (err, data) => {
	if(err){
		console.log(err);
	}
	data1 = data;
	console.log('함수 안쪽' + data);
	console.log('함수 안쪽 this.' + this.data);
});

function a(){
	console.log('a : ' + data1);
}
setTimeout(a, 5000);

//console.log('함수 바깥쪽' + data);