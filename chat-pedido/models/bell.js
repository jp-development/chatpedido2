const {DataTypes, Model} = require("sequelize")
const sequelize = require("../database/db")

class Bell extends Model {
    
}

Bell.init({
    dateIni: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: "Bell"
})

module.exports = Bell
