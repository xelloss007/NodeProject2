/**
 * http://usejsdoc.org/
 */

const fs = require('fs');

var fname = './sam.txt';

fs.stat(fname, function(err, stats){
	console.log(err);
	console.log(stats);
	
	if(!err){
		fs.unlink(fname, function(err){
			if(err){
				console.log(err);
			}else{
				console.log('delete success');
			}
		});
	}
});

//디플리케이트!! 안쓰여!!!!!
//fs.exists(fname, function(exists){
//	console.log(exists ? '존재함' : '존재안함');
//});