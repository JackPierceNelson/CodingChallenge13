// Task 2: Fetch Products from the API Using Fetch and Promises

const productContainer = document.getElementById('product-container');
const apiUrl= 'https://www.course-api.com/javascript-store-products';

// Function created to fetch products from the API using .then()
function fetchProducts() {
    return fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
    });
}

// Task 3: Display Product Details Dynamically

function displayProducts(products) {
    const productHTML = products.map(product => `
        <div class="product">
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}" class="product-image">
            <div class ="product-info">
                <h2 class="product-name">${product.fields.name}</h2>
                <p class="product-company">${product.fields.company}</p>
                <p class="product-price">$${product.fields.price.toFixed(2)}</p>
        </div>
        </div>
    `).join(" ");

    productContainer.innerHTML = productHTML;
}

// Task 4: Handle Errors Gracefully

function handleError(error) {
    console.error('Error:', error);
    productContainer.innerHTML = '<p>Error loading products. Please try again later.</p>';
}

// Using .catch() to handle the Promise
// Calling the function
fetchProducts()
.then(displayProducts)
.catch(handleError);