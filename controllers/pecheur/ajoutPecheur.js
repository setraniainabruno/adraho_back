const Pecheur = require('../../models/pecheur');

// Fonction corrigée pour générer le matricule de base
const matMagic = (nom, prenom) => {
  // Correction : utiliser le paramètre 'nom' au lieu de 'navigator'
  let consonnes = (nom.match(/[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]/g) || [])
    .map(c => c.toUpperCase());

  let pM = prenom.replace(/\s/g, '');

  while (pM.length > 3) {
    const somme = [...pM].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    pM = somme.toString();
  }

  // S'assurer qu'on a au moins 3 consonnes
  const troisConsonnes = consonnes.length >= 3
    ? consonnes.slice(0, 3).join('')
    : (consonnes.join('') + 'XXX').slice(0, 3);

  // S'assurer que pM a 3 caractères
  const troisChiffres = pM.padStart(3, '0').slice(-3);

  return troisConsonnes + troisChiffres;
}

const genererUniqueMatricule = async (baseMatricule) => {
  let current = baseMatricule;
  let attempt = 1;

  while (await Pecheur.findOne({ matricule: current })) {
    const lastThree = current.slice(-3);
    let numericValue = [...lastThree].reduce((sum, c) => sum + c.charCodeAt(0), 0);

    numericValue = (numericValue + attempt) % 1000 || 1;

    if (attempt > 30) {
      const prefix = String.fromCharCode(65 + Math.floor(attempt / 30));
      current = current.slice(0, -3) + prefix + numericValue.toString().padStart(3, '0');
    } else {
      current = current.slice(0, -3) + numericValue.toString().padStart(3, '0');
    }

    if (attempt++ > 1000) throw new Error("Trop de tentatives");
  }
  return current;
};

const ajouterPecheur = async (req, res) => {
  console.log(req.body)
  try {
    const { nom, prenom, CIN, adresse, phone, enginePeche, anneeEntree, zonePeche } = req.body;

    if (!nom || !prenom || !phone || !enginePeche || !zonePeche || !CIN) {
      console.log('Les champs nom, prenom, phone, enginePeche, CIN et zonePeche sont obligatoires')
      return res.status(400).json({
        message: 'Les champs nom, prenom, phone, enginePeche, CIN et zonePeche sont obligatoires'
      });
    }

    const baseMatricule = matMagic(nom, prenom);
    const matricule = await genererUniqueMatricule(baseMatricule);

    // Vérification du téléphone
    const phoneExiste = await Pecheur.findOne({ phone });
    if (phoneExiste) {
      console.log('Ce numéro de téléphone est déjà utilisé par un autre pêcheur')
      return res.status(400).json({
        message: 'Ce numéro de téléphone est déjà utilisé par un autre pêcheur'
      });
    }

    const photo = req.file ? `/images/${req.file.filename}` : '';

    const pecheur = new Pecheur({
      matricule,
      nom,
      prenom,
      CIN: CIN || '',
      adresse: adresse || '',
      phone,
      photo,
      enginePeche,
      anneeEntree: anneeEntree || new Date(),
      zonePeche,
    });

    const result = await pecheur.save();

    res.status(201).json({
      message: 'Pêcheur ajouté avec succès',
      result
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({
      message: 'Erreur lors de l\'ajout du pêcheur',
      error: error.message,
    });
  }
};

module.exports = { ajouterPecheur };