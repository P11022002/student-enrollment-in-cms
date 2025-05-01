document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("formResponse");
  
    if (name && email && message) {
      // Simulated submission (you can connect this to backend later)
      response.textContent = "Thanks for reaching out! We'll get back to you soon.";
      this.reset();
    } else {
      response.textContent = "Please fill out all fields.";
    }
  });
  