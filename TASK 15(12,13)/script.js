const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("name");
const greetButton = document.getElementById("greet-button");

// Greet functionality
greetButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name !== "") {
    greeting.textContent = `Hello, ${name}`;
  } else {
    greeting.textContent = "Hello";
  }
});

// Add color functionality to boxes
const colors = ["red", "blue", "green", "yellow"];

colors.forEach(color => {
  const box = document.getElementById(color);
  box.addEventListener("click", () => {
    box.style.backgroundColor = color;
    box.style.color = (color === "yellow") ? "black" : "white";
  });
});
