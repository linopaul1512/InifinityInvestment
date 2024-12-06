// Selecciona el botón de correo por su id
const emailButton = document.getElementById('email-button');

// Añade un evento de clic al botón
emailButton.addEventListener('click', function() {
    // Al hacer clic, abre el cliente de correo con un mensaje predefinido
    window.location.href = 'mailto:linobenavidesgabaldon@gmail.com?subject=Asunto&body=Mensaje%20predefinido';
});