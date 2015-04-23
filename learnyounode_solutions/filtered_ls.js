var path_str = process.argv[2];
var ext = '.'.concat(process.argv[3]);

var fs = require('fs');
var path = require('path');

fs.readdir(path_str, function callback(err, list){
  if(!err){
    list.filter(function(element){
      if (path.extname(element) == ext){
          console.log(element);
          return element;
      }
    });
  }
})
