export function promouvoirUtilisateur(utilisateur, nouveauRole) {
  // TODO: Retourner un nouvel objet avec ...utilisateur et role mis à jour
  return {
    ...utilisateur,
    role: nouveauRole
  };
}

export function calculerTotalTTC(commandes, tva = 0.2) {
  // TODO: Chaîner .filter(), .map() et .reduce()
  return commandes
    .filter(commande => commande.payee === true)
    .map(commande => commande.ht * (1 + tva))
    .reduce((total, montantTTC) => total + montantTTC, 0);

}

export function trouverCommande(commandes, id) {
  // TODO: Utiliser .find() et retourner null si non trouvé
  return commandes.find(commande => commande.id === id) ?? null;
}
