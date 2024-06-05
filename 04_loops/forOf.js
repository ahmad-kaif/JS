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

// for of does not work with objects
// it does with arrays and maps