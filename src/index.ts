import express, { Express } from 'express';
import chalk from 'chalk';
import CustomerController from './controllers/CustomerController';
import { notImplemented } from './controllers/NotImplementedController';

const app: Express = express();
const PORT = 8091;

// Enable JSON Request body parsing
app.use(express.json());

app.get('/api/customers', CustomerController.getAllCustomers);
app.post('/api/customers', CustomerController.createNewCustomer);
app.get('/api/customers/:customerName', notImplemented);

app.listen(PORT, () => {
  console.log(`Server listening on ${chalk.underline.cyanBright(`http://localhost:${PORT}`)}`);
});
