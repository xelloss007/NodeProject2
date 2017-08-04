/**
 *	자유로운 개인 연습 시간
 */

const fs = require('fs');
const path = require('path');

// 밖에서 가져가다 쓸 녀석이라고 명시해주자.
// 파일 읽기
exports.myfileread = (fname, fdir, func) => {
	var fpath = path.join(fdir, fname);
	fs.readFile(fpath, 'utf8', func);
};

//파일 쓰기
exports.myfilewrite = (infile, outfile) => {
	var ifs = fs.createReadStream(infile, {flags : 'r'});
	var ofs = fs.createWriteStream(outfile, {flags : 'w'});
	
	ifs.on('data', data => {
		ofs.write(data);
	});
	ifs.on('end', () => {
		console.log('파일 읽기 종료');
		ofs.end(() => {
			console.log('파일 쓰기 종료');
		});
	})
};

// 폴더 생성
exports.mymkdir = (foldername, fdir, func) => {
	var fpath = path.join(fdir, foldername);
	fs.stat(fpath, (err, stat) => {
		if( err ) {
			fs.mkdir(fpath, 0666, func); 
		} else {
			console.log('foler exists');
		}
	});
};

//파일 삭제
exports.mydeletefile = (dfile, func) => {
	
	fs.stat(dfile, (err, stats) => {
		if( !err ) {
			fs.unlink(dfile, func);
		}
		console.log('not exist file!\n : %s', err);
	});
	
	
};

// 파일 이름 수정
exports.myrenamefile = (fdir, oldfname, newfname, func) => {
	var oldname = path.join( fdir, oldfname );
	var newname = path.join( fdir, newfname );

	fs.stat(oldname, (err, stat) => {
		if( stat ) {
			fs.rename(oldname, newname, func);
			console.log('%s => %s', oldname, newname);
		} else {
			console.log('rename fail\n : %s', err);
		}
	});
	
};

// 파일 목록
exports.myreaddir = (dir, func) => {
	fs.readdir(dir, func);
};