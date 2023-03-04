import { tarjetasBarajadas } from "./tarjetas.js";


function repartir_tarjetas() {

    let mesa = document.querySelector("#mesa");
    mesa.innerHTML = "";

    tarjetasBarajadas.forEach((elemento,indice)=>{

        let tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
            <div class="tarjeta">
                <div class="tarjeta__contenido">${elemento}</div>
            </div>`;

        mesa.appendChild(tarjeta);

    });
}

export {repartir_tarjetas};