// ---> When window is loading then call a main funciton

window.onload = () => {
  main();
};

function main() {
  const btn = document.querySelector(".btn");
  const root = document.querySelector(".root");
  btn.addEventListener("click", function (event) {
    // clearInterval(nono);
    root.style.backgroundColor = GenerateRGBcolor();
    root.style.transition = "all linear .1s";
    console.log(event);
  });
  // --> now play with onclientx an clientY
  root.addEventListener("mousemove", function (event) {
    if (event.target.classList.contains("btn")) {
      root.style.backgroundColor = "white";
      root.style.transition = "all linear .1s";
      clearInterval(nono);
    } else {
      clearInterval(nono);
      root.style.transition = "all linear .1s";
      root.style.backgroundColor = GenerateRGBcolor();
    }
  });

  //   setinterval
  let nono = setInterval(() => {
    root.style.transition = "all linear .04s";
    root.style.backgroundColor = GenerateRGBcolor();
  }, 1000);
}

function GenerateRGBcolor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
