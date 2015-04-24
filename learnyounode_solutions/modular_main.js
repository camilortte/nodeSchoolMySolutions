var mymodule = require('./modular');
var path_str = process.argv[2];
var ext = process.argv[3];

files = new mymodule(path_str, ext, function(err, data){
  if(!err){
    data.forEach(function(entry) {
        console.log(entry);
    });
  }else{
    console.log(err);
  }
});
