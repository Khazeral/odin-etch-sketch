const cases = document.getElementsByClassName("case")


Array.from(cases).forEach(element => {
    element.addEventListener("mouseenter", () => {console.log("activé");element.style.backgroundColor = 'red'})
});

