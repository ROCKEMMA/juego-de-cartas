
let movimientos = 0;

function actualiza_contador(){

    let monimientosTexto;
    movimientos++;
    monimientosTexto = movimientos;

    if(movimientos < 10){
        monimientosTexto = "0" + movimientos;
    }
    document.querySelector("#mov").innerText = monimientosTexto;
}

function reiniciar_contador(){
    movimientos = 0;
}

export {actualiza_contador, reiniciar_contador};