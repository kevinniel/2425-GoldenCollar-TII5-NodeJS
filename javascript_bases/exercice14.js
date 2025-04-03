// Crée une fonction `estPair` qui prend un nombre et retourne true si le nombre est pair, false sinon
// Teste la fonction avec les nombres 4 et 7


function estPair(nombre) {
    return nombre % 2 === 0;
}

console.log(estPair(4)); // true
console.log(estPair(7)); // false