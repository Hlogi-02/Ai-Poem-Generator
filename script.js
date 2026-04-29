function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Cause I walk like I've got oil wells"],
    autoStart: true,
    delay: 1,
    curser: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
