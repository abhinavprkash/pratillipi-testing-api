// const csvTojson = require('csvtojson');
// const fs = require('fs');

const { parseCSV } = require("./controller/populate.controller");


// (async () => {
//     try {
//         const users = await csvTojson().fromFile('static/parti.csv');
//         fs.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log("JSON array is saved.");
//         });
//     } catch (err) {
//         console.log(err);
//     }
// })();
// parseCSV();

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  console.log(value)
}
