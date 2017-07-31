/**
 * http://usejsdoc.org/
 */

const myfs = require('./myfiestream');

//myfs.readFile('./java.txt', function(err, data){
//	if(err){
//		console.log(err);
//	}else{
//		console.log(data);
//	}
//});

var data = myfs.readFileSync('java.txt');
console.log('data');
