const sequelize = require("sequelize");
const { dataTypes } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {

const alias = "Genre"
const cols = {
    id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        alowNull : false,
        autoIncrement: true,
    },
    title: {
        type: dataTypes.STRING(500),
        alowNull: false,
    },
    rating: {
        type: dataTypes.DECIMAL(3,1).UNSIGNED,
        allowNull: false,
    },
    awards: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue : "0",
    },
    release_date: {
        type: dataTypes.DATE,
        allowNull: false,
    },
    length: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    genre_id: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
}
    const config = {
        tableName : "movies",
        timestamps : true,
        underscore : true,
        

    }

    const Genre = sequelize.define(alias,cols,config);
    return Genre

}