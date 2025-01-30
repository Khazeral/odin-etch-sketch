const container = document.getElementById("container-table");
let dimension = 4;
let colorSelected = "blue";

const colorRed = document.getElementById("red");
const colorBlue = document.getElementById("blue");
const button = document.querySelector("button");

colorBlue.addEventListener("click", () => {
    colorBlue.className = "selected-color";
    colorRed.className = "";
    colorSelected = "blue";
});

colorRed.addEventListener("click", () => {
    colorRed.className = "selected-color";
    colorBlue.className = "";
    colorSelected = "red";
});

button.addEventListener("click", () => {
    let dimensionInput = Number(prompt("Entrer la dimension de la grille (entre 1 et 100) : "));
    
    if (isNaN(dimensionInput) || dimensionInput < 1 || dimensionInput > 100) {
        alert("Ceci n'est pas un nombre valide");
        return;
    }

    removePreviousCanva();
    dimension = dimensionInput;
    buildCanvas(dimension);
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
                square.style.backgroundColor = colorSelected;

                setTimeout(() => {
                    if (isFrenchFlag()) {
                        alert("Mon saucisson, ma vinasse, mon pays tu l'aimes ou tu le quittes !");
                    }
                }, 100);
            });

            line.appendChild(square);
        }
        container.appendChild(line);
    }
};


const isFrenchFlag = () => {
    if (dimension % 3 === 0) {
        const squaresLeft = getLeftSideSquares();
        const squaresRight = getRightSideSquares();

        const leftIsBlue = squaresLeft.every(square => square.style.backgroundColor === "blue");
        const rightIsRed = squaresRight.every(square => square.style.backgroundColor === "red");

        return leftIsBlue && rightIsRed;
    }
    return false;
};

const getLeftSideSquares = () => {
    let squares = [];
    const lines = document.getElementsByClassName("line");

    for (let i = 0; i < lines.length; i++) {
        const children = lines[i].children;
        for (let j = 0; j < Math.floor(dimension / 3); j++) {
            if (children[j]) {
                squares.push(children[j]);
            }
        }
    }
    return squares;
};


const getRightSideSquares = () => {
    let squares = [];
    const lines = document.getElementsByClassName("line");

    for (let i = 0; i < lines.length; i++) {
        const children = lines[i].children;
        for (let j = Math.ceil(2 * dimension / 3); j < dimension; j++) {
            if (children[j]) {
                squares.push(children[j]);
            }
        }
    }
    return squares;
};


window.addEventListener("DOMContentLoaded", () => {
    buildCanvas(dimension);
});
