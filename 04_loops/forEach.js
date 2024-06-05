// for each loop
const coding = ["java", "python", 'ruby', "js"]

// coding.forEach((item)=>{ // arrow function inside for each
//     console.log(item); // note the function should not have a name
// })

// coding.forEach( function (it){
//     console.log(it);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);
// coding.forEach((item,i,arr)=>{
//     console.log(item,i,arr);
// })



// --------- for each is highly used in objects inside array
// [{},{},{}.....]
const myArr = [
    {
        lName: "javascript",
        lcode: "js"
    },
    {
        lName: "c plus plus",
        lcode: "cpp"
    },
    {
        lName: "python",
        lcode: "py"
    }
]
myArr.forEach((item)=>{
    console.log(item.lName, item.lcode);
})