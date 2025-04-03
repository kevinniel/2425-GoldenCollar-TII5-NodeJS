// Crée une fonction `moyenne` qui prend un tableau de nombres en paramètre et retourne leur moyenne
// Exemple : moyenne([10, 15, 20]) → 15


function moyenne(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme / tableau.length;
}

console.log( moyenne([10, 15, 20]) );