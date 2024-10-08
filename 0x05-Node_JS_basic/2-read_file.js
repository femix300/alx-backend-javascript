const fs = require('fs');

/**
 * This program reads a csv file and counts the number of students in it
 * @param {string} path: Path to the csv file.
 */

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const fields = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
      totalStudents += 1;
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
