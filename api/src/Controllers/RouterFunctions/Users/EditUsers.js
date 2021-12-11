const { User } = require('../../../db');

const EditUsers = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const { type, DNI, name, lastName, email, password, phone } = req.body;        
        const usuario = await User.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                message:"No existe un Usuario con el id"+id
            })
        };
        await usuario.update({type, DNI, name, lastName, email, password, phone});
        res.json(usuario);
    } catch (error) {
        next(error)
    }
}

module.exports={
    EditUsers
}