const headerElement = document.getElementById("header");
const messageInput = document.getElementById("messageInput");
const buttonElement = document.getElementById("submit");

buttonElement.addEventListener("click", function (e) {
  e.preventDefault();
  headerElement.innerText = "your message was sent! send another?";
  localStorage.text = "your message was sent! send another?";
});
