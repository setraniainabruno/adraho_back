const Reunion = require("../../models/reunion");

const ajouterReunion = async (req, res) => {
    try {
        const { nom } = req.body;

        const nouvelleReunion = new Reunion({ nom });
        await nouvelleReunion.save();
        res.status(201).json({ nouvelleReunion });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = ajouterReunion;