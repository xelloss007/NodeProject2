/**
 * http://usejsdoc.org/
 */


//var underscore = require('underscore');
//var arr = [1,8,4,9,6,7];
//
//console.log(arr[0]);
//console.log(underscore.first(arr));
//console.log(arr[arr.length-1]);
//console.log(underscore.last(arr));

var _ = require('underscore');
//모듈을 가지고오고 사용할 수 있는 객체를 반환
var arr = [3,6,9,1,12];
//배열을 생성
console.log(arr[0]);
console.log(_.first(arr));
//배열의 첫번째 원소를 반환하는 역할

console.log(arr[arr.length-1]);
console.log(_.last(arr));
//마지막 원소를 반환하는 역할

var brr = [{c:'c'},{a:'a'},{b:'b'}];
console.log(_.max(arr));
console.log(_.min(arr));
console.log(_.sortBy(brr, function(a,b){return b-a}));
	


