const headerElement = document.getElementById("header");
const messageInput = document.getElementById("messageInput");
const buttonElement = document.getElementById("submit");

if (localStorage.text) {
  headerElement.innerText = "your message was sent! send another?";
} else headerElement.innerText = "contact me";

buttonElement.addEventListener("click", function (e) {
  e.preventDefault(); // Prevents form from refreshing the page
  headerElement.innerText = "your message was sent! send another?";
  localStorage.text = "your message was sent! send another?";
});
