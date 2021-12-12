const { User } = require('../../../db');

const DeleteUsers = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const usuario = await User.findByPk(id);
        if (!usuario) {
            res.status(404).json({
                message:"usuario eliminado con id" + id
            })
        };
        await usuario.destroy()// eliminacion fisica;

        //eliminacion logica -> estado a 0
        // await usuario.update({estado:false})
        
        res.json(usuario);
    } catch (error) {
        next(error)
    }
}

module.exports={
    DeleteUsers
}