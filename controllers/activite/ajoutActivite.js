const Activite = require("../../models/activite");

const ajouterActivite = async (req, res) => {
    try {
        const { nom, depense } = req.body;

        const nouvelleActivite = new Activite({
            nom,
            depense,
        });

        await nouvelleActivite.save();
        res.status(201).json({ nouvelleActivite });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = ajouterActivite;