var fs = require('fs');

fs.readFile('./horizontal/binput', function(err, file) {
  var strfile = file.toString();
  for(var i=1;i<=12;i++) {
    var newfile = strfile.replace(new RegExp("\\$number", "g"), i);
    fs.writeFile('./horizontal/binput'+i+'.sublime-snippet', newfile);
  }

});
