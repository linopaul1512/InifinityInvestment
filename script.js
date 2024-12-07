let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}


setInterval(nextSlide, 5000);

//Programacion el formulario
(function() {
    emailjs.init("your_user_id_here");
})();

// Escucha el evento de envío del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtén los valores de los campos del formulario
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Define los parámetros que se enviarán a través de EmailJS
    var templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message
    };

    // Enviar el correo con EmailJS
    emailjs.send("el id de servicio", "id de plantilla", templateParams)
        .then(function(response) {
            alert("¡Mensaje enviado con éxito!");
        }, function(error) {
            alert("Error al enviar el mensaje. Intenta nuevamente.");
        });
});