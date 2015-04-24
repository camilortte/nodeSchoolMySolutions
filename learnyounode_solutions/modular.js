var fs = require('fs');
var path = require('path');

var FilterFIles = function(path_str, ext, callback){
  ext = '.'.concat(ext);
  fs.readdir(path_str, function (err, list){
    if(!err){
      var data =  list.filter(function(element){
        if (path.extname(element) == ext){
            return element;
        }
      });
      callback(null, data);
    }else{
      callback(err, null);
    }
  });
};

module.exports = FilterFIles;
