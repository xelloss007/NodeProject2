/**
 * http://usejsdoc.org/
 */

var _ = require('underscore');

exports.last = function(arr){
	return _.last(arr);
};
exports.last = function(arr){
	return _.first(arr);
};




exports.myMax =function(){
	var max = arguments[0];
	if(arguments.length===0){
		return max;
	}else{
		for( i=0 ; i<arguments.length-1 ; i++){
			if(max<arguments[i]){
				max=arguments[i];
			}
		}
		return max;
	}
};

exports.max = function(arr){
	return _.max(arr);
};



exports.myMin = function(){
	var min = arguments[0];
	if(arguments.length===0){
		return min;
	}else{
		for( i=0 ; i<arguments.length-1 ; i++){
			if(min>arguments[i]){
				min=arguments[i];
			}
		}
		return min;
	}
};


