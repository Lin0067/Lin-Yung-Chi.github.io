function checkPokemonAnswer() {
  const gameInput = document.getElementById("game").value.trim().toLowerCase();
  const yearInput = document.getElementById("year").value.trim();
  const result = document.getElementById("result");

  const correctGame = "pokemon ultra sun";
  const correctYear = "2018";

  if (gameInput === "" || yearInput === "") {
    result.textContent = "⚠️ Please answer both questions.";
    result.style.color = "orange";
    return;
  }

  if (gameInput === correctGame && yearInput === correctYear) {
    result.textContent = " Correct! My first Pokémon game was Pokémon Ultra Sun in 2018.";
    result.style.color = "green";
  } else {
    result.textContent = " That's not quite right. Try again!";
    result.style.color = "red";
  }
}
