import { COMMANDES } from './data.js';
import { calculerTotalTTC, trouverCommande } from './stats.js';

console.log('CA TTC encaissé :', calculerTotalTTC(COMMANDES), '€');
console.log('Commande #3 :', trouverCommande(COMMANDES, 3));
