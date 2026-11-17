export function formaterBadge(utilisateur) {
  // TODO: 1. Early return si utilisateur est absent ou sans nom
  if (!utilisateur || !utilisateur.nom) {
    return 'Utilisateur anonyme';
  }
  const nom = utilisateur.nom;
  // TODO: 2. Extraire ville avec ?. et ?? ('Ville inconnue')
  const ville = utilisateur.adresse?.ville ?? 'Ville inconnue';
  // TODO: 3. Extraire points avec ?? (0 par défaut)
  const points = utilisateur.points ?? 0;

  // TODO: 4. Retourner `${nom} (${ville}) - ${points} pts`
  return `${utilisateur.nom} (${ville}) - ${points} pts`;
}

export function comparerStrict(a, b) {
  // TODO: Retourner l'égalité stricte entre a et b
  return a === b;
}




