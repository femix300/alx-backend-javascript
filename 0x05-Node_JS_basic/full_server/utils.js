/**
 * Reads and processes the student database file.
 * Returns a promise that resolves with an object
 * containing student first names grouped by their field of study.
 *
 * Rejects the promise if the database cannot be loaded or parsed.
 */

import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      try {
        const fields = {};
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        for (let i = 1; i < lines.length; i += 1) {
          const [firstname, , , field] = lines[i].split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }

        resolve(fields);
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
