const Employe = require('../../models/employe');

const ajouterEmploye = async (req, res) => {
    try {
        const { matricule, nom, prenom, poste, email, phone, salaire } = req.body;

        const photo = req.file ? `/images/${req.file.filename}` : '';

        const employe = new Employe({
            matricule,
            nom,
            prenom,
            poste,
            email: email || "",
            phone,
            salaire,
            photo: photo || ""
        });

        await employe.save();

        res.status(201).json({ employe });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = ajouterEmploye;
