
//bmi formual
// bmi = weight/((height*height)/10000).toFixed(2);



const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function(e){
    e.preventDefault()
    // console.log(e);
    // console.log(e.target);
    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    console.log(h,w);
    let results = document.querySelector('#results');
    console.log(results);
    if(h === '' || h<0 || isNaN(h)){
        results.innerHTML = 'Please give a valid height';
    }
    else if(w === '' || w<0 || isNaN(w)){
        results.innerHTML = 'Please give a valid weight';
    }
    else results.innerHTML = `Your BMI : ${(w/((h*h)/10000)).toFixed(2)}`;

})