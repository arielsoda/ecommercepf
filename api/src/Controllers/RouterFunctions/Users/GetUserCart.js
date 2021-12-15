const {Cart} = require("../../../db");

const getUserCart = async (req,res,next)=>{
  try{
    const {UserId} = req.params;
    let {count, rows} = await Cart.findAndCountAll({
      where:{
        UserId
      }
    })
    if(count){
      return res.status(200).json(rows);
    }else{

      return res.status(404).json({msg:"Empty cart"})
    }
  }catch(err){
    console.log("Get users/cart/:id", err);
    next(err)
  }
};

module.exports = {getUserCart};