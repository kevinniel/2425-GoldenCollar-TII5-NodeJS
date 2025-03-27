// Affichage de texte en console.
console.log("run.js");


// 1. Déclaration de variables

// Variable modifiable
let a = 1;
// Constante (non modifiable)
const b = 2;
// variable globale (accessible partout - mais à ne pas utiliser)
var c = 3;


// 2. Types de données

// Nombre
let number = 42;
// Chaîne de caractères
let string = "Hello";
// Booléen
let boolean = true;
// Tableau
let array = [1, 2, 3];
// Objet - (JSON : Javascript Object Notation)
let object = { nom: "Alice" };
// Valeur non définie
let und = undefined;
// Null
let nul = null;


// 3. Opérateurs

// Arithmétiques
// +, -, *, /, %, **

// Comparaison
// ==, !=, ===, !==, >, <, >=, <=
// == : vérifie les valeurs
// === : vérifie les valeurs ET les types
"1" == 1; // true
"1" === 1; // false

// Logiques
// &&, ||, !

// Assignation
// =, +=, -=, *=, /=, %=, **=
let calcul = 1;
// ces deux lignes sont la même chose
calcul += 2;
calcul = calcul + 2;


// 4. Conditions
// IF, ELSE IF, ELSE
let x = 3;
if (x > 10) {
    console.log("x est grand");
} else if (x > 5) {
    console.log("x est moyen");
} else {
    console.log("x est petit");
}

// SWITCH
let jour = "lundi";
switch (jour) {
    case "lundi":
        console.log("Début de semaine");
        break;
    case "dimanche":
        console.log("Fin de semaine");
        break;
    default:
        console.log("Milieu de semaine");
}

// 5. Boucles

// FOR
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// WHILE
while (x < 10) {
    console.log(x);
    x++;
}

// DO WHILE (s'exécute au moins une fois)
do {
    console.log(x);
    x++;
}
while (x < 10);

// forEach (pour les tableaux)
let tableau = [1, 2, 3];
tableau.forEach(function (element) {
    console.log(element);
});

// 6. Fonctions

// fonctions de base
function add(a, b) {
    return a + b;
}
// affiche 3
console.log( add(1, 2) );

// fonctions fléchées
let multiply = (a, b) => a * b;
// affiche 6
console.log( multiply(2, 3) );