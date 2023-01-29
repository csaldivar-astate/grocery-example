import { Request, Response } from 'express';
import { getCustomerData } from '../models/CustomerModel';

function getAllCustomers(req: Request, res: Response): void {
  res.json(getCustomerData());
}

export default { getAllCustomers };
