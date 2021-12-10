const { getProduct } = require('../Controllers/RouterFunctions/Products/GetProducts');

const { postProduct } = require('../Controllers/RouterFunctions/Products/PostProducts');

const { deleteProduct } = require('../Controllers/RouterFunctions/Products/DeleteProduct')

const { editProduct } = require('../Controllers/RouterFunctions/Products/EditProduct')

const { Router } = require('express');
const route = Router();



route.get('/',getProduct);
route.post('/',postProduct);
route.delete('/:id',deleteProduct);
route.put('/:id',editProduct)



module.exports= route;