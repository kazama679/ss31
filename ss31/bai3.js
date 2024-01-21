function test(str, check) {
  return str.slice(-check.length) === check;
}
console.log(test("Hello world", "world")); 
console.log(test("Hello world", "orld")); 
console.log(test("Hello world", "world2")); 