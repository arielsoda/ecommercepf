const { Router } = require('express');
const { GetUsers } = require('../Controllers/RouterFunctions/Users/GetUsers');
const { PostUsers } = require('../Controllers/RouterFunctions/Users/PostUsers');
const { GetUsersId } = require('../Controllers/RouterFunctions/Users/GetUsersId');
const { EditUsers } = require('../Controllers/RouterFunctions/Users/EditUsers');
const { DeleteUsers } = require('../Controllers/RouterFunctions/Users/DeleteUsers')
const {getUserCart} = require('../Controllers/RouterFunctions/Users/GetUserCart');
const {postUserCart} = require('../Controllers/RouterFunctions/Users/PostUserCart');
const router = Router();

router.get('/', GetUsers);
router.get('/:id',GetUsersId);
router.post('/', PostUsers);
router.put('/:id',EditUsers);
router.delete('/:id',DeleteUsers)
router.get('/cart/:UserId', getUserCart);
router.post('/cart/:UserId', postUserCart);


module.exports= router