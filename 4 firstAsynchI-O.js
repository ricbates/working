
var fs = require('fs'); //, data = undefined;

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) throw err;
  var sp = data.split('\n');
  console.log(Number(sp.length -1));
});

/*

Your solution to MY FIRST ASYNC I/O! passed!

Here's the official solution in case you want to compare notes:

───────────────────────────────────────────────────────────────
    var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/
