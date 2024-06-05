// const arr = ["ruby", "c++","Js", "python"];
// const vals = arr.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(vals);
// const nums = [1,2,3,4,5,6,7,8,9,10];
// const ans = nums.filter((el)=>{
//     return el >4;
// })
// console.log(ans);
// so filter -- arr.filter( (items)=>{ return someCondition} )
// so items satisfying those conditions will get returned 




// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const userBooks = books.filter((bk)=>{
//     return bk.genre === 'History';
//   })
//   console.log(userBooks);

//----------MAP--------
// const arr = [1,23,4,55,67,]
// const newArr = arr.map((item)=>{
//     return item+10;
// })
// console.log(arr);
// console.log(newArr);


// -- chaning in map
// arr.map(()=>{}).map(()=>{})
// const arr = [1,2,3,4,5,6,7,8,9,10]
// // const newArr = arr.map((item)=>{return item*10;}).map((item)=>{return item +1; })
// // or
// const newArr = arr
//         .map((item)=>item*10) // first all value * by 10
//         .map((item)=>item + 1)
//         .filter((item)=> item>40) // then 1 was added to all the updated values
        
// console.log(newArr);

// --------Reduce ---------
// const arr = [1,2,3,4]
// const total = arr.reduce((acc,currVal)=>{
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc+currVal;
// },0)
// console.log(total);
// here 0 is the initial value for acc


const cart = [
    {
        course:"js",
        price:999
    },
    {
        course:"c++",
        price:99
    },
    {
        course:"AI/ML",
        price:2999
    }
]
// now we want to add the prices of all courses
const total = cart.reduce((acc,item)=>(acc+item.price),0)
console.log(total);