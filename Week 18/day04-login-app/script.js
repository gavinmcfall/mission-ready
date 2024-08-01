"use strict";

const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const password = document.getElementById("password");
const loginResultElement = document.getElementById("login-result");

form.addEventListener("submit", sendLogin);

function sendLogin(event) {
  event.preventDefault();
  console.log("Submitted");

  fetch("http://localhost:4000/login-with-fetch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: emailInput.value,
      password: password.value,
    }),
  }),
    then((res) => {
      if (res.status === 200) {
        loginResultElement.innerText = `<Span stytle="color: green">Login successful</span>`;
      } else if (res.status === 401) {
        loginResultElement.innerText = `<Span stytle="color: red">Login failed</span>`;
      }
    });
}
