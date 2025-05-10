// Function 1: Validate email format
function validateEmail(email) {
    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.')
  }
  
  // Function 2: Get a random featured product
  const products = ["Echo Dot", "Kindle", "Fire Stick", "Ring Camera"];
  function getRandomFeaturedProduct() {
    const index = Math.floor(Math.random() * products.length);
    return `Today's featured deal: ${products[index]}`;
  }
  
  // Function 3: Calculate total price in cart
  const cartPrices = [29.99, 49.99, 15.00];
  function calculateTotalPrice(prices) {
    return prices.reduce((total, price) => total + price, 0).toFixed(2);
  }
  
  // Function 4: Add user feedback to storage
  let feedbackMessages = [];
  function addFeedback(message) {
    feedbackMessages.push(message);
    return `Thanks for your feedback: "${message}"`;
  }
  
  // Function 5: Search simulation
  function searchProduct(keyword) {
    const matches = products.filter(product => product.toLowerCase().includes(keyword.toLowerCase()));
    return matches.length > 0 ? matches : "No results found.";
  }
  
  // Example usages:
  console.log(validateEmail("user@example.com"));
  console.log(getRandomFeaturedProduct());
  console.log(`Total: $${calculateTotalPrice(cartPrices)}`);
  console.log(addFeedback("Love the fast shipping!"));
  console.log(searchProduct("echo"));
  
