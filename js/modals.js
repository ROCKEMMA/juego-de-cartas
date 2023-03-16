import {reinicia_nivel} from "./index.js";

function ocultar_modals (){
    document.querySelector("#subeNivel").classList.remove("visible");
    document.querySelector("#endGame").classList.remove("visible");
    document.querySelector("#gameOver").classList.remove("visible");

}

let botones_de_reinicio = document.querySelectorAll(".reiniciar");
botones_de_reinicio.forEach((Element)=>{
    Element.addEventListener("click", reinicia_nivel);
});

export {ocultar_modals};