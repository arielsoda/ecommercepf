const {Categories} = require('../../../db')

async function postCategory (req, res, next) {
    const {name} = req.body;
    if(name){
        try{
        const newCategory = await Categories.create({
          name
        });
        return res.json(newDog);
        }
        catch(e){
           next(e);
        }
      }
      else{
        return res.status(404).send({msg: "Faltan los valores basicos"})
      }
};

module.exports = {
    postCategory
};