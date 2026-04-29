function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    curser: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "300t5e9acdfe4e9o84a93ca0d669aabd";
  let context =
    "You are an expert in writing short heartfelt poems. Your mission is to generate 4 line poem in basic HTML and seperate each line with a <br />. Make sure to follow user instructions. Do not include a title to the poem. Sign the poem with 'Hlogi AI' inside a <strong> element at the end of the poem and NoOT at the beginning";
  let prompt =
    "User instructions: Generate a heartfelt poem ${instructionsInput.value}";

  let apiURL =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";

  console.log("Generating poem");
  console.log("Prompt: ${prompt}");
  console.log("Context: ${context}");

  axios.get(apiURL).then(displayPoem);
  //display the generated poem
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
