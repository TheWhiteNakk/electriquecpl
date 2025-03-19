document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("NBeFlwIcgKcdLJyYV");

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.send("service_z6t9inm", "template_ipq00mf", {
            nom: document.getElementById("nom").value,
            email: document.getElementById("email").value,
            telephone: document.getElementById("telephone").value,
            message: document.getElementById("message_questions").value
        }).then(
            function(response) {
                alert("Message envoyé avec succès !");
            },
            function(error) {
                alert("Erreur lors de l'envoi du message.");
                console.error("EmailJS Error:", error);
            }
        );
    });
});
