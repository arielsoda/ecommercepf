const {Router} = require('express');
const router = Router();
const {GetBrands} = require('../Controllers/RouterFunctions/Brands/GetBrands');

const {PostBrands} = require('../Controllers/RouterFunctions/Brands/PostBrands');

const {EditBrand} = require('../Controllers/RouterFunctions/Brands/EditBrands');

router.get('/', GetBrands)
router.post('/',PostBrands)
router.put('/:id',EditBrand)


module.exports= router;