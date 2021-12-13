const {Router} = require('express');
const router = Router();
const {getCategories} = require('../Controllers/RouterFunctions/Categories/GetCategories');

router.get('/', getCategories)


module.exports= router;