const container= document.getElementById("container");
console.log(container);

let numeri;
let numeriInPagina = document.querySelector(".numeri");
let inputContainer= document.querySelector(".input-container");
const invia= document.getElementById("invia");

for(let i= 0; i < 5; i++){
    numeri= Math.floor(Math.random()*100);
    console.log(numeri);
    numeriInPagina= `<h2>${numeri}</h2>`;
    container.innerHTML += numeriInPagina;
}

setTimeout (myfunction, 3000);

function myfunction(){

    container.classList.add("none");

    for(let i= 0; i < 5; i++){
        let inputType =`<input type="number" placeholder="Enter a number"/>`;
        inputContainer.innerHTML += inputType;
        inputContainer.classList.add("active");
    }    
    
}

invia.addEventListener('click', calcola)

function calcola(){
}