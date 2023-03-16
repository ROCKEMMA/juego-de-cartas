let movimientos = 0;
let monimientosTexto;

function actualiza_movimientos(){

    movimientos++;
    monimientosTexto = movimientos;

    // conservar en sero en números de un dígito
    if(movimientos < 10){
        monimientosTexto = "0" + movimientos;
    }

    document.querySelector("#movimientos").innerText = monimientosTexto;
}

function reiniciar_movimientos(){
    document.querySelector("#movimientos").innerText ="00";
    movimientos = 0;
}

export {actualiza_movimientos, reiniciar_movimientos};