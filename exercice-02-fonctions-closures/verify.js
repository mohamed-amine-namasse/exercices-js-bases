import assert from 'node:assert/strict';
import { calculerTTC, filtrerMotsLongs, creerCompteur } from './index.js';

assert.equal(calculerTTC(100), 120);
assert.equal(calculerTTC(100, 0.055), 105.5);

assert.deepEqual(filtrerMotsLongs(['js', 'node', 'api', 'closure']), ['node', 'closure']);
assert.deepEqual(filtrerMotsLongs(['a', 'ab', 'abc'], 3), ['abc']);

const c1 = creerCompteur(10);
const c2 = creerCompteur();
assert.equal(c1.lire(), 10);
assert.equal(c1.incrementer(), 11);
assert.equal(c1.incrementer(), 12);
assert.equal(c2.lire(), 0, 'Chaque closure doit avoir son propre état indépendant');

console.log('[OK] Exercice 2 validé avec succès !');
