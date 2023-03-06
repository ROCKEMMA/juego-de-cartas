import { repartir_tarjetas } from "./repartir_tarjetas.js";
import { descubrir } from "./descubrir_comparar.js";
import { reiniciar_contador } from "./contador.js";
import { nivel } from "./cambia_nivel.js";

// INICIO DEL JUEGO
function iniciar(nivel){

    // Reiniciar el contador de movimientos
    document.querySelector("#mov").innerText ="00";
    reiniciar_contador();

    document.querySelector("#subeNivel").classList.remove("visible");
    document.querySelector("#endGame").classList.remove("visible");
    document.querySelector("#gameOver").classList.remove("visible");

    repartir_tarjetas(nivel);

    // Creación de un vínculo de todas las tarjetas repartidas
    // en el DOM
    let tarjetas_del_dom = document.querySelectorAll(".tarjeta");

    // Se agrega el evento descubrir a cada tarjeta
    tarjetas_del_dom.forEach((tarjeta)=>{
        tarjeta.addEventListener("click", descubrir);
    });
}

iniciar(nivel);

// REINICIAR EL NIVEL DEL JUEGO A EL NIVEL 1
function reinicia(nivel){
    nivel = 0;
    iniciar(nivel);
}

let botones_de_reinicio = document.querySelectorAll(".reiniciar");
botones_de_reinicio.forEach((Element)=>{
    Element.addEventListener("click", reinicia);
});


export { iniciar };