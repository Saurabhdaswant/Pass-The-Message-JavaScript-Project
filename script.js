const input = document.getElementById("input");
const message = document.querySelector(".message");
const btn = document.querySelector(".btn");

document.querySelector(".btn").addEventListener("click", function () {
  let messageInput = document.querySelector("input").value;
  console.log(messageInput, typeof messageInput);

  message.textContent = messageInput;
});
