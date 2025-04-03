const Pecheur = require('../../models/pecheur');

const ajouterPecheur = async (req, res) => {
  try {
    const { matricule, nom, prenom,CIN, adresse, phone, enginePeche, anneeEntree, zonePeche } = req.body;

    const photo = req.file ? `/images/${req.file.filename}` : '';

    const pecheur = new Pecheur({
      matricule,
      nom,
      prenom,
      CIN,
      adresse,
      phone,
      photo: photo || '',
      enginePeche,
      anneeEntree,
      zonePeche,
    });

    const result = await pecheur.save();

    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({
      message: 'Erreur lors de l\'ajout du pêcheur',
      error: error.message,
    });
  }
};

module.exports = { ajouterPecheur };
