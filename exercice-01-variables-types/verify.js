import assert from 'node:assert/strict';
import { formaterBadge, comparerStrict } from './index.js';

assert.equal(formaterBadge(null), 'Utilisateur anonyme');
assert.equal(formaterBadge({}), 'Utilisateur anonyme');
assert.equal(
  formaterBadge({ nom: 'Camille', points: 0 }),
  'Camille (Ville inconnue) - 0 pts',
  '0 point doit rester 0 (utilisez ?? et non ||)'
);
assert.equal(
  formaterBadge({ nom: 'Lucas', adresse: { ville: 'Lyon' }, points: 15 }),
  'Lucas (Lyon) - 15 pts'
);

assert.equal(comparerStrict(5, 5), true);
assert.equal(comparerStrict('5', 5), false, "'5' et 5 ne sont pas du même type");
assert.equal(comparerStrict(0, false), false, '0 et false ne sont pas du même type');

console.log('[OK] Exercice 1 validé avec succès !');
