const fs = require('fs');

const ws = fs.createWriteStream('stream.txt', {encodig: 'utf-8'});
ws.write('line 1\n');
ws.write('line 2\n');
ws.end();



