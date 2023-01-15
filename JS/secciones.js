$(document).ready(() => {
    let url = "https://api.cadif1.com/seccion";

    $.getJSON(url, function (datosSecciones) {
        // $("#error").hide()
        console.log(datosSecciones);
        for (i=0;i<datosSecciones.length;i++)
            
            $("#mostrar-secciones").append(`
            <div class="cadif1-secciones">
            <div>
                <h3>${datosSecciones[i].codigonivel}</h3>
                <h3>${datosSecciones[i].nivel}</h3>
                <h3>${datosSecciones[i].materia}</h3>
            </div>
            <div>
                <h5 class="sub-titulos">objetivo principal</h5>
                <p class="textos">${datosSecciones[i].objetivoprincipal}</p>
                <h5 class="sub-titulos">fecha de inicio</h5>
                <p class="textos">${datosSecciones[i].ft}</p>
                <h5 class="sub-titulos">modalidad</h5>
                <p class="textos">${datosSecciones[i].modalidad}</p>
            </div>
        </div>
        `)

    }).fail(() => {
        console.log("error")
        // $("#error").show()
    })
})