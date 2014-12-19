
var total = 0;

  process.argv.forEach(function(val, index, array) {
	num = Number(val);
	if(index > 1) 
		total += num;
  });
console.log(total);

/*
Here's the official solution in case you want to compare notes:

    var result = 0

    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])

    console.log(result)
*/