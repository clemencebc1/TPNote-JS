
export class Equipement {
    constructor(nom, particularites, description) {
        this.nom = nom;
        this.particularites = particularites;
        this.description = description;
    }
    get nomEquipement() {
        return this.nom;
    }
    get descriptionEquipement() {
        return this.description;
    }
    get particularitesEquipement() {
        return this.particularites;
    }
    /**
     * Ajoute une particularité à l'équipement
     * @param {string} particularite
     */
    addParticularite(particularite) {
        this.particularites.push(particularite);
    }
    /**
     * Retire une particularité de l'équipement
     * @param {string} particular
     * */
    removeParticularite(particularite) {
        this.particularites = this.particularites.filter(p => p !== particularite);
    }
}