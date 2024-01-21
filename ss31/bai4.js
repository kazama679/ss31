function truncate(str, n) {
    return str.length>n ? str.slice(0, n)+"...":str;
}
console.log(truncate("Hello world, Im Peter", 11));