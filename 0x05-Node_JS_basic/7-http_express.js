const express = require('express');

const app = express();
const fs = require('fs').promises;

const port = 1245;
const databaseFile = process.argv[2];

function countStudents(path) {
  const fields = {};
  let length = 0;
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      for (let i = 1; i < lines.length; i += 1) {
        const [firstname, , , field] = lines[i].split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
        length += 1;
      }

      let printOut = `Number of students: ${length}\n`;

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          printOut += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }

      return printOut.trim();
    });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  if (!databaseFile) {
    return res.status(404).send('Cannot load the database');
  }
  return countStudents(databaseFile)
    .then((printOut) => res.send(`This is the list of our students\n${printOut}`))
    .catch(() => res.status(404).send('Cannot load the database'));
});

app.listen(port);

module.exports = app;
