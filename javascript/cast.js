// let password = document.querySelector("#password");
// let submit = document.querySelector("#input");

// let form = document.querySelector('#form');


// submit.addEventListener('submit', )


let cast = document.querySelector('.casts');


function exCast(event) {
    let password = document.querySelector('#password');
    
    if(password.value === "tsumugu"){
        console.log("ok");
        // cast.style.display = "block";
        cast.style.opacity = "1";
    } else {
        cast.style.opacity = "0";
    }
}
  
const button = document.querySelector('#btn');
button.addEventListener('click', exCast);

