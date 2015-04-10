//http://book.mixu.net/node/ch11.html
var fs = require('fs');
fs.readFile('./sample.txt', 'utf8', function(err, data) {
  // the data is passed to the callback in the second argument
  console.log(data);
});

fs.writeFile('./sample.txt', 'Hello World', function(err) {
  if(err) throw err;
  console.log('File write completed');
});

