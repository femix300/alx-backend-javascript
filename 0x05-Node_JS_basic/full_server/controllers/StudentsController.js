import readDatabase from '../utils.js'; // Import the default export

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      console.log('the code enters this try block');
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

      response.statusCode = 200;
      response.write(output);
      response.end();
    } catch (error) {
      response.statusCode = 500;
      response.write('Cannot load the database');
      response.end();
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const acceptedMajors = ['CS', 'SWE'];
      const databasePath = process.argv.length > 2 ? process.argv[2] : '';
      const fields = await readDatabase(databasePath);

      const { major } = request.params;

      if (!acceptedMajors.includes(major)) {
        response.statusCode = 500;
        response.write('Major parameter must be CS or SWE');
        response.end();
        return;
      }

      if (!fields[major]) {
        response.statusCode = 500;
        response.write('Cannot load the database');
        response.end();
        return;
      }

      const firstNames = fields[major];
      const output = `List: ${firstNames.join(', ')}`;

      response.statusCode = 200;
      response.write(output);
      response.end();
    } catch (error) {
      response.statusCode = 500;
      response.write('Cannot load the database');
      response.end();
    }
  }
}

export default StudentsController;
