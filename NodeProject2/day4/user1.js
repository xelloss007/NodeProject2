/**
 * http://usejsdoc.org/
 */


User = function(){
	this.name = '홍길동';
	this.age;
}

User.prototype.doAAA = function(){
	console.log('aaa');
	infun();
}

infun = function(){
	console.log('infun');
}

module.exports = new User();



//var a = function(){
//	this.name = 'korea';
//}
//module.exports = new a();
//
//
//module.exports = function(){
//	return this.name = 'korea';
//};




//module.exports = {
//		getUser : function(){
//			return {id : 'legend', name : '김연아'};
//		}
//};





//exports.gerUser = function(){

//console.log(arguments);
////	arguments.forEach(function(v) {
////console.log(v);
////})
//return {id : 'test01', name : '순수시대'};
//};

