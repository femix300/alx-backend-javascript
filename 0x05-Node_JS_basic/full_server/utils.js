import fs from 'fs/promises';

async function readDatabase(path) {
  const fields = {};

  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    return fields;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default readDatabase;
