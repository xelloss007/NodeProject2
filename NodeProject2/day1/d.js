/**
 * http://usejsdoc.org/
 */


//p.77 내장 모듈
var os = require('os');
var path = require('path');

var name = os.hostname();

console.log('name : ' + name);

//__filename;

console.log(__filename);
console.log(__dirname);

//진짜 만들어지진 않은거 같아...
var img =path.join(__dirname, 'img');
console.log(img);
var sam =path.join(__dirname, 'img', 'sam.png');
console.log(sam);


//\foo\baz\asdf   , 즉 ..앞에 지워진다(?) 근데 왜 이런 작업을 하지..?
var foo = path.join('/foo', 'bar', '..', 'baz/asdf', 'quux', '..');
console.log(foo);
