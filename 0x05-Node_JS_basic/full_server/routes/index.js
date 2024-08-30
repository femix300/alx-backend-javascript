import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();

router.get('/', AppController.getHomepage);

router.get('/students', StudentsController.getAllStudents);

router.get('/students/:major', (request, response) => {
  const { major } = request.params;
  request.query.major = major;
  StudentsController.getAllStudentsByMajor(request, response);
});

export default router;
