
exports.uploadFunction = async (req, res, next) => {
    return res.status(200).json({"Message": "File Uploaded Sucessfully", "info": req.file});
}