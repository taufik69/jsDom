const passwordField = document.querySelector("#password");
const generate_btn = document.querySelector(".generate_btn");

const UppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const loweCase = "abcdefghijklmnopqrstuvwxyz";

const speacialCarater = `!"#$%&'()*+,-./:;<=>?@[\]^_\`\{|}~`;
const number = "0123456789";
const password_length = 12;

let allChars = UppercaseAlphabet + loweCase + number + speacialCarater;

generate_btn.addEventListener("click", function () {
  let password = "";
  password +=
    UppercaseAlphabet[Math.floor(Math.random() * UppercaseAlphabet.length)];

  password += loweCase[Math.floor(Math.random() * UppercaseAlphabet.length)];

  password +=
    speacialCarater[Math.floor(Math.random() * UppercaseAlphabet.length)];

  password += number[Math.floor(Math.random() * UppercaseAlphabet.length)];

  while (password_length > password.length) {
    allChars += allChars[Math.floor(Math.random() * allChars.length)];
    console.log(allChars);
  }
});
