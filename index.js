const categories = {
  electronics: [
    { name: 'Laptop', price: 25000, description: 'Powerful and portable laptop for all your computing needs' },
    { name: 'Smartphone', price: 15000, description: 'Feature-packed smartphone with a stunning display' }
  ],
  clothing: [
    { name: 'Coat', price: 8000, description: 'Stylish and warm coat for the cold weather' },
    { name: 'Jacket', price: 5000, description: 'Lightweight jacket for a trendy look' }
  ],
  books: [
    { name: 'Classical literature', price: 800, description: 'Timeless classics that everyone should read' },
    { name: 'E-book', price: 650, description: 'Digital books for convenient reading on the go' }
  ]
};

function displayProducts(category) {
  const productsList = document.getElementById('products');
  const productInfo = document.getElementById('product-info');

  productsList.textContent = '';
  productInfo.textContent = '';

  categories[category].forEach((product) => {
    const listItem = document.createElement('li');
    listItem.textContent = product.name;
    listItem.addEventListener('click', () => displayProductInfo(product));
    productsList.appendChild(listItem);
  });
}

function displayProductInfo(product) {
  const productInfo = document.getElementById('product-info');

  productInfo.textContent = '';

  const productName = document.createElement('div');
  productName.textContent = product.name;

  const productPrice = document.createElement('div');
  productPrice.textContent = `Price: ${product.price} UAH`;

  const productDescription = document.createElement('p');
  productDescription.textContent = `Description: ${product.description}`;

  const buyButton = document.createElement('button');
  buyButton.textContent = 'Buy it now';
  buyButton.addEventListener('click', () => buyProduct(product));

  productInfo.appendChild(productName);
  productInfo.appendChild(productPrice);
  productInfo.appendChild(productDescription);
  productInfo.appendChild(buyButton);
}

function buyProduct(product) {
  alert(`You have just bought: ${product.name}`);
}

const categoriesList = document.getElementsByClassName('category');
for (let i = 0; i < categoriesList.length; i++) {
  const category = categoriesList[i].textContent;
  categoriesList[i].addEventListener('click', () => displayProducts(category));
}