const fs = require('fs');
const path = require('path');

fs.readFile(
	path.join(__dirname, 'hello.txt'),
	{ encoding: 'utf-8' },
	function(err, data){
		if(err) return console.log('Error!');
		// process.exit(0);
		console.log(process.cwd());
		process.change('/');
		console.log("ファイルの内容は以下の通り");
		console.log(data);
	}
);






