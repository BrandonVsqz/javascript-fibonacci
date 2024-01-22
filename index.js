function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆

    //Write your code here:
  var output = [];

  if (n === 0) {
    return output;
  } else if (n === 1) {
    output.push(0);
  } else if (n === 2) {
    output.push(0,1);
  } else {
    output.push(0,1);
  }

  for (var i = 3; i <= n; i++) {
    var oneLastItem = output[output.length - 1];
    var twoLastItem = output[output.length - 2];
    var sum = oneLastItem + twoLastItem;
    output.push(sum);
  }

  return output;
    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(12));

