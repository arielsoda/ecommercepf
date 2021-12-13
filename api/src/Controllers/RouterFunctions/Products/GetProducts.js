const {Product,CategoryBrand, Brand, Category} = require('../../../db')
const getProducts= async (req, res, next)=>{
  try{
    const {offset=0, limit=50} = req.query;
    if(limit>50) next({message: "The requested limit is higher than the allowed. Maximum allowed is 50", status:400})
  //   let products = await Product.findAll({
  
  //     attributes:{
  //       exclude: ["image","attributes","sold_quantity","stock" ]
  //     },
  //     include:{
  //       model: CategoryBrand,
  //       as: "relation",
  //     },
  //     limit,
  //     offset
  // })
  let {count, rows} = await Product.findAndCountAll({
    attributes:{
      exclude: ["image","attributes","sold_quantity","stock" ]
    },
    include:{
      model: CategoryBrand,
      as: "relation",
    },
    limit,
    offset
  })
    let productsInfo = rows.map(el=>{
      let {idRelation, relation, ...otherData}= el.toJSON()
      return {...otherData}
    })
    res.status(200).json({productsInfo, total:count, limit, offset})
  }catch(err){
    console.log("getProducts: ", err);
    next(err);
  }

}

module.exports ={
  getProducts
}