const { User } = require('../../../db');


const GetUsers = async(req, res, next) =>{
    try {
        
        const userBD = await User.findAll();
        if (userBD.length === 0) {
            return res.status(404).json({message:"DB no contiene Usuario"})
        } else {
            
            let {page} = req.query;
            console.log(`page==>`, page)
            if(page===undefined) {page=1};
            const itemsPerPage = 10;

            res.json(userBD.slice(itemsPerPage*(page-1),(itemsPerPage*(page-1))+itemsPerPage))
        }
    } catch (error) {
        next(error)
    }
}


module.exports = {
    GetUsers
}