var fs = require('fs');
var dirname = "folderName";
    fs.mkdir(dirname, function(error){
        if (error) throw error;
        console.log("done");
    })