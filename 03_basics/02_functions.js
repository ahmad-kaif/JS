//rest and spread operator in functions
// ... --> this is rest and spread operator symbol
function cart(...num){ // here ... is acting asrest 
    return num;
}
console.log(cart(100,199,200000));


//objects in functions
const myobj = {
    name:"ahmad",
    price: 9999
}
function func(anyobject){
    console.log(`userName is ${anyobject.name} and price is ${anyobject.price}`);
}
func(myobj)