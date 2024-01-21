function test(...arr) {
  return arr.map(array => Math.max(...array));
}
console.log(test([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]));
console.log(test([1, 2, 3, 4], [5, 1, 2, 9])); 
console.log(test());