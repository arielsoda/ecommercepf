const { Op } = require('sequelize');
const { Product,CategoryBrand,Category,Brand} = require('../../../db');


const postProduct = async(req, res, next) =>{
    var x;
    var y;
    var z;
    try {
    const {name, price, stock, sold_quantity, condition,image,thumbnail, attributes, categories, brands} = req.body

        if (categories) {
        x = await Category.findOne({
                where:{
                    name:categories
                }
            })
        };
        if (brands) {
            y = await Brand.findOne({
                where:{
                    name:brands
                }
            })
        };

        if (y.idBrand && x.idCategory) {
        z =   await CategoryBrand.findOne({
                where:{
                    CategoryId:x.idCategory,
                    BrandId:y.idBrand
                }
            })
        }
        // console.log(`======>`, z.idRelation)
        // var relationnnn = z.idRelation;

        let [newProduct, created] = await Product.findOrCreate({
            where:{name},
            defaults:{
                price,
                stock,
                image,
                sold_quantity,
                condition,
                thumbnail,
                attributes,
                idRelation:z.idRelation
            }
        });

        res.status(200).json({created:created, newProduct});
    } catch (error) {
        next(error)
    }
}

module.exports={
    postProduct
}