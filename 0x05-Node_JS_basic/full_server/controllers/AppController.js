class AppController {
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.write('Hello Holberton School!');
    response.end();
  }
}

export default AppController;
