// Se selecciona un conjunto de tarjetas para el juego
let grupTarjetas = ["🍎","🍈","🍊","🍌","🥭","🍐","🍒","🍓"];

// Se crea un array que almacene todas las tarjetas en pares
// utilizando el método de array concat
let totalTarjetas = grupTarjetas.concat(grupTarjetas);

// FUNCIÓN PARA ORGANIZAR LAS TARJETAS DE FORMA ALEATORIA
let barajarTarjetas = ()=>{

    // sort es un método para trabajar con arrays el cual
    // permite ordenar el contenido de una matriz de una forma
    // específica.
    return totalTarjetas.sort(()=>{

        // retorna un número aleatorio que permite organizar
        // el array de forma aleatoria
        return 0.5 - Math.random();
        
    });
}

// Se almacena en una variable el resultado de la función
// organizar tarjetas
let tarjetasBarajadas = barajarTarjetas();

export {tarjetasBarajadas};