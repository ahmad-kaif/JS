const regularUser = { //nested objects
    email: "some@gmail.com",
    fullName: {
        fname: "ahmad",
        lname: "kaif"
    }
}
console.log(Object.keys(regularUser));//return an array of keys
// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.lname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}
const obj3 = {
    5:"a",
    6:"b"
}
//merging objects - two ways 1. assign 2. spread(...) [just like array 1.concat 2. spread operator]
// const obj4 = Object.assign({},obj1,obj2,obj3);//{} - target and rest act as source
// console.log(obj4);

// //spread opertaor
// const obj5 = {...obj1,...obj2,...obj3}; // majorly used
// console.log(obj5);

