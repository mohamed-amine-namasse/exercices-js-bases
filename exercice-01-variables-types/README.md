# Exercice 1 — Variables, Types, `===`, `??` et `?.`

## Objectifs
- Utiliser `const` et `let` (jamais `var`).
- Comparer sans coercition implicite grâce à `===`.
- Sécuriser l'accès aux propriétés avec `?.` et `??` sans écraser `0` ou `""`.
- Construire des chaînes avec les *template literals* (backticks).

## Travail demandé
Complétez les deux fonctions dans `index.js` :
1. `formaterBadge(utilisateur)` :
   - Si `!utilisateur` ou `!utilisateur.nom`, retournez `'Utilisateur anonyme'` (*early return*).
   - Récupérez `ville` via `utilisateur.adresse?.ville ?? 'Ville inconnue'`.
   - Récupérez `points` via `utilisateur.points ?? 0` (attention : `0` doit rester `0`, pas `10` !).
   - Retournez la chaîne : `` `${utilisateur.nom} (${ville}) - ${points} pts` ``.
2. `comparerStrict(a, b)` :
   - Retournez `true` uniquement si `a === b` (égalité stricte de valeur ET de type).

## Vérification
```bash
node verify.js
```
