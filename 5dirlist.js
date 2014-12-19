
var fs = require('fs'); //, data = undefined;
var path = require('path');
var myPath = process.argv[2];
var myExt = process.argv[3];

fs.readdir(myPath, function callback (err, list){
	var pth, ex, fl;
	if (err) throw err;
	pth = path.normalize(myPath);

	for(var i = 0; i < list.length; i++)
	  if(path.extname(list[i])== myExt)
		console.log(list[i]);
});

