// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".registration-form form");
    const responseMessage = document.createElement("p");
    responseMessage.style.color = "#4CAF50";
    responseMessage.style.marginTop = "20px";

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            // Simulate form submission
            responseMessage.textContent = "Thank you for registering! We will contact you soon.";
            form.appendChild(responseMessage);

            // Reset the form after submission
            form.reset();
        });
    }
});