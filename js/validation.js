document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Validate Name
    if (name.length < 10) {
        alert("A névnek legalább 10 karakter hosszúnak kell lennie.");
        return false;
    }

    // Validate Email
    if (!validateEmail(email)) {
        alert("Kérlek, adj meg egy érvényes email címet.");
        return false;
    }

    // Validate Subject
    if (subject.length < 10) {
        alert("A tárgynak legalább 10 karakter hosszúnak kell lennie.");
        return false;
    }

    // Validate Message
    if (message.length < 10) {
        alert("Az üzenetnek legalább 10 karakter hosszúnak kell lennie.");
        return false;
    }

    // Validate Phone
    if (phone.length < 10 || isNaN(phone)) {
        alert("A telefonszámnak legalább 10 számjegyből kell állnia.");
        return false;
    }

    alert("Az űrlap sikeresen elküldve!");
    return true;
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}