const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema(
    {
        status: {type: String, require: true, default: "public"},
        title: {type: String, required: true},
        body: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, default: "615bda329dea552b0c604bf8"},
        createdAt: {
            type:String,
            default:Date.now
        }
    }
);

const content = mongoose.model("stories", contentSchema);
module.exports = content;