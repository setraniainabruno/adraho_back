const moment = require("moment");
const Conge = require("../../models/conge");
const Employe = require("../../models/employe");

const ajouterConge = async (req, res) => {
    try {
        const { idEmploye, type, motif, nombreDeJour, dateDebut } = req.body;

        const employeExiste = await Employe.findById(idEmploye);
        if (!employeExiste) {
            return res.status(404).json({ message: "Employé non trouvé." });
        }

        const dateDebutMoment = moment(dateDebut, "DD/MM/YYYY");
        if (!dateDebutMoment.isValid()) {
            return res.status(400).json({ error: "La date de début est invalide." });
        }
        const dateFinMoment = dateDebutMoment.clone().add(nombreDeJour, "days");
        const dateDebutFormatted = dateDebutMoment.format("DD/MM/YYYY");
        const dateFinFormatted = dateFinMoment.format("DD/MM/YYYY");

        const conge = new Conge({
            idEmploye,
            type,
            motif,
            nombreDeJour,
            dateDebut: dateDebutFormatted,
            dateFin: dateFinFormatted
        });

        await conge.save();
        res.status(201).json({ conge });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = ajouterConge;