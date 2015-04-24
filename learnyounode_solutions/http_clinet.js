var http = require('http');
http.get(process.argv[2], function(response) {
  response.setEncoding('utf-8');
  response.on('data', function(element) {
    console.log(element.toString());
  });
  response.on('error', function(error){
    console.log(error);
  })
})
