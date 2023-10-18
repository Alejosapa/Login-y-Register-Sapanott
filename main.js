
document.getElementById("boton_iniciar").addEventListener("click",iniciarSesion)
document.getElementById("boton_registrarse").addEventListener("click",registrarse)

let inicioDeSesionForm = document.querySelector(".inicioDeSesionForm")
let registrarseForm = document.querySelector(".registrarseForm")
let contenedorForm = document.querySelector(".contenedorForm")

let caja__trasera_inicio = document.querySelector(".caja__trasera_inicio")
let caja__trasera_registro = document.querySelector(".caja__trasera_registro")

document.getElementById("boton_registrarse").addEventListener("click",registrarse)

function iniciarSesion(){
    registrarseForm.style.display = "block";
    contenedorForm.style.left = "20px";
    inicioDeSesionForm.style.display = "none";
    caja__trasera_registro.style.opacity = "1"; // Cambiado a 1
    caja__trasera_inicio.style.opacity = "0"; 
}

function registrarse(){
    registrarseForm.style.display = "block";
    contenedorForm.style.left = "410px";
    inicioDeSesionForm.style.display = "none";
    caja__trasera_registro.style.opacity = "0"; // Cambiado a 1
    caja__trasera_inicio.style.opacity = "1"; 
}






