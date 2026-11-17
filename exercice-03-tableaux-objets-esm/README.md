# Exercice 3 — Tableaux, Objets, Immutabilité & Modules ES

## Objectifs
- Séparer les données (`data.js`) de la logique métier (`stats.js`).
- Utiliser la déstructuration `{ }` et l'opérateur Spread `...` sans muter l'original.
- Chaîner `.filter()`, `.map()`, `.reduce()` et utiliser `.find()`.

## Travail demandé
Complétez `stats.js` (les données sont déjà fournies dans `data.js`) :
1. `promouvoirUtilisateur(utilisateur, nouveauRole)` :
   - Retournez une **copie** de `utilisateur` avec `role: nouveauRole` grâce au spread `...` (l'objet initial ne doit pas être modifié).
2. `calculerTotalTTC(commandes, tva = 0.2)` :
   - Filtrez les commandes `payee === true`, transformez chaque `ht` en TTC (`ht * (1 + tva)`), puis additionnez avec `.reduce()`.
3. `trouverCommande(commandes, id)` :
   - Retournez la commande correspondante via `.find()`, ou `null` si introuvable (`?? null`).

## Vérification
```bash
node verify.js
```
