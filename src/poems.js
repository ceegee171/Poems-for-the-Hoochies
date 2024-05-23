function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["La tombe dit a la rose"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemElement = document.querySelector("#poem-form");
poemElement.addEventListener("submit", generatePoem);
