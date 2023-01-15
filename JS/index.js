$(document).ready(()=>{

    // SECCIONES
    $("#cargar-principal").click(()=>{
        
        // Desaparecer logo central
        $("main").css(`background`,`transparent`);
        $("main").css(`height`,`auto`);
        
        // Cargar contenido de Secciones
        $("#contenido").load("./HTML/secciones.html")
    })

    // CURSOS
    $("#cargar-cursos").click(()=>{
        
        // Desaparecer logo central
        $("main").css(`background`,`transparent`);
        $("main").css(`height`,`auto`);
                
        // Cargar contenido de Cursos
        $("#contenido").load("./HTML/cursos.html")
    })

    // CARRERAS
    $("#cargar-carreras").click(()=>{
        
        // Desaparecer logo central
        $("main").css(`background`,`transparent`);
        $("main").css(`height`,`auto`);
        
        // Cargar contenido de Carreras
        $("#contenido").load("./HTML/carreras.html")
    })

    // REGISTRO
    $("#cargar-registro").click(()=>{
        
        // Desaparecer logo central
        $("main").css(`background`,`transparent`);
        $("main").css(`height`,`78vh`);
        $("contenido").css(`height`,`100%`);
        
        // Cargar contenido de Registro
        $("#contenido").load("./HTML/registro.html")
    })

    // INICIO
    $("#inicio").click(()=>{
        $("#contenido").empty()
        $("main").css(`background`,`url(../IMG/logo-color-cadif1.svg) center center no-repeat`);
        $("main").css(`background-size`,`35%`);
        $("main").css(`height`,`78vh`);
    })
})
