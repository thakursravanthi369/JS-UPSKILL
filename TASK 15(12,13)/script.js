const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("name");
const greetButton = document.getElementById("greet-button");

greetButton.addEventListener("click", () => {
  const name = nameInput.value;
  greeting.textContent = `Hello, ${name}`;
});