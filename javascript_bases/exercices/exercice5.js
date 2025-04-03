// Crée une variable temperature
// Si temperature est supérieure à 30, affiche "Il fait chaud"
// Sinon si elle est entre 15 et 30, affiche "Temps agréable"
// Sinon, affiche "Il fait froid"

let temperature = 25;
if (temperature > 30) {
    console.log("Il fait chaud");
}
else if (temperature >= 15 && temperature <= 30) {
    console.log("Temps agréable");
}
else {
    console.log("Il fait froid");
}