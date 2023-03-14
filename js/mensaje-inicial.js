function desabilitar_mensaje_inicial (){

    let mensaje_inicio = document.querySelector(".mensaje-inicio");

    if(mensaje_inicio.className == "mensaje-inicio activar"){
        mensaje_inicio.classList.remove("activar");
    }
}

export { desabilitar_mensaje_inicial };