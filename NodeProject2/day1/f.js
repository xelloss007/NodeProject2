/**
 * http://usejsdoc.org/
 */

//p.110 url uri 차이점  url > uri 느낌
//중요!! 안드로이드에서는 uri > url 개념이 다름.

const url = require('url');

var surl = 'http://user:pass@host.com:8080/p/a/t/h?query=string&name=korea&age=20#hash';

var cururl = url.parse(surl);
	
var href = cururl.href;

console.log('href : ' + href);
console.log('href : ' + cururl.host);
console.log('href : ' + cururl.auth);  //@전까지 출력
console.log('href : ' + cururl.hostname);  //host.com 출력
console.log('query : ' + cururl.query);  //query=string&name=korea&age=20 / ?뒤부터 #앞까지 출력


//p.111  querystring : 자바스트림 객체(제이슨 객체)로 만들어줌.
var querystring = require('querystring');
var obj = querystring.parse(cururl.query);
console.log('query : ' + cururl.query);
console.log(obj); //제이슨 객체로 만들어줌..
console.log('obj : ' + obj.query); //obj : string