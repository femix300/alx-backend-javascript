import readDatabase from '../utils';

const acceptedMajors = ['CS', 'SWE'];

class StudentsController {
  static async getAllStudents(request, response) {
    const databasePath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(databasePath)
      .then((fields) => {
        let output = 'This is the list of our students\n';
        const sortedFields = Object.keys(fields).sort();

        for (const field of sortedFields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
          }
        }

        output = output.trim();
        response.status(200).send(output);
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  static async getAllStudentsByMajor(request, response) {
    const databasePath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!acceptedMajors.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((fields) => {
        const firstNames = fields[major];
        const output = `List: ${firstNames.join(', ')}`;

        response.status(200).send(output);
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
