$(document).ready(()=>{
    let url = "https://api.cadif1.com/curso";

    $.getJSON(url, function (datosCursos) {
        // $("#error").hide()
        console.log(datosCursos);
        for (i=0;i<datosCursos.cursos.length;i++)
            
            $("#mostrar-cursos").append(`
            <div class="cadif1-cursos">
            <div>
                <h3>${datosCursos.cursos[i].codigo}</h3>
                <h3>${datosCursos.cursos[i].nombre}</h3>
            </div>
            <div>
                <h5 class="sub-titulos">objetivo</h5>
                <p class="textos">${datosCursos.cursos[i].objetivoresumido}</p>
                <div>
                    <p class="textos2">${datosCursos.cursos[i].participantes} personas han realizado este curso</p>
                    <p class="textos2">Tiene ${datosCursos.cursos[i].niveles} niveles</p>
                </div>
            </div>
        </div>
            `)

    }).fail(() => {
        console.log("error")
        // $("#error").show()
    })
})