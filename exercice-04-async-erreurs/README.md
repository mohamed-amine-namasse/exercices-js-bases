# Exercice 4 — Asynchronisme (`Promise`, `async / await`) & `try / catch`

## Objectifs
- Créer une fonction utilitaire basée sur `Promise` (`attendre(ms)`).
- Écrire une fonction `async` capable de lever une erreur (`throw new Error(...)`).
- Capturer proprement les erreurs asynchrones avec `try / catch`.

## Travail demandé
Complétez `index.js` :
1. `attendre(ms)` :
   - Retourne une `new Promise((resolve) => setTimeout(resolve, ms))`.
2. `chargerProfil(id)` (fonction `async`) :
   - Attendez `50` ms avec `await attendre(50)`.
   - Si `typeof id !== 'number' || id <= 0`, levez `throw new Error('ID invalide')`.
   - Sinon retournez `{ id, nom: 'Profil #' + id, actif: true }` (ou avec backticks `` `Profil #${id}` ``).
3. `recupererProfilSecurise(id)` (fonction `async`) :
   - Dans un bloc `try / catch`, appelez `await chargerProfil(id)` et retournez `{ ok: true, data: profil }`.
   - En cas d'erreur, retournez `{ ok: false, erreur: err.message }`.

## Vérification
```bash
node verify.js
```
