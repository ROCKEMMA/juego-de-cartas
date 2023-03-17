import { desabilitar_mensaje_inicial } from "./mensaje-inicial.js";
import { actualiza_movimientos } from "./contador_movimientos.js";
import { finalizar } from "./finalizar.js"; // ?

/* DESCUBRIR LOS ELEMENTOS */
function descubrir_carta (){

    desabilitar_mensaje_inicial();
    
    segundos == 0 ? iniciar_cronometro() : false;

    let total_tarjetas_descubiertas;
    let tarjetas_descubiertas_no_acertadas;
    let tarjetasPendientes;
    
    total_tarjetas_descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if(total_tarjetas_descubiertas.length > 1){
        return;
    }else {
        this.classList.add("descubierta");
    }
    
    tarjetas_descubiertas_no_acertadas = document.querySelectorAll(".descubierta:not(.acertada)");
    if(tarjetas_descubiertas_no_acertadas.length < 2){
        return;
    }

    comparar_tarjetas(tarjetas_descubiertas_no_acertadas);
    actualiza_movimientos();

    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if (tarjetasPendientes.length === 0){
        setTimeout(finalizar,1000);
    }

}


function comparar_tarjetas(tarjetas_a_comparar){
    if(tarjetas_a_comparar[0].textContent === tarjetas_a_comparar[1].textContent){
        acierto(tarjetas_a_comparar);
    }else{
        error(tarjetas_a_comparar);
    }
}

function acierto (tarjetas){
    tarjetas.forEach((tarjeta)=>{
        tarjeta.classList.add("acertada");
    });
    // document.querySelector("#sonido-acierto").play();
}

function error(tajetas){
    tajetas.forEach((tarjeta)=>{
        tarjeta.classList.add("error");
    });
    // document.querySelector("#sonido-error").play();

    setTimeout(() => {
        tajetas.forEach((tarjeta)=>{
            //tarjeta.classList.remove("error");
            tarjeta.classList.remove("descubierta");
        });
    }, 1000);

}

export {descubrir_carta};






