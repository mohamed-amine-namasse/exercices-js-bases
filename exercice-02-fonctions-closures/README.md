# Exercice 2 — Fonctions, `for...of` et Closures

## Objectifs
- Écrire des fonctions fléchées avec paramètres par défaut.
- Parcourir un tableau proprement avec `for...of`.
- Comprendre et implémenter une **closure** (fermeture) pour encapsuler un état privé.

## Travail demandé
Complétez `index.js` :
1. `calculerTTC(ht, tva = 0.2)` :
   - Fonction fléchée qui retourne `Number((ht * (1 + tva)).toFixed(2))`.
2. `filtrerMotsLongs(mots, minLongueur = 4)` :
   - Utilisez une boucle `for...of` pour retourner un nouveau tableau contenant uniquement les mots dont `mot.length >= minLongueur`.
3. `creerCompteur(depart = 0)` :
   - Stockez `let valeur = depart` dans la portée de `creerCompteur`.
   - Retournez un objet `{ incrementer, lire }` où :
     - `incrementer()` augmente `valeur` de 1 et retourne la nouvelle valeur ;
     - `lire()` retourne la valeur actuelle.

## Vérification
```bash
node verify.js
```
