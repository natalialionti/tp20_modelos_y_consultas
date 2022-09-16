const sequelize = require("sequelize");
const { dataTypes } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {

const alias = "Movie"
const cols = {
    id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        alowNull : false,
        autoIncrement: true,
    },
    title: {
        type: dataTypes.STRING(100),
        alowNull: false,
    },
    ranking: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique:true,
    },
    active: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue : "1",
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

    const Movie = sequelize.define(alias,cols,config);
    return Movie

}

