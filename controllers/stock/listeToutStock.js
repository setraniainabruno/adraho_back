const Stock = require("../../models/stock");

const listeToutStock = async (req, res) => {
    try {
        const stocks = await Stock.aggregate([
            {
                $group: {
                    _id: "$produitId",
                    quantite: { $sum: "$quantite" },
                    createdDate: { $max: "$createdDate" } // 👈 dernier ajout
                }
            },
            {
                $lookup: {
                    from: "produits", // nom exact de la collection
                    localField: "_id",
                    foreignField: "_id",
                    as: "produitId"
                }
            },
            { $unwind: "$produitId" },
            {
                $project: {
                    _id: 1,
                    quantite: 1,
                    createdDate: 1,
                    produitId: 1,
                    __v: { $literal: 0 }
                }
            }
        ]);

        res.status(200).json({ stocks });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = listeToutStock;
