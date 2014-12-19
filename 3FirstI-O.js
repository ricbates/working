
var fs = require('fs'), buf = "", fl = "", str = "", sp = [] ;
// file name on command line
fl = process.argv[2];
// read file into buffer
buf = fs.readFileSync(fl);
//convert buffer to string array
str = buf.toString();
sp = str.split('\n');
//console.log(sp);
//print the array length
console.log(sp.length-1);
//C:/Users/Rick/workspace/learningNode/3FirstI-O.txt

/*
Your solution to MY FIRST I/O! passed!

Here's the official solution in case you want to compare notes:

───────────────────────────────────────────────────────────────────────
    var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/