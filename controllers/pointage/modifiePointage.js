const Employe = require("../../models/employe");
const Pointage = require("../../models/pointage");

const modifierPointage = async (req, res) => {
    try {
        const { id } = req.params;
        const { idEmploye } = req.body;
        if (idEmploye) {
            const employeExiste = await Employe.findById(idEmploye);
            if (!employeExiste) {
                return res.status(404).json({ message: "Employé non trouvé." });
            }
        }
        const pointage = await Pointage.findByIdAndUpdate(id, { idEmploye }, { new: true });

        if (!pointage) {
            return res.status(404).json({ message: "Pointage non trouvé." });
        }

        res.status(200).json({ pointage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = modifierPointage;