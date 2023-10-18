
document.getElementById("boton_iniciar").addEventListener("click",iniciarSesion)
document.getElementById("boton_registrarse").addEventListener("click",registrarse)

let inicioDeSesionForm = document.querySelector(".inicioDeSesionForm")
let registrarseForm = document.querySelector(".registrarseForm")
let contenedorForm = document.querySelector(".contenedorForm")

let caja__trasera_inicio = document.querySelector(".caja__trasera_inicio")
let caja__trasera_registro = document.querySelector(".caja__trasera_registro")

document.getElementById("boton_registrarse").addEventListener("click",registrarse)

function iniciarSesion(){
    registrarseForm.style.display = "none";
    contenedorForm.style.left = "20px";
    inicioDeSesionForm.style.display = "block";
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

document.querySelector('DOMContentLoaded', function(){
    document.getElementsByClassName('inicioDeSesionForm').addEventListener('submit', function(e){
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const correo = document.getElementById('correo').value;
        const contraseña = document.getElementById('contraseña').value;
        const user = { usuario, correo, contraseña };
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Inicio de sesión exitoso');
    });


document.querySelector('registrarseForm').addEventListener(submit, function(e){
    e.preventDefault();
    const nombre_apellido = document.getElementById('nombre_apellido').value
    const nuevo_usuario = document.getElementById('nuevo_usuario').value
    const correo_register = document.getElementById('correo_register').value
    const crea_contraseña = document.getElementById('crea_contraseña').value
    const user = {nombre_apellido, nuevo_usuario, correo_register, crea_contraseña};
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
        alert('Registro exitoso');
    })
})






