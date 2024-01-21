function check(arr, n){
    let result=[];
    while (arr.length){
      result.push(arr.splice(0, n));
    }
    return result;
}
console.log(check(["a", "b", "c", "d"], 2)); 
console.log(check(["a", "b", "c", "d"], 3));