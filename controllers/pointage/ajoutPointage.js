const Employe = require("../../models/employe");
const Pointage = require("../../models/pointage");


const ajouterPointage = async (req, res) => {
    try {
        const { idEmploye } = req.body;
        const employeExiste = await Employe.findById(idEmploye);
        if (!employeExiste) {
            return res.status(404).json({ message: "Employé non trouvé." });
        }

        const pointage = await Pointage.create({ idEmploye });
        res.status(201).json({ pointage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = ajouterPointage;