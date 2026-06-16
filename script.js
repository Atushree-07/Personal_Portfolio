document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("confirmationMessage").innerText = "Thank you for your message!";
  this.reset();
});
