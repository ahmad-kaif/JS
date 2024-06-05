// for in loop
// for in works for array and objects as well
// for in does not work for maps
const obj = {
    "js" : "javascript",
    "cpp" : "c plus plus"
}

for (const key in obj) {
    // console.log(key);
    // console.log(obj[key]);
    console.log(key , '->' , obj[key]);
}

let arr = [1,2,4,5,6]
for (const key in arr) {
    console.log(`keys : ${key} and value of array are : ${arr[key]}`);
}