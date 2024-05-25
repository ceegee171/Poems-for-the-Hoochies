function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = `1841a154a3444205bo994f2f03567t09`;
  let prompt =
    "User instructions: Generate a romantic poem about ${instructionsInput.value}";
  let context =
    "You are a romantic poem expert and love to write short poems. Your task is to provide a romance poem in basic HTMl. Make sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key={apiKey}`;

  console.log(`Prompt: ${prompt}`);
  console.log("Generate poem");
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
