
const http = require('http');
//リクエストとレスポンスを受け取る
const server = http.createServer();
const fs = require('fs');

server.on('request', function(req, res){
	fs.readFile('./index.html', 'utf-8', function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type' : 'text/plain'});
			res.write("page not found!!!");
			return res.end();
		}
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data);
		res.end();
	});
});



const port = 8080;
server.listen(port, function(){
	console.log('serber runing on port' + port);
});









