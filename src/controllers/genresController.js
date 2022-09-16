const { Genre } = require("../database/models");
module.exports = {
    list : (req, res) => {
            Genre.findAll()
            .then((genres)=>{
                return res.render ("moviesList", {
                    genres
                })
             })
            .catch((error) => console.log(error))
    },

    detail : (req, res) => {
        Genre.findByPk(req.params.id)
        .then((genre)=>{
            return res.render ("genresDetail", {
                genre
            })
         })
        .catch((error) => console.log(error))
    },

}