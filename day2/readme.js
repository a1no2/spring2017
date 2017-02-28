
const fs = require('fs');
const rs = fs.createWriteStream('stream.txt',{encodig: 'utf-8'});

//on イベントみたいなもの
//rsに'data'というイベントを追加してる感じ？
rs.on('data', function(data) {
	//replece 置換
	console.log('data >>> ' + data.replece('\n', '\\n'));
});

rs.on('end', function() {
	console.log('>>> END');
});






