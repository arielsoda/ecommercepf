const {Router} = require('express');
const {getProducts} = require('../Controllers/RouterFunctions/Products/GetProducts');
const {getProductById} = require('../Controllers/RouterFunctions/Products/GetProductById');
const {getProductBySearch} = require('../Controllers/RouterFunctions/Products/GetProductBySearch');
const {getProductByRankPrice} = require('../Controllers/RouterFunctions/Products//GetProductByRankPrice');
const {getByCategory} = require('../Controllers/RouterFunctions/Products/GetByCategory');
const { postProduct } = require('../Controllers/RouterFunctions/Products/PostProducts');
const router = Router();

router.get('/:productID', getProductById);

router.get('/', (req, res, next)=>{
    const {search, minPrice, maxPrice, category} = req.query;
    
    if (search){
        return getProductBySearch(req,res,next);
    }
    if (minPrice && maxPrice){
        return getProductByRankPrice(req,res,next);
    }
    if (category){
        return getByCategory(req,res,next);
    }else{
        return getProducts(req,res,next);
    }
});

router.post('/',postProduct);

module.exports= router;
