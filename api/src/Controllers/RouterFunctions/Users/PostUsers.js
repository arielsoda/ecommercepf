const { User } = require('../../../db')

const PostUsers = async(req, res, next) =>{
    try {
    const {type, DNI, name, lastName, email, password, phone} = req.body
        let [newUser, created] = await User.findOrCreate({
            where:{email},
            defaults:{
                type,
                DNI,
                name,
                lastName,
                password,
                phone
            }
        })
        res.status(200).json({created:created, newUser});
    } catch (error) {
        next(error)
    }
}

module.exports = {
    PostUsers
}