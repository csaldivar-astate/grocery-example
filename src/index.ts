import express, { Express } from 'express';
import { notImplemented } from './controllers/NotImplementedController';

const app: Express = express();
const PORT = 8091;

app.get('/api/customers', notImplemented);
app.post('/api/customers', notImplemented);
app.get('/api/customers/:customerName', notImplemented);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
