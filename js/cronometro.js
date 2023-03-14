function inciarCronometro(){

    let minutos = 0;
    let segundos = 0;
    let minutos_texto;
    let segundos_texto;


    function actualizaContador(){
        
        segundos++; 
        
        if(segundos > 59){
            segundos = 00;
            minutos++;
        }

        segundos_texto = segundos;
        minutos_texto = minutos;

        // Conservamos el 0 cuando las cantidades del contador
        // aun son de un dígito
        minutos < 10 ?  minutos_texto = '0' + minutos : '';
        segundos < 10 ?  segundos_texto = '0' + segundos : '';
    
        document.querySelector('#minutos').innerText = minutos_texto;
        document.querySelector('#segundos').innerText = segundos_texto;

        if(segundos >= 10){
            document.querySelector(".game-over").classList.add("mostrar");
            console.log('Tiempo limite');
        }

    }
    setInterval(actualizaContador,1000);
}