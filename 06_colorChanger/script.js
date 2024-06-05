const buttons = document.querySelectorAll('.button');
//  
const body = document.querySelector('body');

buttons.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener("click", function(e){
        // console.log(e);
        // console.log(e.target);
        console.log(e.target.id);
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor="grey"
                break;
            case "white":
                body.style.backgroundColor= e.target.id; // same as white
                break;
            case "blue":
                body.style.backgroundColor="blue"
                break;
            case "yellow":
                body.style.backgroundColor="yellow"
                break;
        
            default:
                break;
        }
    })
})