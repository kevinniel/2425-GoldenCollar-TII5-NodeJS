// Générateur de mots de passe complexes (fonction) :

// Il doit contenir au moins une lettre majuscule
// Il doit contenir au moins une lettre minuscule
// Il doit contenir au moins un chiffre
// Il doit contenir au moins un caractère spécial (!@#$%^&*)
// Sa longueur totale est passée en paramètre (minimum 8 caractères)

function generatePassword(length = 8) {

    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    if (length < 8) {
        throw new Error('Password length must be at least 8 characters.');
    }

    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    const allChars = upperCase + lowerCase + numbers + specialChars;

    for (let i = 4; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return password.split('').sort(() => Math.random() - 0.5).join('');

}

console.log( generatePassword() );
console.log( generatePassword(20) );