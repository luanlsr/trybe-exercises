const fs = require('fs').promises;

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

const saveFiles = () => {
  array.map(async (file, index) => {
      await fs.writeFile(`file${index + 1}.txt`, file);
  })
}

saveFiles()