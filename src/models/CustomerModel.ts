const customersManager: CustomerManager = {};

function getCustomerData(): CustomerManager {
  return customersManager;
}

function addCustomer(customerName: string, customer: Customer): boolean {
  // If the customer is already in the dataset
  if (customerName in customersManager) {
    return false; // exit the function immediately
  }

  // Add the new customer
  customersManager[customerName] = customer;
  return true;
}

function getCustomer(customerName: string): Customer | undefined {
  // If the customer does not exist
  if (!(customerName in customersManager)) {
    return undefined; // then exit immediately
  }

  // The customer is in the dataset
  return customersManager[customerName];
}

export { getCustomerData, addCustomer, getCustomer };
