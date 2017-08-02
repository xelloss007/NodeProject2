/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/calc', (req, res) => {
	var output ='입력해';
	var a = req.query.text1;
	var b = req.query.text2;
	var c = req.query.size;
	console.log(a);
	console.log(b);
	console.log(c);
	switch(c){
	case '0' :
		output = parseInt(a) + parseInt(b);
		break;
	case '1' :
		output = parseInt(a) - parseInt(b);
		break;
	case '2' :
		output = parseInt(a) * parseInt(b);
		break;
	case '3' :
		output = parseInt(a) / parseInt(b);
		break;
	}
//	res.send(output.toString());
	res.send(output + "");
});


app.listen(3000);