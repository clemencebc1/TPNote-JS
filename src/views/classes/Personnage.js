import Equipement from './Equipement';
import Critere from './Critere';

export class Personnage {
    constructor(nom) {
        this.nom = nom;
        this.pv = 100;
        this.attaque = 10;
        this.defense = 5;
        this.equipements = [];
        this.criteres = [];
    }

    /**
     * fait evoluer le personnage
     * @param {Equipement} equipement 
     * @param {int} attaque 
     * @param {int} defense 
     * @param {int} pv 
     */
    evoluer(equipement, attaque, defense, pv) {
        // vider la liste ou non ?? anciens equipements gardés ou non ??
        this.equipements.push(equipement);
        this.attaque += attaque;
        this.defense += defense;
        this.pv += pv;
    }

     /**
     * ajoute un critere au personnage
     * @param {Critere} critere 
     */
    addCritere(critere) {
        this.criteres.push(critere);
    }

     /**
     * renomme le personnage
     * @param {string} nom 
     */
    rename(nom) {
        this.nom = nom;
    }

    /**
     * le personnage attaque une cible
     * @param {Personnage} cible 
     */
    attaquer(cible) {
        cible.pv -= this.attaque;
    }

     /**
     * le personnage se defend
     * @returns {void}
     */
    defendre() {
        this.pv -= this.defense;
    }

    estVivant() {
        return this.pv > 0;
    }

    estMort() {
        return this.pv <= 0;
    }

    get nomPersonnage() {
        return this.nom;
    }

    get pvPersonnage() {
        return this.pv;
    }

    get attaquePersonnage() {
        return this.attaque;
    }

    get defensePersonnage() {
        return this.defense;
    }

    get equipementsPersonnage() {
        return this.equipements;
    }

    get criteresPersonnage() {
        return this.criteres;
    }
    
    toString() {
        return `Personnage ${this.nom} : pv = ${this.pv}, attaque = ${this.attaque}, défense = ${this.defense}`;
    }

    async render(){
        return `<div>Mon personnage ${this.nomPersonnage}</div>`;
    }
}
