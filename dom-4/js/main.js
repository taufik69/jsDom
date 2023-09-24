// when webpage loading then call a main function

window.onload = function () {
  main();
};

function main() {
  const root = document.querySelector(".root");
  const inputField = document.querySelector(".inputField");
  const copy_btn = document.querySelector(".copy_btn");
  const generate_color = document.querySelector(".generate_color");

  generate_color.addEventListener("click", function () {
    root.style.backgroundColor = generatorHexa();
    inputField.value = generatorHexa();
  });

  copy_btn.addEventListener("click", function () {
    toastMessage(`copied ${inputField.value}`);
  });

  // user gives a value then check a hexa value a
  inputField.addEventListener("keyup", function (e) {
    let color = e.target.value;

    if (color && isValidHexa(color)) {
      root.style.backgroundColor = color;
      console.log("from conditohn : ", color);
    } else {
      toastMessage(`invalid Hexa code ${color}`);
    }
  });
}

/**
 * @Generator funtion
 * */

function generatorHexa() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// toast maker function

function toastMessage(toastValue) {
  const root = document.querySelector(".root");
  let toastDiv = document.createElement("div");
  toastDiv.className = "toast_message toast_message-slide-in";
  toastDiv.innerHTML = toastValue;
  root.appendChild(toastDiv);

  toastDiv.addEventListener("click", function () {
    toastDiv.classList.remove("toast_message-slide-in");
    toastDiv.classList.add("toast_message-slide-out");

    toastDiv.addEventListener("animationend", function () {
      toastDiv.remove();
    });
  });
}

// ---> This project gives you a some facalities , like you can input a hexa decimal value .

// 1st step
// ---> first of all check a hexa decimal number is right format

/**
 * @params {String} color: ;
 */

function isValidHexa(color) {
  console.log("come form invalid hexa", typeof color);
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;
  color = color.substring(1);
  let test = /^[0-9A-Fa-f]{6}$/i.test(color);
  return test;
}
