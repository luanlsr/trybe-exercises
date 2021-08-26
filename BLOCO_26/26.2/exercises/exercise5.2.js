const fs = require('fs').promises;

const file1 = fs.readFile('./file1.txt', 'utf-8')
const file2 = fs.readFile('./file2.txt', 'utf-8')
const file3 = fs.readFile('./file3.txt', 'utf-8')
const file4 = fs.readFile('./file4.txt', 'utf-8')
const file5 = fs.readFile('./file5.txt', 'utf-8')

// file1.then(data => console.log(data));

const saveAllFiles = () => {
  Promise.all([
    file1,
    file2,
    file3,
    file4,
    file5
  ])

  .then(files => fs.writeFile(`fileAll.txt`, files.join(' ')))
  
}

saveAllFiles()