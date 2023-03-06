import { tarjetas_barajeadas } from "./tarjetas.js";

function repartir_tarjetas(nivel) {

    let mesa = document.querySelector("#mesa");
    mesa.innerHTML = "";

    let baraja_de_tarjetas = tarjetas_barajeadas(nivel);

    baraja_de_tarjetas.forEach((elemento)=>{

        let tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
            <div class="tarjeta">
                <div class="tarjeta__contenido">${elemento}</div>
            </div>`;

        mesa.appendChild(tarjeta);

    });
}

export {repartir_tarjetas};