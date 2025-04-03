const moment = require("moment");
const Conge = require("../../models/conge");

const modifierConge = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const conge = await Conge.findById(id);
        if (!conge) {
            return res.status(404).json({ message: 'Conge non trouvé avec cet ID' });
        }
        const dateDebutMoment = moment(updateData.dateDebut, "DD/MM/YYYY");
        if (!dateDebutMoment.isValid()) {
            return res.status(400).json({ error: "La date de début est invalide." });
        }
        const dateFinMoment = dateDebutMoment.clone().add(updateData.nombreDeJour, "days");
        const dateDebutFormatted = dateDebutMoment.format("DD/MM/YYYY");
        const dateFinFormatted = dateFinMoment.format("DD/MM/YYYY");
        updateData.dateDebut = dateDebutFormatted;
        updateData.dateFin = dateFinFormatted;
        const congeModifie = await Conge.findByIdAndUpdate(id, updateData, { new: true });

        res.status(200).json({ congeModifie });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = modifierConge;
