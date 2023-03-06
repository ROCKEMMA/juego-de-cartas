import { iniciar } from "./index.js";


// nivel incial
export let nivel = 0;


function subeNivel(){
   nivel++;
}

function actualizanivel () {
    document.querySelector("#nivel").innerText = nivel + 1;
}

function cargaNuevoNivel(){
    if(nivel< 2){
        subeNivel();
        actualizanivel();
        iniciar(nivel);    
    }else{
        document.querySelector("#endGame").classList.add("visible");
    }
}

document.querySelector("#subir").addEventListener("click",cargaNuevoNivel);