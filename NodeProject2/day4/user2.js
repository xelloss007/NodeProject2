/**
 * http://usejsdoc.org/
 */

var MyFunc = function(){
	this.name = 'korea';
	console.log('aaa : ' + this.name);

}

MyFunc.prototype.setName = function(){
	this.name = name;
}
	MyFunc.prototype.doa = function(){
	console.log('doa');
}

module.exports = new MyFunc();


//module.exports = function(){
//this.name = 'korea';
//console.log('aaa : ' + name);
//this.doa = function(){
//	console.log('doa');
//}
//this.setName = function(){
//	this.name = name;
//}
//return this;
////return undefined;
//}