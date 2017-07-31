/**
 * http://usejsdoc.org/
 */

//setTimeout(함수명, 1000);  //ms
//setInterval();

//clearTimeout(변수명);

function a(){
	console.log('a');
};


//setTimeout(a, 1000); // 한번만 호출!!! a함수를 실행하는데 1000이 지난후 실행하라!
//setInterval(a, 1000); // 주기적 호출!!!! a 함수가 계속해서 찍힘.

//반환값을 가짐. setInterval과 clearTimeout은 세트로 쓰이는듯하다!!
var time = setInterval(a, 1000); // 주기적 호출!!!! a 함수가 계속해서 찍힘. 

function b(){
	clearTimeout(time);
}
setTimeout(b, 5000);
console.log('b');

