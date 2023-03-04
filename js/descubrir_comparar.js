/* DESCUBRIR LOS ELEMENTOS */
function descubrir (){
    var descubiertas;
    var totalDescubiertas;
    
    // Se consulta en el DOM el total de cartas levantadas
    totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    
    // Si el total de cartas es superior a 1 el programa se detendrá
    if(totalDescubiertas.length > 1){
        return;
    }
    
    // Si agrega la clase descubireta para levantar la siguiente carta
    this.classList.add("descubierta");

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

}

// FUNCIÓN DESCUBRIR TARJETAS
function comparar(tarjetasAComparar){
    // Validación de la cartas descubiertas
    if(tarjetasAComparar[0].textContent === tarjetasAComparar[1].textContent){
        console.log('Correcto');
        acierto(tarjetasAComparar);
    }else{
        error(tarjetasAComparar);
    }
}

// Acción que se realizará si las dos cartas son iguales
function acierto (lasTajetas){
    lasTajetas.forEach((tarjeta)=>{
        tarjeta.classList.add("acertada");
    });
}

function error(lasTajetas){
    lasTajetas.forEach((tarjeta)=>{
        tarjeta.classList.add("error");
    });

    setTimeout(() => {
        lasTajetas.forEach((tarjeta)=>{
            tarjeta.classList.remove("descubierta");
        });    
    }, 1000);

    
}

export {descubrir};