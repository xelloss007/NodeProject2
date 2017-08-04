/**
 * http://usejsdoc.org/
 */

//var myunder = require('./myUnderscore');

//var last = myunder.last([2,3,4,5,6,7]);
//console.log(last);



var _ = require('underscore');

var array = [1,2,3,4,5,6]


_.each( array, v => console.log( v + 1 ));

// -----------------------------------------------

array.forEach(v => console.log(v + 1));
//------------------------------------------------



var arr = [1,2,3];
console.log('-------each');
_.each(arr, console.log);

console.log('-------map');
_.map([1,2,3], function(num){console.log( num * 3 );});

console.log('-------reduce');
var sum = _.reduce([1,2,3,4], function(memo, num) { 
	return memo+num;
}, 0);
console.log(sum);

console.log('-------find : display first value');
var even = _.find([1,2,3,4,5,6], function(num){ 
	return num % 2 == 0;
});
console.log(even);

console.log('-------filter');
even = _.filter([1,2,3,4,5,6], function(num){ 
	return num % 2 == 0;
});
console.log(even);


console.log('-------reject');
odds = _.reject([1,2,3,4,5,6], function(num){ 
	return num % 2 ==0;
});
console.log(odds);


console.log('-------every');
var result = _.every([true, 1, null, 'yes'], _.identity);
console.log(result);

console.log('-------some');
result = _.some([true, 1, null, 'yes'], _.identity);
console.log(result);

console.log('-------contains');
result = _.contains([1,2,3], 3);
console.log(result);

console.log('-------invoke');
result = _.invoke([[5,1,7], [3,2,1],[1,6,7]], 'sort');
console.log(result);

console.log('-------pluck');
var dowon = [{name: 'dowon', age:22}, {name: 'haha', age:37}, {name: 'youngsik', age:99}];
result = _.pluck(dowon, 'name');
console.log(result);

console.log('-------max');
dowon = [{name: 'dowon', age:22}, {name: 'haha', age:37}, {name: 'youngsik', age:99}];
result = _.max(dowon, function(dw){ return dw.age});
console.log(result);


console.log('-------groupBy');
result = _.groupBy([1.3, 2.1, 2.4, 1.9], function(num){ return Math.floor(num);});
console.log(result);

console.log('-------countBy');
result = _.countBy([1,2,3,4,5], function(num){ return num%2==0? '참':'거짓';});
console.log(result);


console.log('-------size');
result = _.size({one:1, hi:33, name:'dowon'});
console.log(result);





