/**
 * http://usejsdoc.org/
 */


//-----------------------------------------------------------------------

//function foo(){
//	
//}
//
//function add(a, b, c, d, e){
//	var tot = a + b;
//	var name = c.name;
//	d.sort();
//	e(3, 4); //호출
////	foo(a, e); //내가 받은 함수를 전달하려면  a를 쓰려면 a, e로 전달하려면 e.
//}
//
//var fnc = (err, data) => {
//	
//};
//
//
//// {} : 오브젝트라고 칭함.
////함수를 인자로 전달해서 비동기방식을 만든다.
//add(3, 4, {name : '홍길동'}, [3,4], (err, data) => {
//	
//});
//
//
//


//-----------------------------------------------------------------------


//var sleep = require('system-sleep');
//function a(){
//	sleep(5000); // 5 seconds 
//	console.log('X');
//}
//
//
//console.log('A');
////a(); //A실행되고 a함수가 실행된 후 B,C가 실행됨.
//
////비동기방식
//setTimeout(a, 10); //10은 밀리세컨드 0.01초 / 1000 = 1초
//console.log('B');
//console.log('C');


//-----------------------------------------------------------------------

//2교시

//자바스크립트는 모든 함수는 리턴된다.
function foo(){
	
//	return {name : 'korea'};  //문자열이 아니고 객체이다.
	return function(a, b){
		console.log('함수리턴된 함수' + a + b);
	};
}


var a = foo(); //함수를 받는 것은 변수로 받는다. a()이런식으로 받지말고!
a(3,4); //호출은 인자를 넣어야함. 위에 함수보고 인자에 맞게 대입해주자.
//var a = new foo();

console.log(a);