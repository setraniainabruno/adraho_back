const mongoose = require("mongoose");
const moment = require('moment');

const heureF = moment().format("DD/MM/YYYY HH:mm:ss");

const pointageSchema = new mongoose.Schema(
    {
        idEmploye: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employe",
            required: true,
        },
        heure: {
            type: String,
            default: heureF,
        },
    },
    {
        timestamps: true,
    }
);

const Pointage = mongoose.model.Pointage || mongoose.model("Pointage", pointageSchema);

module.exports = Pointage;
