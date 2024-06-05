
let array = [1,2,3,4,5,8]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
// }


// -------------ARRAY LOOPS-----------// 
// for of
// let arr = [1,2,3,4]
// for(const val of arr){
//     console.log(val);
// }

// maps
const map = new Map();
map.set(1,"india");
map.set(2,"Pakistan");
map.set(3,"nepal");
// for (const it of map) {
//     console.log(it);
// }
for (const [key,val] of map) {
    console.log(key,val);
}