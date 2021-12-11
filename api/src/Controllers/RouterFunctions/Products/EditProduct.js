const { Product,CategoryBrand,Category,Brand} = require('../../../db');
const { Op } = require('sequelize');

const editProduct = async(req, res, next) =>{
    var x;
    var y;
    var z;
    try {
        const { id } = req.params;
        const {name, price, stock, sold_quantity, condition,image,thumbnail, attributes, categories, brands} = req.body     
        const prod = await Product.findByPk(id);
            if (!prod) {
                return res.status(404).json({
                    message:"No existe un products con el id"+id
                })
            };
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
                            [Op.and]:[
                                {CategoryId:x.idCategory},
                                {BrandId: y.idBrand}
                            ]
                        }
                    })
                }
                if (z === null) {
                    res.status(404).json({
                        message:"no se puede actualizar el producto porque brand y category no corresponde"
                    })
                } else {
                    await prod.update({name, price, stock, sold_quantity, condition,image,thumbnail, attributes, idRelation:z.idRelation});
                    res.json(prod);
                }
    } catch (error) {
        next(error)
    }
}

module.exports={
    editProduct
}