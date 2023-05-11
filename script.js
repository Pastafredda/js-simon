const container= document.getElementById("container");
console.log(container);

let numeri;
let numeriInPagina = document.querySelector("numeriInPagina");

for(let i= 0; i < 5; i++){
    numeri= Math.floor(Math.random()*100);
    console.log(numeri);
    numeriInPagina= `<h2>${numeri}</h2>`;
    container.innerHTML += numeriInPagina;
}

setTimeout (myfunction, 2000);

function myfunction(){
    numeriInPagina.classList.add(".none");

}
