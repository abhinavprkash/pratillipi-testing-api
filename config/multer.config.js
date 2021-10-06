const multer = require("multer");
const { parseCSV } = require("../services/parser.service");
const contentSchema = require("../models/content.model")

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
let fileName;

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      fileName =  `files/admin-${file.fieldname}-${Date.now()}.${ext}`
      cb(null, fileName);
    },
  });

  const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "csv") {
      cb(null, true);
    } else {
      cb(new Error("Not a CSV File!!"), false);
    }
  };

function getName(){
  return fileName;
}

  module.exports = {
    multerStorage: multerStorage,
    multerFilter: multerFilter,
    getName: getName,
  };