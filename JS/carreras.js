$(document).ready(() => {
    let url = "https://api.cadif1.com/carrera";

    $.getJSON(url, function (datosCarreras) {
        // $("#error").hide()
        console.log(datosCarreras);
        for (i = 0; i < datosCarreras.carreras.length; i++)

            $("#mostrar-carreras").append(`
            <div class="cadif1-carreras">
            <div>
                <img id="${i}" src="${datosCarreras.carreras[i].icon}">
                <div>
                    <h3>${datosCarreras.carreras[i].nombre}</h3>
                    <h3>${datosCarreras.carreras[i].objetivoresumido}</h3>
                </div>
            </div>
            <div>
                <h5 class="sub-titulos">información general</h5>
                <p class="textos">${datosCarreras.carreras[i].descripcion}</p>
                <h5 class="sub-titulos">objetivo general</h5>
                <p class="textos">${datosCarreras.carreras[i].objetivo}</p>
                <h5 class="sub-titulos">título a obtener</h5>
                <p class="textos">${datosCarreras.carreras[i].titulo}</p>
            </div>
        </div>
        `)
    }).fail(() => {
        console.log("error")
        // $("#error").show()
    })
})