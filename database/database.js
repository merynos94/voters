const Sequelize = require("Sequelize")
const db = {}

const seqelize = new Sequelize("mikos.radoslaw", "mikos.radoslaw", "myca7HaZG3uisql", {
    host:'ux.up.krakow.pl',
    dialect:'mysql',
})

db.seqelize = seqelize
db.Sequelize = Sequelize

module.exports = db
