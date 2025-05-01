// Smooth scrolling for "Learn More" button
document.getElementById("learnMoreBtn").addEventListener("click", function () {
    const featuresSection = document.querySelector(".features");
    featuresSection.scrollIntoView({ behavior: "smooth" });
});

// Highlight active navigation link
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});