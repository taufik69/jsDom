// ---> set onload eventlisther to writ something

window.onload = (e) => {
  main();
};

function main() {
  const root = document.querySelector(".root");
  const btn = document.querySelector(".btn");
  const output = document.querySelector(".output");

  //   ---> Now click button and generate random color and hexa code
  btn.addEventListener("click", function () {
    root.style.backgroundColor = GenerateHexacolor();
    output.value = GenerateHexacolor();
  });
}

function GenerateHexacolor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
