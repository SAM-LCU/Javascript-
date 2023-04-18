//WAP to print if a object is empty or not ?
let emp = {}
// console.log(Object.keys(emp));
// console.log(Object.values(emp));
// now check wheather this object is empty or not ?
console.log(Object.keys(emp));
if (Object.keys(emp).lenght == 0) {
    console.log("empty Object");
} else {
    console.log("not a empty Object");
}