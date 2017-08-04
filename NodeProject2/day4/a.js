/**
 * http://usejsdoc.org/
 */

const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('express-error-handler');
const multer  = require('multer');
const app = express();

var eh = errorHandler({
	static : {
		'404' : './public/e.html',
		'500' : './public/e1.html'
	}
});


//위치가 중요하다. 라우팅보다 위에 있어야함.
app.use(express.static(__dirname + '/public'));




	

//미들웨어는 여러가게 될 수 있다.
app.use(function(req, res, next){
	console.log('B 미들웨어');
	next();
});

//bodyParser를 사용해서 post 사용가능하게 함.
app.use(bodyParser.urlencoded({ extended: false }));





//파일업로드??

//var upload = multer({dest: 'uploads/'});

var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, 'uploads/')
	  },
	  filename: function (req, file, cb) {
	    cb(null, file.fieldname + '-' + Date.now())
//	    cb(null, file.fieldname) //덮어쓰기
	  }
	})
	 
	var upload = multer({ storage: storage })
	





//미들웨어는 무조건 통과가 된다.
//app.use(function(req, res, next){
//console.log('A 미들웨어');
//if(!req.query.name){
//req.query.name = '김상호씨!!!!!';
//req.mydata = {'id' : req.query.name, 'name' : 'data'};
//}
//next();
//});



//라우팅
app.get('/', function(req, res){
	console.log('/ 라우팅');
	var ip = req.ip;
	app.set('iname', req.query.name)
	res.send('hello 한글 : ' + req.query.name);
});
app.get('/read', function(req, res){
	console.log('/ read 라우팅');
	res.send('name : ' + app.get('iname'));
})

app.get('/readdata', function(req, res){
	var format = req.query.format;
	var obj = {'name' : '홍길동', 'age' : 30}
	// ?format = json 그외 html
	if(format =='json'){
//		res.set('content-Type', 'application/json'); 바로밑한줄과 같은 내용
		res.type('json');
		res.send(obj);
	}else{
		var output = `
			<html>
			<body>
			이름 : ${obj.name} <br>
			나이 : ${obj.age}
			</body>
			</html>

			`;
		res.send(output);
	}
});


app.get('/member', function(req, res){
	var name = req.query.name;
	if(!name){
		res.redirect('/');
		return;
	}
	var output = `name : ${name}`;
	res.send(output);
});


app.get('/dprocess/:name/:num', function(req, res){
	var name = req.params.name;
	var num = req.params.num;
	var output = '이름 : ' + name + ", 번호 : " + num;
	res.send(output);
});


//app.get('/dprocess', function(req, res){
//var name = req.query.name;
//var num = req.query.num;
//var output = '이름 : ' + name + ", 번호 : " + num;
//res.send(output);
//});

app.post('/dprocess', function(req, res){
	var name = req.body.name;
	var output = 'post 이름 : ' + name;
	res.send(output);
});

app.get('/d500', function(req, res){
	var name = req.query.name;
	if(name){
		output = 'post 이름 : ' + name;
	}
	output = req.aaaaaa.name+ 'test';
	res.send(output);
});

app.post('/dfile', upload.array('f', 3), function(req, res){
	console.log(req.files);
	res.send('file test : ' + req.files);
});

//app.use(errorHandler.httpError(404));
//app.use(errorHandler.httpError(500)); 
//app.use(eh);


app.listen(3000, function(){
	console.log('start server');
});

