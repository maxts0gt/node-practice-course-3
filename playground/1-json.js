const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json', 'utf8');
const dataJSON = dataBuffer.toString('utf8');
const data = JSON.parse(dataJSON);
data.name = 'Max';
data.age = 29;
const newDataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', newDataJSON);

//**********************************************************************************************************//
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);
//**********************************************************************************************************//
// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON, 'utf8');

//**********************************************************************************************************//
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);
