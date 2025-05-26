document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("loginModal");
  const loginBtn = document.getElementById("loginBtn");
  const closeBtn = document.getElementsByClassName("close")[0];
  const submitBtn = document.getElementById("submitLogin");
  const userInfo = document.getElementById("userInfo");

  // Show login modal
  loginBtn.onclick = function () {
    modal.style.display = "block";
  };

  // Close modal on (x)
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Close modal if user clicks outside of it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Handle login
  submitBtn.onclick = function () {
    const username = document.getElementById("username").value.trim();
    if (username !== "") {
      localStorage.setItem("loggedInUser", username);
      showWelcome(username);
      modal.style.display = "none";
    }
  };

  // Show welcome message
  function showWelcome(name) {
    userInfo.textContent = "Welcome, " + name;
    userInfo.style.display = "inline-block";
    loginBtn.style.display = "none";
  }

  // Auto-login if user was saved
  const storedUser = localStorage.getItem("loggedInUser");
  if (storedUser) {
    showWelcome(storedUser);
  }
});

