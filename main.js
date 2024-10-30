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

// Using .catch() to handle the Promise
// Calling the function
fetchProducts()
.then(displayProducts)
.catch(handleError);