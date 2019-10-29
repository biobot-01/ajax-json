document.getElementById('getCustomerButton').addEventListener('click', getCustomer);

document.getElementById('getCustomersButton').addEventListener('click', getCustomers);

// Get customer
function getCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);
      const ul = document.createElement('ul');

      const output = `
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      `;

      ul.innerHTML = output;

      document.getElementById('customer').after(ul);
    }
  };

  xhr.send();
}

// Get customers
function getCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = ``;
      
      customers.forEach(customer => {
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>`;
      });

      document.getElementById('customers').parentElement.innerHTML += output;
    }
  };

  xhr.send();
}