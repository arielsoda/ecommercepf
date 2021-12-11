
const { DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('user', {
        idUser:{
            type: DataTypes.UUID,
            primaryKey:true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        type: {
            type: DataTypes.ENUM("admin","user"),
            required: true,
            allowNull: false,
        },
        DNI: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false,
            unique:true
        },
        name: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate:{
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
            // set(value){
            //     this.setDataValue('password', bcrypt.hashSync(value,10))
            // }
        },        
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate:{
                len:[1,13]
            }
        }
    },{
        timestamps:false
    });
};