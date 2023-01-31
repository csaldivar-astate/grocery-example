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

export { getCustomerData, addCustomer };
