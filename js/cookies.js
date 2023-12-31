// Leer cookies
let logued_in = false
const LOGOUT = document.getElementById("log-out-btn");
const DROPDOWN = document.getElementById('userDropdown')
const LOGIN = document.getElementById('log-in');
document.addEventListener("DOMContentLoaded", function(e) {
    // Obtener variable logued_in almacenada en cookie
    const storedlogued_in = localStorage.getItem("loguedIn");
    if (storedlogued_in) {
        console.log(storedlogued_in);
    } else {
        console.log("No estás logueado");
    }

    logued_in = storedlogued_in === "true"; // Convertir el valor a un booleano
    // Verificar si logued_in es true/false, si es true la pagina permanece, si es false redirecciona a login.html
    if (!logued_in) {
        console.log("No has iniciado sesión en la página, por favor inicia sesión")
        setTimeout(function() {
            alert("Inicia sesión para navegar por la página")
            window.location = "credential-manager.html";
        }, 4000);
    } else {
        LOGIN.style.display = "none";
        DROPDOWN.style.display = "block";
        LOGOUT.style.display = "block";
        DROPDOWN.innerHTML = localStorage.getItem('username')
    }
    // Extraemos el valor del Nombre Completo de la Cookie y la insertamos en el HTML
    const storedemail = localStorage.getItem("Email");
    const emailElement = document.getElementById("email");

    if (storedemail) {
        emailElement.innerHTML = storedemail;
        emailElement.href = "my-profile.html"
    } else {
        console.log("No hay información guardada");
    }
});

function logout(){
    logued_in = false;
    localStorage.removeItem("loguedIn");
    localStorage.removeItem("Email");
    localStorage.removeItem("username");
    localStorage.removeItem("fullname");
    setTimeout( () =>{
    window.location.reload()
    ,1500});
}
LOGOUT.addEventListener("click",logout);