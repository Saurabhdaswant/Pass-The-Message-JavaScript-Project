const input = document.getElementById("input");
let message = document.querySelector(".message");
const btn = document.querySelector(".btn");

const displayMessage = function () {
  let messageInput = document.querySelector("input").value;
  message.textContent = messageInput;
};

document.querySelector(".btn").addEventListener("click", displayMessage);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    displayMessage();

    document.querySelector(".input").value = "";
  }
});
