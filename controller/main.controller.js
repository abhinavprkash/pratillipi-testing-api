
exports.mainFunction = async (req, res, next) => {

    return res.status(200).json({Message: "Welcome to Express Boilerplate", "Github Repository": "https://github.com/uzair-ali10/express-boilerplate"});

}

exports.indexFunction = async (req, res, next) => {
    
    res.status(200).render("index");
}