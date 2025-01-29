const cases = document.getElementsByClassName("case");
const button = document.querySelector("button");
const container = document.getElementById("container-table");
const dimension = 0;

Array.from(cases).forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = "red";
  });
});

button.addEventListener("click", () => {
  let dimensionInput = Number(
    prompt("Entrer la dimension de la grille (entre 1 et 100) : ")
  );
  if (dimensionInput === NaN) {
    alert("Ceci n'est pas un nombre");
    dimensionInput = Number(prompt("Entrer la dimension de la grille : "));
  }
  removePreviousCanva();
  buildCanvas(dimensionInput);
});
const removePreviousCanva = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const buildCanvas = (dimension) => {
  for (let i = 0; i < dimension; i++) {
    const line = document.createElement("div");
    line.className = "line";
    for (let j = 0; j < dimension; j++) {
      const square = document.createElement("div");
      square.className = "case";
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "red";
      });
      line.appendChild(square);
    }
    container.appendChild(line);
  }
};
