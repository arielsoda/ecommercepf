const {Router} = require('express');
const {getProductById} = require('../Controllers/RouterFunctions/Products/getProductById');
const {getProductBySearch} = require('../Controllers/RouterFunctions/Products/getProductBySearch');
const {getProductByRankPrice} = require('../Controllers/RouterFunctions/Products/getProductByRankPrice');
const router = Router();

router.get('/:productID', getProductById);
router.get('/', (req, res, next)=>{
    const {search, minPrice, maxPrice} = req.query;
    if (search){
        return getProductBySearch(req,res,next)
    }
    if (minPrice && maxPrice){
        return getProductByRankPrice(req,res,next)
    }
});


module.exports= router;