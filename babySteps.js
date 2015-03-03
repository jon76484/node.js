//console.log(process.argv)
//console.log('total= ' + Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]))

var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
//  console.log( "#" + i + ": " + process.argv[i]);
  sum += Number(process.argv[i]);
}
console.log(sum)
//console.log("total= " + sum)
