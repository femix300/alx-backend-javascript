/**
 * Maps routes to their corresponding controller handlers.
 * Configures endpoints for the homepage and student-related requests.
 */

import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
