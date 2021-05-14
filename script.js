"use strict";

const input = document.getElementById("input");
const message = document.querySelector(".message");
const btn = document.querySelector(".btn");

//function for displaying the input on DOM
const displayMessage = function () {
  let messageInput = document.querySelector("input").value;
  message.textContent = messageInput;
};

//function displayMessage will run after clicking on button
document.querySelector(".btn").addEventListener("click", displayMessage);

//and after pressing ENTER it will run function displayMessage
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    displayMessage();

    //input will be cleared after displaying the input
    document.querySelector(".input").value = "";
  }
});
