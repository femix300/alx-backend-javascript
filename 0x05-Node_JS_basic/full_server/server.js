import express from 'express';
import mapRoutes from './routes/index';

const port = 1245;

const app = express();

mapRoutes(app);
app.listen(port);

export default app;
module.exports = app;
