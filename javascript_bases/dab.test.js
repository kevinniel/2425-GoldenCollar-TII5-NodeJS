import { compteBancaire } from './dab.js';

test('vérification que les tests se lancent', () => {
    expect(true).toBe(true);
});

test('vérification que le solde est de 100000', () => {
    expect(compteBancaire.solde).toBe(100000);
});