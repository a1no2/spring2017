const http = require('http');
//リクエストとレスポンスを受け取る
const sarver = http.createServer(function(req, res){
	console.log(req.method + ':' + req.url);
	res.end('Hello Node!');
});

const port = 8080;
sarver.listen(port, function(){
	console.log('serber runing on port' + port);
});




