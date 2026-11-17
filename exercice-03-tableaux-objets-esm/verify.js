import assert from 'node:assert/strict';
import { COMMANDES } from './data.js';
import { promouvoirUtilisateur, calculerTotalTTC, trouverCommande } from './stats.js';

const original = { nom: 'Sarah', role: 'Apprenante' };
const maj = promouvoirUtilisateur(original, 'Dev Fullstack');
assert.deepEqual(maj, { nom: 'Sarah', role: 'Dev Fullstack' });
assert.equal(original.role, 'Apprenante', "L'objet original ne doit jamais être muté");

assert.equal(calculerTotalTTC(COMMANDES), 360);
assert.equal(trouverCommande(COMMANDES, 3)?.client, 'Sarah');
assert.equal(trouverCommande(COMMANDES, 999), null);

console.log('[OK] Exercice 3 validé avec succès !');
