let minutos = 0;
let segundos = 0;
let minutos_texto;
let segundos_texto;
let contador;

function iniciar_cronometro(){

    function actualizar_contador(){

        segundos++;

        if(segundos > 59){
            segundos = 00;
            minutos++;
        }

        segundos_texto = segundos;
        minutos_texto = minutos;

        // Conservamos el 0 cuando las cantidades del contador
        // aun son de un dígito
        minutos < 10 ?  minutos_texto = '0' + minutos: false;
        segundos < 10 ?  segundos_texto = '0' + segundos : false;
    
        
        document.querySelector('#minutos').innerText = minutos_texto;
        document.querySelector('#segundos').innerText = segundos_texto;

        // detener el contador
        if(segundos >= 60){
            clearInterval(contador);
        }
    }

    contador = setInterval(actualizar_contador,1000);
    
}

function reiniciar_contador(){
    clearInterval(contador);
    minutos = 0;
    segundos = 0;
    document.querySelector("#minutos").innerText ="00";
    document.querySelector("#segundos").innerText ="00";
    clearInterval(contador);
}