const fs = require('fs');
const path = require('path');

fs.writeFile(
	// __dirname 現在のパス
	// __dirname + '/hello.txt',
	path.join(__dirname, 'hello.txt'),		//一行上と同じ意味 helloの前のスラッシュはどっちでも動いてくれる
	'Node始めました\n',
	function(err){
		if (err) return console.log('Error!');
	}
);







