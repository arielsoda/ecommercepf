const {Router} = require('express');
const {getProducts} = require('../Controllers/RouterFunctions/Products/GetProducts');
const {getProductById} = require('../Controllers/RouterFunctions/Products/getProductById');
const {getProductBySearch} = require('../Controllers/RouterFunctions/Products/getProductBySearch');
const {getProductByRankPrice} = require('../Controllers/RouterFunctions/Products/getProductByRankPrice');
const {getByCategory} =require('../Controllers/RouterFunctions/Products/getByCategory');
const router = Router();

router.get('/:productID', getProductById);

router.get('/', getProducts);

router.get('/', (req, res, next)=>{
    const {search, minPrice, maxPrice, category} = req.query;
    if (search){
        return getProductBySearch(req,res,next)
    }
    if (minPrice && maxPrice){
        return getProductByRankPrice(req,res,next)
    }
    if (category){
        return getByCategory(req,res,next)
    }
});

router.post('/',postProduct);

module.exports= router;
