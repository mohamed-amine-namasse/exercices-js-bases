export function attendre(ms) {
  // TODO: Retourner une Promise résolue après ms millisecondes
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function chargerProfil(id) {
  // TODO: Attendre 50 ms, valider id (> 0 et number), ou lever Error('ID invalide')
  await attendre(50);

  if (typeof id !== 'number' || id <= 0) {
    throw new Error('ID invalide');
  }

  return {
    id,
    nom: `Profil #${id}`,
    actif: true
  };
}

export async function recupererProfilSecurise(id) {
  // TODO: Utiliser try / catch autour de await chargerProfil(id)
  try {
    const profil = await chargerProfil(id);
    return {
      ok: true,
      data: profil
    };
  } catch (err) {
    return {
      ok: false,
      erreur: err.message
    };
  }
}
