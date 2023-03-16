import { reiniciar_movimientos } from "./contador_movimientos.js";
import { repartir_tarjetas } from "./repartir_tarjetas.js";
import { descubrir_carta } from "./descubrir_comparar.js";
import { ocultar_modals } from "./modals.js";


let nivel = 0;

function iniciar_nivel(nivel){

    reiniciar_movimientos();
    reiniciar_contador();
    ocultar_modals();

    repartir_tarjetas(nivel);

    let tarjetas_del_dom = document.querySelectorAll(".tarjeta");

    tarjetas_del_dom.forEach((tarjeta)=>{
        tarjeta.addEventListener("click", descubrir_carta);
    });
}

function reinicia_nivel(nivel){
    nivel = 0;
    iniciar_nivel(nivel);
}


iniciar_nivel(nivel);

export { iniciar_nivel, reinicia_nivel };