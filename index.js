const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Database = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const pecheurRoutes = require('./routes/pecheurRoutes');
const fruitDeMerRoutes = require('./routes/fruitDeMerRoutes')
const fruitDeMerEntreeRoutes = require('./routes/fruitDeMerEntreeRoutes')
const fruitDeMerSortieRoutes = require('./routes/fruitDeMerSortieRoutes')
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const acheteurRoutes = require('./routes/acheteurRoutes');
const produitRoutes = require('./routes/produitRoutes');
const stockRoutes = require('./routes/stockRoutes');
const employeRoutes = require('./routes/employeRoutes');
const congeRoutes = require('./routes/congeRoutes');
const pointageRoutes = require('./routes/pointageRoutes');
const reunionRoutes = require('./routes/reunionRoutes');
const activiteRoutes = require('./routes/activiteRoutes');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));


Database.connect();

app.use('/pecheurs', pecheurRoutes);
app.use('/fruitDeMers', fruitDeMerRoutes);
app.use('/fruitDeMerEntrees', fruitDeMerEntreeRoutes);
app.use('/fruitDeMerSorties', fruitDeMerSortieRoutes);
app.use('/utilisateurs', utilisateurRoutes);
app.use('/acheteurs', acheteurRoutes);
app.use('/produits', produitRoutes);
app.use('/stocks', stockRoutes);
app.use('/employes', employeRoutes);
app.use('/conges', congeRoutes);
app.use('/pointages', pointageRoutes);
app.use('/reunions', reunionRoutes);
app.use('/activites', activiteRoutes);


const PORT = 3430;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});





