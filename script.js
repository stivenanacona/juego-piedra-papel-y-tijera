function play(userChoice) {
    var choices = ["piedra", "papel", "tijera"];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    var result;

    if (userChoice === computerChoice) {
        result = "Empate!";
    } else if ((userChoice === "piedra" && computerChoice === "tijera") ||
               (userChoice === "papel" && computerChoice === "piedra") ||
               (userChoice === "tijera" && computerChoice === "papel")) {
        result = "¡Ganaste!";
    } else {
        result = "¡Perdiste!";
    }

    document.getElementById("result").innerText = "Tú elegiste: " + userChoice + ". La computadora eligió: " + computerChoice + ". " + result;
}