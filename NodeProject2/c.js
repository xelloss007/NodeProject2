/**
 * http://usejsdoc.org/
 */


var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public')); ///public 폴더 하나 만들어줌.

//라우팅
app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/form', (req, res) => {
	var name = req.query.name;
	var age = req.query.age;
	var mail = req.query.mail; //체크박스도 그냥 쿼리로 받는다!!
	var size = req.query.size; 
//	var tel = req.query.tel; 
	var tel = req.query.tel[0]+ '-' + req.query.tel[1] + '-' + req.query.tel[2]; 
	var output = '이름 : ' + name + '<br>';
	output += '나이 : ' + age + '<br>'; //누적!!!
	output += '메일 : ' + mail + '<br>'; //누적!!!
	output += '크기 : ' + size + '<br>'; //누적!!!
	output += 'tel : ' + tel + '<br>'; //누적!!!
	res.send(output);
});


//app.get('/aaa.html', (req, res) => {
//	res.send('get : jin aaa');
//});


// login.html



app.post('/aaa', (req, res) => {
	res.send('post : jin aaa');
});

app.put('/user', function (req, res) {
	res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
	res.send('Got a DELETE request at /user');
});


app.listen(3000);