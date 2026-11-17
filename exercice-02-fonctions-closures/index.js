// TODO: Implémenter en fonction fléchée avec tva = 0.2 par défaut
export const calculerTTC = (ht, tva = 0.2) => {
  // TODO
  return Number((ht * (1 + tva)).toFixed(2));
};

export function filtrerMotsLongs(mots, minLongueur = 4) {
  // TODO: Parcourir mots avec for...of et garder ceux de longueur >= minLongueur
  const resultat = [];
  for (const mot of mots) {
    if (mot.length >= minLongueur) {
      resultat.push(mot);
    }
  }
  return resultat;
}

export function creerCompteur(depart = 0) {
  // TODO: Utiliser une closure pour encapsuler l'état du compteur
  let valeur = depart;
  return {
    incrementer() {
      return ++valeur;
    },
    lire() {
      return valeur;
    }
  };
}
