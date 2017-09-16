let testArray = [1, 2, 3, 4, 5];

function sumFor(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(testArray));

function sumWhile(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testArray));

function sumRecursion(array) {
  if (array.length == 1) {
    return array[0];
  }
  else {
    return array[0] + sumRecursion(array.slice(1));
  }
}

console.log(sumRecursion(testArray));

function sumTheEasyWay(array) {
  return _.reduce(array, function(memo, num) { return memo + num; }, 0);
}

console.log(sumTheEasyWay(testArray)); 