function cerrarMenu(){
    const botonMenu = document.getElementById("navbar-toggler");
    if(innerWidth < 992) botonMenu.click();
}
document.getElementById("navbarSupportedContent").addEventListener('click', cerrarMenu);
function gestionarBarraProgreso(){
    const nombre = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    const progressBar = document.getElementById("progressBar");
    let count = 0;
    if (nombre.value !== "") count++;
    if (email.value !== "" && /^.+@.+\..+$/.test(email.value)) count++;
    if (phone.value !== "" && /^(\+\d{1,2}\s)?\d{3}[\s\-]?\d{3}[\s\-]?\d{3,4}$/.test(phone.value)) count++;
    if (message.value !== "") count++;
    progressBar.innerText = (25 * count) + "%";
    progressBar.style.width = (25 * count) + "%";
}
document.getElementById("form").addEventListener('change', gestionarBarraProgreso);
