let sum = (a,b) => {
    return a + b
}
let multi = (a,b) => {
    return a * b 
}
let calculate = (a,b,callback ) => {
    return callback(a,b)
    // business logics here
}
let result = calculate(10,20,sum)
console.log(result);
result2 = calculate(10,20,multi)
console.log(result2);
