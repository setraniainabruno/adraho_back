const mongoose = require('mongoose');
const Conge = require('./conge');
const Pointage = require('./pointage');

const employeSchema = new mongoose.Schema({
    matricule: { type: String, required: true, unique: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    poste: { type: String, required: true },
    statut: { type: String, default: 'Actif' },
    email: { type: String, default: "", match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Veuillez entrer un email valide'] },
    phone: { type: String, required: true, },
    salaire: { type: Number, default: 0 },
    soldeConges: { type: Number, min: 0, default: 30 },
    photo: { type: String, default: "" }
});

employeSchema.pre('findOneAndDelete', async function (next) {
    const employeId = this.getQuery()._id;

    try {
        await Conge.deleteMany({ idEmploye: employeId });
        await Pointage.deleteMany({ idEmploye: employeId })
        next();
    } catch (error) {
        console.error(error.message);
        next(error);
    }
});

const Employe = mongoose.models.Employe || mongoose.model('Employe', employeSchema);

module.exports = Employe;
