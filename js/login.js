document.getElementById("btn-submit").addEventListener("click", function () {
  // email field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   password field
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  //   valid & invalid user checking
  if (email === "emon@gmail.com" && password === "emon") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
