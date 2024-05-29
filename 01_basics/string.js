//important
// trim(),split(),slice(),replaceAll()


const name = "ahmad"
const x = 50;
// console.log(name + x + " Boss"); -- old syntax
//modern way
// console.log(`hello my name is ${name} and my repo count is ${x} i am the boss`);


const game = new String("Game of Thrones")
// console.log(game);
// console.log(game[0]);
// console.log(game.__proto__); //string is an object not array
// console.log(game.length);
// console.log(game.toUpperCase());
// console.log(game.toLowerCase());
// console.log(game.charAt(8));
// console.log(game.indexOf("T"));

// const newString = game.slice(1,6); //does not include 6th index elemnt(we can give negative number as start and traverse from end) which is not possible in substr function
// const anotherstr = game.substring(1,6);
// console.log(newString);
// console.log(anotherstr);

// const newstr = "     ahmadd   ";
// console.log(newstr);
// console.log(newstr.trim()); // to remove extra spaces

// console.log(newstr.replace(" ","-"));
// console.log(newstr.replaceAll(" ","-"));

const y = "ahmad-kaif-ansari";
console.log(y.split('-'));
// 


