const http = require('http');
const fs = require('fs').promises;

const port = 1245;
const databaseFile = process.argv[2];

function countStudents (path) {
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(databaseFile)
      .then((printOut) => {
        res.end(printOut);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port);

module.exports = app;
