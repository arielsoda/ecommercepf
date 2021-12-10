const { Router } = require('express');
// Importar todos los routers;
const ProductRoutes = require('./products');


const router = Router();

router.use('/products', ProductRoutes);

module.exports = router;
