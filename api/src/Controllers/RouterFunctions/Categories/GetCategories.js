const {Brand, Category} = require('../../../db')

const getCategories = async(req, res, next)=>{
  try{
    const {brands} = req.query;
    if(brands){
      let brands = await Category.findAll({
        attributes:{
          exclude: ["idCategory"]
        },
        include:{
          model:Brand,
          attributes:{
            exclude:["idBrand"],
            through: []
          },
          through:{
            attributes:[]}
        }
      })
      brands = brands.map(el=>{
        let brandArr =el.toJSON().brands.map(elem=>elem.name);
        return {category: el.name, brands:brandArr};
      })
      return res.status(200).json(brands);
    }else{
      let categories = await Category.findAll({
        attributes:{
          exclude:["idCategory"]
        },
        through:{
          attributes:[]
        }
      });
      return res.status(200).json(categories.map(el=>el.name))
    }
  }catch(err){
    console.log("GET /categories: ", err)
    next(err)
  }


}

module.exports = {
  getCategories
}