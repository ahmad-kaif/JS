//this was introduced in es6 2015 mai it came 
const user = {
    username:"ahmad",
    price:999,
    welcomeUser: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeUser();
// user.username="sam";
// user.welcomeUser();
// console.log(this); // in node environment it gives epmty object
//where as in browser, this same statement gives window


// function chai(){
//     let username = "ahmad";
//     console.log(this.username); // no -- it gives undefined therefor we cannot use this inside a function
// }
// chai();


//----------------arrow function ------------
// const chai = ()=>{
//     let username = "ahmad";
//     // console.log(this.username); // gives - undefined
//     // console.log(this); // gives -- {}

// }
// chai();


// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(3,8));
const addThree = (n1,n2,n3) => (n1+n2+n3); //when we wrap in () no need to write return statement
console.log(addThree(1,2,3));


