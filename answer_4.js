const fs = require('fs');

function writeFileContents(filePath, fileContents, callback) {
  fs.writeFile(filePath, fileContents, 'utf8', callback);
}

const filePath = 'example.txt';
const fileContents = 'Hello my name is chamnes. I am 20 years old. Today I want to ask you that. Do you love me because toda I cannot to see your love that provide to me.';

writeFileContents(filePath, fileContents, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File has been written successfully.');
});
