import { repartir_tarjetas } from "./repartir_tarjetas.js";
import { descubrir } from "./descubrir_comparar.js";

// INICIO DE MI PROGRAMA

repartir_tarjetas();


// Se agrega el evento click a cada tarjeta
document.querySelectorAll(".tarjeta").forEach((elemento)=>{
    elemento.addEventListener("click", descubrir);
});