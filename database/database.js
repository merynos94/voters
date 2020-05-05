const Sequelize = require("Sequelize")
const db = {}

const seqelize = new Sequelize("voters", "mikos.radoslaw", "myca7HaZG3uisql", {
    host:'bringup.ddns.net',
    dialect:'mysql',
    port:'6033'
})

db.seqelize = seqelize
db.Sequelize = Sequelize

module.exports = db
