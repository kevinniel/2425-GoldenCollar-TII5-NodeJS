import promptSync from 'prompt-sync';
const prompt = promptSync();

const stock = {
    coupures: {
        500: 0,
        200: 10,
        100: 10,
        50: 10,
        20: 10,
        10: 10,
        5: 10,
        2: 10,
        1: 10,
    },

    retirer: function(montant) {
        let rendu = {};
        Object.keys(this.coupures)
            .map(Number)
            .sort((a, b) => b - a)
            .forEach(valeur => {
                console.log(`Coupure de ${valeur} : ${this.coupures[valeur]} billets`);
                if(montant >= valeur) {
                    rendu[valeur] = Math.floor(montant / valeur);
                    if (rendu[valeur] > this.coupures[valeur]) {
                        rendu[valeur] = this.coupures[valeur];
                    }
                    montant -= rendu[valeur] * valeur;
                    this.coupures[valeur] -= rendu[valeur];
                }
            });
        return rendu;
    },
}

const compteBancaire = {
    solde: 100000,

    consulterSolde: function() {
        console.log(`Votre solde est de ${this.solde} euros.`);
    },

    deposerArgent: function(montant) {
        montant = parseInt(montant);
        if (montant > 0) {
            this.solde += montant;
            console.log(`Vous avez déposé ${montant} euros.`);
        } else {
            console.log("Le montant doit être positif.");
        }
    },

    retirerArgent: function(montant) {
        montant = parseInt(montant);
        if (montant > 0 && montant <= this.solde) {
            this.solde -= montant;
            stock.retirer(montant);
            console.log(`Vous avez retiré ${montant} euros.`);
        } else if (montant > this.solde) {
            console.log("Fonds insuffisants.");
        } else {
            console.log("Le montant doit être positif.");
        }
    }

}

const dab = {
    // initialisation
    initialiser: function() {
        console.clear();
        console.log("DAB initialisé.");
        this.afficherMenu();
        this.choisirOption();
    },

    // menu
    afficherMenu: function() {
        console.log("==== MENU DU DAB ====");
        console.log("0. Consulter le stock");
        console.log("1. Consulter le solde");
        console.log("2. Déposer de l'argent");
        console.log("3. Retirer de l'argent");
        console.log("4. Quitter");
    },

    // actions du menu
    choisirOption: function() {
        let option = prompt();
        console.clear();
        switch (option) {
            case "0":
                this.consulterStock();
                break;
            case "1":
                this.consulterCompte();
                break;
            case "2":
                const montantDepot = prompt("Entrez le montant à déposer :");
                this.deposer(montantDepot);
                break;
            case "3":
                const montantRetrait = prompt("Entrez le montant à retirer :");
                this.retirer(montantRetrait);
                break;
            case "4":
                this.quitter();
                break;
            default:
                console.log("Option invalide. Veuillez réessayer.");
        }
        this.afficherMenu();
        this.choisirOption();
    },
    
    consulterStock: function() {
        console.log("==== STOCK ====");
        Object.keys(stock.coupures).forEach(coupure => {
            console.log(`Coupure de ${coupure} : ${stock.coupures[coupure]} billets`);
        });
    },

    consulterCompte: function() {
        compteBancaire.consulterSolde();
    },

    deposer: function(montant) {
        compteBancaire.deposerArgent(montant);
    },

    retirer: function(montant) {
        compteBancaire.retirerArgent(montant);
    },

    quitter: function() {
        console.log("Merci d'avoir utilisé le DAB. Au revoir !");
        process.exit(0)
    }
}

dab.initialiser();