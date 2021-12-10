const {Router} = require('express');
const {getProducts} = require('../Controllers/RouterFunctions/Products/GetProducts');
const {getProductById} = require('../Controllers/RouterFunctions/Products/getProductById');
const {getProductBySearch} = require('../Controllers/RouterFunctions/Products/getProductBySearch');
const {getProductByRankPrice} = require('../Controllers/RouterFunctions/Products/getProductByRankPrice');
const { postProduct } = require('../Controllers/RouterFunctions/Products/PostProducts');
const { deleteProduct } = require('../Controllers/RouterFunctions/Products/DeleteProduct');
const { editProduct } = require('../Controllers/RouterFunctions/Products/EditProduct');
const router = Router();


router.get('/:productID', getProductById);

router.get('/', (req, res, next)=>{
    const {search, minPrice, maxPrice} = req.query;
    if (search){
        return getProductBySearch(req,res,next)
    }
    if (minPrice && maxPrice){
        return getProductByRankPrice(req,res,next)
    }else{
      return getProducts(req, res, next)
    }
});

router.post('/',postProduct);


router.delete('/:id',deleteProduct);
router.put('/:id',editProduct)


module.exports= router;
