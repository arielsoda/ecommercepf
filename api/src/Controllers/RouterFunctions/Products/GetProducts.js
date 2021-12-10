//TODO: Tengo que poder usar queryParams: "Search=", "minPrice", "maxPrice", "category", ""
const {Product,CategoryBrand, Brand, Category} = require('../../../db')
const getProducts= async (req, res, next)=>{
  try{
    const {offset=0} = req.query;
     let products = await Product.findAll({
      attributes:{
        exclude: ["image","attributes","sold_quantity","stock" ]
      },
      include:{
        model: CategoryBrand,
        as: "relation",
      },
      limit:50,
      offset
    })
    let productsInfo = products.map(el=>{
      let {idRelation, relation, ...otherData}= el.toJSON()
      return {...otherData}
    })
    res.status(200).json({productsInfo, offset})
  }catch(err){
    console.log("getProducts: ", err);
    next(err)
  }

}

module.exports ={
  getProducts
}