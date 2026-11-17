import assert from 'node:assert/strict';
import { attendre, chargerProfil, recupererProfilSecurise } from './index.js';

const t0 = Date.now();
await attendre(40);
assert.ok(Date.now() - t0 >= 30, 'attendre(40) doit patienter environ 40 ms');

const p = await chargerProfil(7);
assert.deepEqual(p, { id: 7, nom: 'Profil #7', actif: true });

await assert.rejects(() => chargerProfil(0), /ID invalide/);

const okRes = await recupererProfilSecurise(4);
assert.deepEqual(okRes, { ok: true, data: { id: 4, nom: 'Profil #4', actif: true } });

const errRes = await recupererProfilSecurise(-1);
assert.deepEqual(errRes, { ok: false, erreur: 'ID invalide' });

console.log('[OK] Exercice 4 validé avec succès !');
