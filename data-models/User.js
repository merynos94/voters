const Sequelize = require("sequelize")
const db = require("../database/database")

module.exports = db.seqelize.define(
    'user',
    {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        login:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        }
    }
)