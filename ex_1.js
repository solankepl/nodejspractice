var path = require('path');
console.log(path.normalize('/a/.///b/d/../c/'));//
console.log(path.join('/a/.', './//b/', 'd/../c/'));//
console.log(path.normalize('/a/.///b/d/../c/'));//

var url = '/index.html';
console.log(path.join(process.cwd(), 'static', url));//'/home/nico/static/index.html'