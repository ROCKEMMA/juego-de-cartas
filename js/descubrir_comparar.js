import { actualiza_contador } from "./contador.js";
import { finalizar } from "./finalizar.js";

/* DESCUBRIR LOS ELEMENTOS */
function descubrir (){
    let descubiertas;
    let totalDescubiertas;
    let tarjetasPendientes; 
    
    // Se consulta en el DOM el total de cartas levantadas
    totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    
    // Si el total de cartas es superior a 1 el programa se detendrá
    if(totalDescubiertas.length > 1){
        return;
    }
    
    // Si agrega la clase descubireta para levantar la siguiente carta
    this.classList.add("descubierta");

    // AGREGANDO SONIDO
    document.querySelector("#sonido-carta").cloneNode().play();

    // Se consulta la cantidad de cartas destapadas nuevamente
    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

    // si el total de cartas destapadas es menor a 2 el prgrama se
    // Detendra, para poder levantar una carta más.
    if(descubiertas.length < 2){
        return;
    }

    // si en el proceso de descubrir cartas ya se tienen dos tarjetas
    // para comparar, ejecutamos la función comparar tarjetas.
    comparar(descubiertas);
    actualiza_contador();

    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if (tarjetasPendientes.length === 0){
        setTimeout(finalizar,1000);
    }

}

// FUNCIÓN DESCUBRIR TARJETAS
function comparar(tarjetasAComparar){
    // Validación de la cartas descubiertas
    if(tarjetasAComparar[0].textContent === tarjetasAComparar[1].textContent){
        acierto(tarjetasAComparar);
    }else{
        error(tarjetasAComparar);
    }
}

/* 
    ACCIÓN SE LAS CARTAS COOINCIDEN
*/
function acierto (lasTajetas){
    lasTajetas.forEach((tarjeta)=>{
        tarjeta.classList.add("acertada");
    });
    document.querySelector("#sonido-acierto").play();

}

/* 
    ACCIÓN SE LAS CARTAS NO COOINCIDEN
*/
function error(lasTajetas){
    lasTajetas.forEach((tarjeta)=>{
        tarjeta.classList.add("error");
    });

    document.querySelector("#sonido-error").play();


    setTimeout(() => {
        lasTajetas.forEach((tarjeta)=>{
            tarjeta.classList.remove("descubierta");
        });    
    }, 1000);

}

export {descubrir};