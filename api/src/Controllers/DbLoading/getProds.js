const axios = require("axios");
const {filterProds} = require('./filterProds');
const {Category, Brand} = require('../../db'); 
require('dotenv').config();
const {GENERAL_PRODUCTS_ENDPOINT} = process.env;
/* 
[ ML ID's To SEARCH DIFFERENT INFO.
  "id": "MLA1055" => "name": "Smartphones",
  "id": ""MLA352679" =>"name": "Smartwatches",
  "id": "MLA1002" =>"name": "Televisores",
  "id": "MLA9726" =>"name": "Pantallas",
  |Endpoint to get info from a product by ID:
  https://api.mercadolibre.com/items/{ProductId}
*/

const getProducts= async()=>{
  try{
    let ids = ["MLA1055","MLA352679", "MLA1002" ]; //Smartphones, smartWatchs, Televisions
    let categories = ["smartPhone", "smartWatch","television"]
    let category;
    let promisesWait =[];
    //[Agrego las categorías si no existe a la tabla de categorías
    await Category.bulkCreate([
      {name:"smartPhone"},
      {name:"smartWatch"},
      {name:"television"}
    ]);

    //|Traigo la información del endpoint de los distintos tipos de productos
    for(let i=0, offset=0; i<ids.length;i++){
      let data = [];
      //[Traigo la categoría actual de la base de datos
      category = await Category.findOne({
        where:{
          name:categories[i]
        }
      });

      //[Busco los 200 celulares, 100 smartwaches y 100 televisores. Elementos correspondientes a las categorías precargadas.
      while((i===0 && offset<200)||(i>0 &&offset<100)){
        //! console.log("wile lap: ", i , "off: ", offset)
        let request = await axios.get(`${GENERAL_PRODUCTS_ENDPOINT}&offset=${offset}&category=${ids[i]}`);
        data = [...data, ...request.data.results];
        
        //[Extraigo las distintas marcas de todos los productos 
        let brands = request.data.results.flatMap(el=>el.attributes.filter(elem=>elem.id ==="BRAND")).map(el=>el.value_name.toLowerCase());
        //! console.log("Brands: ", brands);
        brands = removeDups(brands)//* Elimino las marcas repetidas
        
        //[Para cada marca en el arreglo, la creo si no existe en la tabla de Brands
        for (const elem of brands) {
          let [brand, created] = await Brand.findOrCreate({
              where: {name: elem}, 
          })
          //[una vez que la traigo, (la haya creado o no), le agrego la relación con la categoría actual
          await category.addBrand(brand)
        }
        offset+=50;
      }
      //[Ahora busco los datos específicos (imagenes) de todos los productos de la categoría que busqué.
      const filteredData =  data.map((el)=> filterProds(el,categories[i]));

      let filteredAwait = await Promise.all(filteredData)
      promisesWait = [...promisesWait, ...filteredAwait ];
      offset=0;
    }

    // //[Devuelvo el arreglo de los resultados para poder agregar a la base de datos]
    return promisesWait;
  }catch(err){
    console.log(err);
  }

}


function removeDups(arr) {
  let unique = {};
  arr.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

module.exports= {
  getProducts
}