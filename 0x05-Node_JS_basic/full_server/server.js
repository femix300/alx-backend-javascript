/**
 * Initializes the Express application and maps routes.
 * Starts the server on a specified port.
 */

import express from 'express';
import mapRoutes from './routes/index';

const port = 1245;

const app = express();

mapRoutes(app);
app.listen(port);

export default app;
module.exports = app;
