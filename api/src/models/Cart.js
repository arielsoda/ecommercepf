const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('cart', {
        amount : {
          type:DataTypes.INTEGER,
          allowNull: false,
          defaultValue:0
        }
    }, {timestamps: false});
};