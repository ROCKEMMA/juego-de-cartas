function tarjetas_barajeadas(nivel){
    
    let tarjetas_por_nivel = [
        ["π","π₯","π"],
        ["π","π₯","π₯―","π₯","π","π­"],
        ["π","π₯","π₯―","π₯","π","π­","π"],
    ];
    
    let totalTarjetas = tarjetas_por_nivel[nivel].concat(tarjetas_por_nivel[nivel]);

    // BARAJEAR CARTAS
    // - mΓ©todo sort: para organizar el array
    // - mΓ©todo random: para definir el orden aleatorio
    let barajear_tarjetas = ()=>{
        return totalTarjetas.sort(()=>{
            return 0.5 - Math.random();            
        });
    }

    return barajear_tarjetas();

}

export {tarjetas_barajeadas};