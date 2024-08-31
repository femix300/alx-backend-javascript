import express from 'express';
import routes from './routes/index.js';

const port = 1245;

const app = express();
app.use('/', routes);

app.listen(port);

export default app;
module.exports = app;