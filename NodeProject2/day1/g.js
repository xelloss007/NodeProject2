/**
 * http://usejsdoc.org/
 */


//process.addListener('exit', function(){	//첫번째인자 : 이벤트의 종류, 두번째인자 : 함수(function)
//	console.log('exit call');
//});  

process.on('exit', function(){	//addListener 대신 on으로 사용.
	console.log('exit call');
});  


process.once('doAdd', function(){ //on : 반복실행 , once : 한번실행
	console.log('doAdd call');
});  

function fnc(){
	process.exit();
}
function foo(){
	process.emit('doAdd');
//	console.log('foo');
}

setInterval(foo, 1000); //foo함수를 1초에 한번씩 호출.

setTimeout(fnc, 5000); //fnc함수 5초후에 실행.