/**
 * Contains the application-related route handlers.
 * Handles the request for the homepage.
 */

class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
