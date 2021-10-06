const csvTojson = require('csvtojson');
const path = require('path');

exports.parseCSV = async (FilePath) => {
    try {
        const users = await csvTojson().fromFile('/home/dark/Dev/pratilipi/public/files/admin-myFile-1633530365142.csv');
        return users;
    } catch (err) {
        console.log(err);
    }
}