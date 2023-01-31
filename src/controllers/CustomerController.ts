import { Request, Response } from 'express';
import { getCustomerData, addCustomer } from '../models/CustomerModel';

function getAllCustomers(req: Request, res: Response): void {
  res.json(getCustomerData());
}

function validateShoppingCart(cart: Cart): boolean {
  // The shopping cart cannot contain any items with quantity zero
  for (const product of cart) {
    if (product.quantity <= 0) {
      return false;
    }
  }

  return true;
}

function calculateSubtotal(cart: Cart): number {
  let subtotal = 0;

  for (const product of cart) {
    subtotal += product.price * product.quantity;
  }

  return subtotal;
}

function createNewCustomer(req: Request, res: Response): void {
  console.log('\nPOST /api/customers');
  console.log(req.body);

  const { name, cart } = req.body as NewCustomerRequest;

  if (!validateShoppingCart(cart)) {
    res.sendStatus(400); // 400 Bad Request - The shopping cart contains items with zero quantity
    return;
  }

  const subtotal: number = calculateSubtotal(cart);
  const newCustomer: Customer = { name, cart, subtotal };

  const didAddCustomer = addCustomer(name, newCustomer);

  if (!didAddCustomer) {
    res.sendStatus(409); // 409 Conflict - The customer name already exists in the dataset
    return;
  }

  res.sendStatus(201); // 201 Created - The customer was successfully added to the dataset
}

export default { getAllCustomers, createNewCustomer };
