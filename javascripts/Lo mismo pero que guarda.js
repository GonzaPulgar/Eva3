var Disco = []
Disco.push(new disco("1999", "GUSTAVO CERATI", "ROCK", "Bocanada", "MTV AWARD", "1 Premio Billboard",
    "Rockero", "0 Premios Grammy", "33 Shows", "Rock/Soul", "Fallecido", "POCAS"))


function listarCampos() {
    var filas = "";
    for (let i = 0; i < Disco.length; i++) {
        var c = Disco[i];
        filas = filas + "<tr>";
        filas = filas + "<td>" + c.Año.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.Nombre.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.Genero.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.disco.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.premios.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.billboard.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.tipo.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.grammy.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.giras.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.genero.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.Estado.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.Colaboraciones.toUpperCase() + "</td>";
        filas = filas + "</tr>";
    }
    document.getElementById("tabladedatos").innerHTML = filas;
}
document.addEventListener("DOMContentLoaded", function () { listarCampos() });

function limpiarCampos(x) {
    if (x === 1) {
        document.getElementById("txtca1").value = "";
    }
    document.getElementById("txtca2").value = "";
    document.getElementById("txtca4").value = "";
    document.getElementById("txtca3").value = "";
    document.getElementById("txtca5").value = "";
    document.getElementById("cboca6").value = "";
    document.getElementById("opsi").checked = true;
    document.getElementById("txtca8").value = "";
    document.getElementById("txtca9").value = "";
    document.getElementById("cboca10").value = "";
    document.getElementById("opsip").checked = true;
    document.getElementById("cbca12").value = "";
}

function consultar() {
    var ca1 = document.getElementById("txtca1").value;
    if (ca1.trim().length < 1 || ca1.trim().length > 5) {
        alert("Debe digitar un Campo1 para buscar!");
        document.getElementById("txtca1").value = "";
        document.getElementById("txtca1").focus();
    } else {
        let sw = 0;
        for (let i = 0; i < Disco.length; i++) {
            var c = Disco[i];
            if (ca1 === c.Año) {
                sw = 1;
                document.getElementById("txtca2").value = c.Nombre;
                document.getElementById("txtca4").value = c.disco;
                document.getElementById("txtca3").value = c.Genero;
                document.getElementById("txtca5").value = c.premios;
                document.getElementById("cboca6").value = c.billboard;
                if (c.tipo === "NUEVO") {
                    document.getElementById("opsi").checked = true;
                } else {
                    document.getElementById("opno").checked = true;
                }
                document.getElementById("txtca8").value = c.grammy;
                document.getElementById("txtca9").value = c.giras;
                document.getElementById("cboca10").value = c.genero;
                if (c.Estado === "si") {
                    document.getElementById("opsip").checked = true;
                } else {
                    document.getElementById("opnop").checked = true;
                }
                document.getElementById("cbca12").value = c.Colaboraciones;
            }
        }
        var msg = "";
        if (sw === 0) {
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Campo1 no encontrado</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        } else if (sw === 1) {
            msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Campo1 encontrado</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
    }
}

function registrar() {
    var ca1 = document.getElementById("txtca1").value.toUpperCase();
    var ca2 = document.getElementById("txtca2").value.toUpperCase();
    var ca4 = document.getElementById("txtca4").value.toUpperCase();
    var ca3 = document.getElementById("txtca3").value.toUpperCase();
    var ca5 = document.getElementById("txtca5").value.toUpperCase();
    var ca8 = document.getElementById("txtca8").value.toUpperCase();
    var ca9 = document.getElementById("txtca9").value.toUpperCase();
    var ca6 = document.getElementById("cboca6").value.toUpperCase();
    var ca10 = document.getElementById("cboca10").value.toUpperCase();
    var ca12 = document.getElementById("cbca12").value.toUpperCase();

    var ca7 = "";
    if (document.getElementById("opsi").checked) {
        ca7 = "si";
    } else {
        ca7 = "no";
    }

    var ca11 = "";
    if (document.getElementById("opsip").checked) {
        ca11 = "si";
    } else {
        ca11 = "no";
    }

    var errores = "";
    if (ca1.trim().length === 0 || ca1.trim().length > 5) {
        errores += "El Campo1 debe ser de 1 a 5 caracteres! \n";
    } else {
        for (let i = 0; i < Disco.length; i++) {
            var c = Disco[i];
            if (ca1 === c.Año) {
                errores += "El Disco ya se encuentra registrado!\n";
                break;
            }
        }
    }

    if (ca2.trim().length < 5 || ca2.trim().length > 30) {
        errores += "El Nombre debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca4.trim().length < 5 || ca4.trim().length > 30) {
        errores += "El disco debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca3.trim().length < 5 || ca3.trim().length > 30) {
        errores += "El Campo3 debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca5.trim().length < 1 || ca5.trim().length > 30) {
        errores += "El Disco 5 debe contener entre 1 y 30 caracteres! \n";
    }

    if (ca6.trim().length === 0) {
        errores += "Debe ingresar el Numero de premios Billboard! \n";
    }

    if (ca8.trim().length <= 0) {
        errores += "La cantidad de digitos del Disco 8 debe ser mayor a 0\n";
    }

    if (ca9.trim().length <= 0) {
        errores += "El Numero de shows en una gira debe ser mayor a 0\n";
    }

    if (ca10.trim().length === 0) {
        errores += "Debe ingresar una opcion de Genero! \n";
    }

    if (ca12.trim().length === 0) {
        errores += "Debe ingresar una opcion! \n";
    }

    if (errores !== "") {
        alert(errores);
    } else {
        var c = new disco(ca1, ca2, ca3, ca4, ca5, ca6, ca7, ca8, ca9, ca10, ca11, ca12);
        Disco.push(c);

        var msg = "";
        msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
        msg += "<strong> registrado correctamente!</strong>";
        msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
        msg += "</div>";
        document.getElementById("mensajes").innerHTML = msg;
        listarCampos();
        limpiarCampos();
    }
}


function modificar() {
    var ca1 = document.getElementById("txtca1").value.toUpperCase();
    var ca2 = document.getElementById("txtca2").value.toUpperCase();
    var ca3 = document.getElementById("txtca3").value.toUpperCase();
    var ca4 = document.getElementById("txtca4").value.toUpperCase();
    var ca5 = document.getElementById("txtca5").value.toUpperCase();
    var ca8 = document.getElementById("txtca8").value.toUpperCase();
    var ca9 = document.getElementById("txtca9").value.toUpperCase();
    var ca6 = document.getElementById("cboca6").value.toUpperCase();
    var ca10 = document.getElementById("cboca10").value.toUpperCase();
    var ca12 = document.getElementById("cbca12").value.toUpperCase();

    var ca7 = "";
    if (document.getElementById("opsi").checked) {
        ca7 = "si";
    } else {
        ca7 = "no";
    }

    var ca11 = "";
    if (document.getElementById("opsip").checked) {
        ca11 = "si";
    } else {
        ca11 = "no";
    }

    var errores = "";
    if (ca1.trim().length === 0 || ca1.trim().length > 5) {
        errores += "El código debe ser de 1 a 5 caracteres! \n";
    } else {
        let x = 0;
        for (let i = 0; i < Disco.length; i++) {
            var c = Disco[i];
            if (ca1 === c.Año) {
                x = 1;
                break;
            }
        }
        if (x === 0) {
            errores += "El código no se encuentra registrado!\n";
        }
    }

    if (ca2.trim().length < 5 || ca2.trim().length > 30) {
        errores += "El Campo2 debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca3.trim().length < 5 || ca3.trim().length > 30) {
        errores += "El título debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca4.trim().length < 5 || ca4.trim().length > 30) {
        errores += "La disco debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca5.trim().length < 1 || ca5.trim().length > 30) {
        errores += "La edición debe contener entre 1 y 30 caracteres! \n";
    }

    if (ca8.trim().length === 0 || ca8 <= 0) {
        errores += "El número de páginas debe ser un número positivo! \n";
    }

    if (ca9.trim().length === 0 || ca9 <= 0) {
        errores += "El Numero de shows en una gira debe ser un número positivo! \n";
    }

    if (ca10.trim().length === 0) {
        errores += "Debe ingresar el país de genero! \n";
    }

    if (ca12.trim().length === 0) {
        errores += "Debe ingresar el género! \n";
    }

    if (errores !== "") {
        alert(errores);
    } else {
        var sw = 0;
        for (let i = 0; i < Disco.length; i++) {
            var c = Disco[i];
            if (ca1 === c.Año) {
                var x = confirm("Desea modificar el registro?");
                if (x === true) {
                    sw = 1;
                    Disco[i].Nombre = ca2;
                    Disco[i].Genero = ca3;
                    Disco[i].disco = ca4;
                    Disco[i].premios = ca5;
                    Disco[i].billboard = ca6;
                    Disco[i].tipo = ca7;
                    Disco[i].grammy = ca8;
                    Disco[i].giras = ca9;
                    Disco[i].genero = ca10;
                    Disco[i].Estado = ca11;
                    Disco[i].Colaboraciones = ca12;
                    break;
                } else {
                    sw = 2;
                }
            }
        }

        var msg = "";
        if (sw === 0) {
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong> No Encontrado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        } else if (sw === 1) {
            msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
            msg += "<strong> Modificado Correctamente!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        } else if (sw === 2) {
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong>El  no fue modificado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarCampos();
        limpiarCampos();
    }
}

function eliminar(){
    var ca1 = document.getElementById("txtca1").value.toUpperCase();

    var errores = "";
    if(ca1.trim().length < 1 || ca1.trim().length > 5){
        errores += "El código debe contener entre 1 y 5 caracteres! \n";
    }else{
        let x = 0;
        for (let i = 0; i < Disco.length; i++) {
            var c = Disco[i];
            if(ca1 === c.Año){
                x = 1;
                break;
            }
        }
        if(x === 0){
            errores += "El código no se encuentra registrado!\n";
        }
    }

    if(errores !== ""){
        alert(errores)
    }else{
        var sw = 0;
        for (let i = 0; i < Disco.length; i++) {
            var c = Disco[i];
            if(ca1 === c.Año){
                var x = confirm("Desea eliminar el registro?");
                if(x === true){
                    sw = 1;
                    Disco.splice(i, 1);
                    break;
                }else{
                    sw = 2;
                }
            }
        }

        var msg = "";
        if(sw === 0){
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong> no encontrado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }else if(sw === 1){
            msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
            msg += "<strong> Eliminado Correctamente!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }else if(sw === 2){
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong>El no fue eliminado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarCampos();
        limpiarCampos();
    }
}