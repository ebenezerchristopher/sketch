let containerDiv = document.createElement("div");
containerDiv.className = "container";

let body = document.querySelector("body");

body.insertBefore(containerDiv, body.firstElementChild);
let label = document.createElement("label");
label.for = "slider";
label.textContent = "Slide To Make Finer";

let step = document.createElement("input");
step.type = "range";
step.name = "slider";
step.id = "slider";
step.min = "16";
step.max = "48";
step.step = "4";
step.value = "16";

let num = Number(step.value);

let count = num * num;

while (count > 0) {
  containerDiv.appendChild(document.createElement("div"));
  count--;
}

step.addEventListener("change", (event) => {
  let value = +event.target.value;
  let currentValue = Math.sqrt(containerDiv.children.length);

  let root = document.querySelector(":root");
  root.style.setProperty("--num", `${value}`);

  if (value < currentValue) {
    let diff = currentValue * currentValue - value * value;

    while (diff > 0) {
      containerDiv.children[0].remove();
      diff--;
    }
  } else if (value > currentValue) {
    let diff = value * value - currentValue * currentValue;
    while (diff > 0) {
      containerDiv.appendChild(document.createElement("div"));
      diff--;
    }
  }
});

let secondDiv = document.createElement("div");
secondDiv.className = "secondDiv";

body.insertBefore(secondDiv, body.lastElementChild);

secondDiv.appendChild(step);
secondDiv.insertBefore(label, secondDiv.firstElementChild);

containerDiv.addEventListener("click", (event) => {
  event.target.className = "black";
});

let button = document.createElement("button");
button.addEventListener("click", (event) => {
  let colorDivs = document.querySelectorAll("div.black");
  let count = colorDivs.length - 1;
  while (count >= 0) {
    colorDivs[count].classList.toggle("black");
    count--;
  }
});

button.textContent = "Clear";

secondDiv.appendChild(button);
