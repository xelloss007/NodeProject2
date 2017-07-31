/**
 * http://usejsdoc.org/
 */

//필요한 샘플은 npm사이트 들어가서 찾아서 사용하자. 설치는 --save
var _ = require('underscore');

var arr = [4,3,5,4,7,8];

//npm install 패키지명 --save -g
var first = arr[0];
//var first = _.first(arr);
console.log('first : ' + first);


//var last = arr[arr.length - 1];
var last = _.last(arr);
console.log('last : ' + last);