$(document).ready(() => {

    // CARGAR AREAS DE ESTUDIO
    let urlAreas = "https://api.cadif1.com/areadeestudio";

    $.getJSON(urlAreas, function (datosAreasF) {

        console.log(datosAreasF);
        for (i = 0; i < datosAreasF.areas.length; i++)
            $("#listaAreas").append(`<option id="${datosAreasF.areas[i].id}" value="${datosAreasF.areas[i].id}">${datosAreasF.areas[i].nombre}</option>`)
    }).fail(() => {
        console.log("error")
    })

    // CARGAR CURSOS
    let urlCursos = "https://api.cadif1.com/curso";

    $.getJSON(urlCursos, function (datosCursosF) {

        console.log(datosCursosF);
        for (i = 0; i < datosCursosF.cursos.length; i++)
            $("#listaCursos").append(`<option class="opcionesCursos" id="${datosCursosF.cursos[i].idareaestudio}" value="${datosCursosF.cursos[i].idareaestudio}">${datosCursosF.cursos[i].nombre}</option>`)
        // $(`#${datosCursosF.cursos[i].idareaestudio}`).hide();
    }).fail(() => {
        console.log("error")
    })

    // DECLARACIÓN DE VARIABLES
    let cedulaForm;
    let nombreForm;
    let emailForm;
    let listaAreasForm;
    let listaCursosForm;

    // let cedulaForm = true;
    // let nombreForm = true;
    // let emailForm = true;
    // let listaAreasForm = true;
    // let listaCursosForm = true;

    // let cedulaForm = false;
    // let nombreForm = false;
    // let emailForm = false;
    // let listaAreasForm = false;
    // let listaCursosForm = false;

    // VALIDAR CÉDULA
    cedulaForm = document.registro.cedula.onblur = function () {
        
        if (!this.value.match(/^\d+/) || this.value.length < 7) {
            Swal.fire({
                icon: 'error',
                title: 'Cédula Ivalida',
                text: '¡Solo números y al menos 7 dígitos!',
            });
            $("#ced-chk").css(`background`, `url(../IMG/negarivo.png) center center/contain no-repeat`);
            $("#cedula").empty();
            console.log("Cedula INVALIDA");
            return false;
        } else {
            $("#ced-chk").css(`background`, `url(../IMG/positivo.png) center center/contain no-repeat`);
            console.log("Cedula VALIDA");
            return true;
        }
    }

    // VALIDAR NOMBRE
    nombreForm = document.registro.nombre.onblur = function (event) {
        if (this.value.length < 3 || !/^[a-zA-Z]*$/g.test(this.value)) {

            Swal.fire({
                icon: 'error',
                title: 'Nombre Inválido',
                text: '¡Solo letras y al menos 3 caracteres!',
            });
            $("#nom-chk").css(`background`, `url(../IMG/negarivo.png) center center/contain no-repeat`);
            $("#nombre").empty();
            console.log("Nombre INVALIDO");
            return false;
        } else {
            $("#nom-chk").css(`background`, `url(../IMG/positivo.png) center center/contain no-repeat`);
            console.log("Nombre VALIDO");
            return true;
        }
    }

    // VALIDAR EMAIL
    emailForm = document.registro.email.onblur = function () {
        if (this.value.trim().length > 0) {
            if (!validarEmail(this.value)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Email inválido!',
                });
                $("#ema-chk").css(`background`, `url(../IMG/negarivo.png) center center/contain no-repeat`);
                $("#email").empty();
                console.log("Email INVALIDO");
                return false;
            } else {
                $("#ema-chk").css(`background`, `url(../IMG/positivo.png) center center/contain no-repeat`);
                console.log("Email VALIDO");
                return true;
            }
        }
    }

    function validarEmail(email) {
        let reg = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
        return reg.test(email)
    }

    // VALIDAR SELECT AREAS DE ESTUDIO
    listaAreasForm = document.registro.listaAreas.onblur = function () {
        if ($("#listaAreas").val() == "XX") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Debe seleccionar un área de estudio!',
            })
            $("#listaAreas-chk").css(`background`, `url(../IMG/negarivo.png) center center/contain no-repeat`);
            console.log("Sel. Areas INVALIDO");
            return false;
        } else {
            $("#listaAreas-chk").css(`background`, `url(../IMG/positivo.png) center center/contain no-repeat`);
            console.log("Sel. Areas VALIDO");
            return true;
        }
    }

    // VALIDAR SELECT CURSOS
    listaCursosForm = document.registro.listaCursos.onblur = function () {
        if ($("#listaCursos").val() == "YY") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Debe seleccionar un curso!',
            })
            $("#listaCursos-chk").css(`background`, `url(../IMG/negarivo.png) center center/contain no-repeat`);
            console.log("Sel. Cursos INVALIDO");
            return false;
        } else {
            $("#listaCursos-chk").css(`background`, `url(../IMG/positivo.png) center center/contain no-repeat`);
            console.log("Sel. Cursos VALIDO");
            return true;
        }
    }

    // BOTÓN
    function todoValido() {
        if (cedulaForm && nombreForm && emailForm && listaAreasForm && listaCursosForm) {
            return true;
        } else {
            return false;
        }
    }
    
    if (cedulaForm && nombreForm && emailForm && listaAreasForm && listaCursosForm) {
        $("#btn-registrar").css(`display`,`inline-block`)
    }

    $("#btn-registrar").click(() => {

        // console.log($("#registro").serialize());
        // console.log($("#registro").serializeArray());

        if (todoValido()) {

            console.log(todoValido());

            $.post("https://api.cadif1.com/test-registro", $("#registro").serializeArray(), function (resp) {
                // $.post("https://api.cadif1.com/test-registro",$("#registro").serialize(),function(resp){
                console.log(resp);
                console.log("REGISTRO COMPLETADO, id: " + resp.id);
                Swal.fire({
                    icon: 'success',
                    title: '¡EXITO!',
                    text: 'Registro Completado'
                })
                $("#registro").reset()
            }).fail(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Registro ha FALLADO!',
                })
            })
        }
    })

})

