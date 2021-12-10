require('dotenv').config();
const axios = require('axios');
const {ID_ENDPOINT,THUMBNAIL_ENDPOINT} = process.env;

const filterProds =  async (product, category)=>{
  try{
    const{
      id,
      title, 
      price, 
      condition,
      attributes,
    } = product;
    
    const brand = product.attributes.filter(elem=>elem.id ==="BRAND")[0].value_name.toLowerCase();
    const otherData = await axios.get(`${ID_ENDPOINT}${id}`);
    //TODO: Agregar Thumbnail 400x400 y 250x250 (Ambas medidas vienen en todas las imágenes)
    /*
    | Adentro de pictures aparece:
    pictures": [
    {
      !"id": "796011-MLA47691058372_092021",
      "url": "http://http2.mlstatic.com/D_796011-MLA47691058372_092021-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_796011-MLA47691058372_092021-O.jpg",
      "size": "387x500",
      "max_size": "722x932",
      "quality": ""
    }
    |https://api.mercadolibre.com/pictures/${id} Aparece:
    "variations": [
    {
      !"size": "722x932",
      !"url": "http://mla-s1-p.mlstatic.com/796011-MLA47691058372_092021-F.jpg",
      "secure_url": "https://mla-s1-p.mlstatic.com/796011-MLA47691058372_092021-F.jpg"
    },


    */
    //[Obtengo el tumbnail de 320x320 
    const thumbnailId = otherData.data.pictures[0].id
    //! console.log("THUMBNAIL ID: ", thumbnailId);
    let thumbnailResponse = await axios.get(`${THUMBNAIL_ENDPOINT}${thumbnailId}`);
    let thumbnail = thumbnailResponse.data.variations.find(el=>el.size==="320x320")
    thumbnail = thumbnail.url;
    
    const image = otherData.data.pictures.map(el=>el.url);
    const newAttributes = otherData.data.attributes.map(el=>{
      if(el.id!=="GTIN" || el.id!=="EXCLUSIVE_CHANNEL"||el.id!=="BRAND"){
        return {name:el.name, value:el.value_name}
      }
    })
    const stock = otherData.data.available_quantity;
    const sold_quantity = otherData.data.sold_quantity;
    return {
      data:{
        name: title,
        price, 
        stock,
        sold_quantity,
        condition,
        thumbnail,
        image,
        attributes: newAttributes
      },
      relation:{
        brand,
        category 
      }
    }

  }catch(err){
    console.log("FilterProds: ", err)
  }


}

module.exports = {
  filterProds
}
