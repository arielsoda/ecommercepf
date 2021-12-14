const {Router} = require('express');
const router = Router();
const {getCategories} = require('../Controllers/RouterFunctions/Categories/GetCategories');
const {postCategory} = require('../Controllers/RouterFunctions/Categories/PostCategory');

router.get('/', getCategories)
router.post('/', postCategory)

module.exports= router;