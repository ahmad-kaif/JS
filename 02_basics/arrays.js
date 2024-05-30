// const arr = [0,1,2,3,4,5, true, "ahmad"];
// const newArr = new Array("ahmad", 1,2,88);

//array methods
// console.log(arr.push(23));
// console.log(arr);
// console.log(arr.length);
// console.log(arr.unshift(100));// in the front
// console.log(arr);

// let arr1 = arr.join(); //makes arr string
// console.log(arr);
// console.log(arr1);
// console.log(typeof arr1);



//slice and splice
//splice - splice(1,3) index 1,2,3 all are include and it changes the orignal array
//slice - slice(1,3) index 1,2 are include not 3


let a = [0,1,2,3,4,5,6]
let b = [0,1,2,3,4,5,6]
console.log(a.splice(1,3)); // array a has changes
console.log("A: ",a); // orignal a has changed - a = [0,4,5,6]

console.log(b.slice(1,3));
console.log("B: ",b); // original b has not changed
