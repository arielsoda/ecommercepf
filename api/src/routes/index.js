const { Router } = require('express');

const router = Router();

const getProduct = require('./products')

router.use('/products', getProduct)


module.exports = router;
