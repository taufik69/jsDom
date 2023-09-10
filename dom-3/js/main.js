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
