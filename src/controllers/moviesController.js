const db = require( "../database/models")
module.exports = {
    list : (req, res) => {
            db.Movie.findAll()
            .then((movies)=>{
                return res.render ("moviesList", {
                    movies
                })
             })
            .catch((error) => console.log(error))
    },

    detail : (req, res) => {
        db.Movie.findByPk(req.params.id)
        .then((movies)=>{
            return res.render ("moviesList", {
                movies
            })
         })
        .catch((error) => console.log(error))
    },

    new : (req, res) => {
        db.Movie.findAll()({ 
            order : [
                ["release_date", "DESC"],
            ]
         })
        .catch((error) => console.log(error))
    },

    recomended : (req, res) => {
        db.Movie.findAll()({ 
            order : [
                ["rating", "DESC"],
            ],

            limit: 5,
         })
         .then((movies)=>{
            return res.render ("recommendedMovies", {
                movies
            })

         })
    }
}
