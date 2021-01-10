function ErrorHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        //jwt authentication erro
        return res.status(500).json({ message: "The user is not authorized" })
    }

    if (err.name === 'validationError') {
        //validtion error
        return res.status(401).json({ message: err })

    }
    //default to server erro 
    return res.status(500).json(err)
}
module.exports = ErrorHandler;