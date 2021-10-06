const { parseCSV } = require("../services/parser.service");
const contentSchema = require("../models/content.model");
const { getName } = require("../config/multer.config");


async function saveToDB(value, index, array) {
    try{
        const elementTitle = value.Title;
        const elementStory = value.Story;
        const newContent = new contentSchema({
            title: elementTitle,
            status: 'public',
            body: elementStory,
            createdAt: new Date(),
        })
        newContent.save();
    }catch(error){
        console.log(error);
    }
  }
  

exports.populateFunction = async (req, res, next) => {

    let name = getName();

    console.log(name);

    const arr = await parseCSV(name);

    arr.forEach(saveToDB);

    return res.send(arr);

}