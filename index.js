const express = require('express');
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

Database.connect();

app.use('/api/pecheurs', pecheurRoutes);
app.use('/api/fruitDeMers', fruitDeMerRoutes);
app.use('/api/fruitDeMerEntrees', fruitDeMerEntreeRoutes);
app.use('/api/fruitDeMerSorties', fruitDeMerSortieRoutes);
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/acheteurs', acheteurRoutes);
app.use('/api/produits', produitRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/employes', employeRoutes);
app.use('/api/conges', congeRoutes);
app.use('/api/pointages', pointageRoutes);
app.use('/api/reunions', reunionRoutes);
app.use('/api/activites', activiteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});





