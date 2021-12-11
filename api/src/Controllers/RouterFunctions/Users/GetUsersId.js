const { User } = require('../../../db');

const GetUsersId = async(req, res, next) =>{
    try {
        const{id} = req.params
        const userID = await User.findByPk(id)
        if (!userID) {
            return res.json({message:"No Existe Id de Usuario"});
        } else {
            return res.json(userID);
        }
    } catch (error) {
        next(error)
    }
}

module.exports={
    GetUsersId
}