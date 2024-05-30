//singleton
//Object.create() 
//let obj - new Object() //--- singleton object

//object literals 
//keys : values

const mysym = Symbol("keytyyyyy"); //interview ques using symbol as keys in objects
const user = {
    name: "Ahmad",
    age: 22,
    [mysym]:"mykey1",
    isLoggedin: true,
    lastLoginDays: ["sunday","tuesday"]
}
//accessing objects
// console.log(user.name);
// //or
// console.log(user["name"]);
// console.log(user[mysym]);
// console.log(typeof user[mysym]); // this will give the typr of value which is string
// console.log(typeof mysym); // and this give type of key which is a datatype symbol

// user.age = 96
// console.log(user);
// //if we want to free value
// Object.freeze(user);
// user.age = 89
// console.log(user);

user.greeting = function(){
    console.log("hellow world!");
}
user.greetingtwo = function(){
    console.log(`hellow world! i am ${this.name} and my age is ${user.age}`);
}

console.log(user);
console.log(user.greetingtwo());


