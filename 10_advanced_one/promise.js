// // promise is an object 
// // The Promise object represents the eventual completion (or failure) of /an asynchronous operation and its resulting value.


// // two parts -- 1. creating a promise and 2.consuming a promise
//creating promise --> resolve and reject
// consuming promise --> .then(), .catch(), .finally()
// resolve ---> .then()
// reject ----> .catch()
// .finally() ---> this always gets exucuted at the end

// //creating a promise
// const promiseoOne = new Promise(function(resolve,reject){
//     //do an asyn task
//     // db calls , cryptography, network call, settime outetc
//     setTimeout(function(){
//         console.log('Async Task is complete');
//         resolve(); // now the consuming (then) is attached
//     },1000)

// });

// //now consuming the promise
// .then() ---> resolve(resolve is directly connected with then)
// .catch() ----> linked with reject
// promiseoOne.then(function(){
//     console.log('Promise Consumed');
// })

// // doing all the above work in a single go
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task two');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('Async 2 complete');
// })


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Ahmad",
                 email:"heybro123@gmail.com"
        })
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true; //or false
        if(!error){
            resolve({userName:"Kaif",pass:"123"})
        }else{
            reject(`Error: Something went wrong`)
        }
    },1000)
})
// // chaining
promiseFour.then((user)=>{
    // console.log(user);
    return user.userName
}).then((myusername)=>{
    console.log(myusername);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true; //or false
        if(!error){
            resolve({userName:"python",pass:"12344"})
        }else{
            reject(`Error: py went wrong`)
        }
    },1000)
})

// just like .then(),.catch() ---> async await()
// in async await --> we cannot directly handle the errors
// async function consumePromisefive(){
//     // const response = await promiseFive
//     // console.log(response);
//     // use try catch block error is gracefully handled
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromisefive()


// --------fetch()----------
// fetch is an object it return a promise
// in short ready made promise we just need to consume to 
// link - https://api.github.com/users/hiteshchoudhary
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('E: ');
//     }
// }

//doing same thing using .then() etc
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))