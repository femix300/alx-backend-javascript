import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databasePath = process.argv.length > 2 ? process.argv[2] : '';
      const fields = await readDatabase(databasePath);

      let output = 'This is the list of our students\n';
      const sortedFields = Object.keys(fields).sort();

      for (const field of sortedFields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }

      output = output.trim();
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const acceptedMajors = ['CS', 'SWE'];
      const databasePath = process.argv.length > 2 ? process.argv[2] : '';
      const fields = await readDatabase(databasePath);

      const { major } = request.params;

      if (!acceptedMajors.includes(major)) {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      if (!fields[major]) {
        response.status(500).send('Cannot load the database');
        return;
      }

      const firstNames = fields[major];
      const output = `List: ${firstNames.join(', ')}`;

      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
