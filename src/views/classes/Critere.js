export class Critere {
    constructor(nom, particularites, description) {
        this.nom = nom;
        this.particularites = particularites;
        this.description = description;
    }

    get nomCritere() {
        return this.nom;
    }

    get descriptionCritere() {
        return this.description;
    }

    get particularitesCritere() {
        return this.particularites;
    }

    /**
     * Ajoute une particularité au critère
     * @param {string} particularite
     */
    addParticularite(particularite) {
        this.particularites.push(particularite);
    }

    toString() {
        return {
            nom: this.nom,
            particularites: this.particularites,
            description: this.description
        };
    }

    async render(){
        return `<div>${this.nomCritere}</div>`;
    }
}
