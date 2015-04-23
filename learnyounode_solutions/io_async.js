var fs = require('fs');
var buffer = fs.readFile(process.argv[2], function callback(err, data){
  if(!err){
    console.log(data.toString().split('\n').length-1);
  }
});
