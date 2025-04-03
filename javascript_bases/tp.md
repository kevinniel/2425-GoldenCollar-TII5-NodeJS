# Travaux Pratique

Le but de ce TP est de simuler le comportement d'un distributeur de billet automatique (DAB)

## 1. Commencer par créer l'ensemble des fonctionnalités du DAB

- Consulter son compte bancaire
- Déposer de l'argent
- Retirer de l'argent
- Quitter le DAB

Impératifs :

- Tout doit se trouver dans un seul fichier `dab.js`
- Vous devrez stocker les informations du compte dans un objet javascript (`{total: 200}`)

## 2. Faire fonctionner le DAB en CLI

- Initialiser le projet node : `npm init`
- On va devoir importer un package Node : `npm install prompt-sync`

Faire en sorte que le menu qui s'affiche soit fonctionnel

## 3. Intégrer la répartition des coupures

1. Lors d'un retrait d'un montant, renseigner l'utilisateur sur les billets et pièces qui seront utilisés. On ne prend pas en compte les centimes !

    par ex : si un utilisateur retire 888€, il faudra préciser les "coupures", à savoir : 
    - 1 x 500€
    - 1 x 200€
    - 1 x 100€
    - 1 x 50€
    - 1 x 20€
    - 1 x 10€
    - 1 x 5€
    - 1 x 2€
    - 1 x 1€

2. gèrer un stock de billets et de pièces dans le DAB. Les coupures utilisées lors des retraits doivent correspondre aux coupures disponibles en stock !