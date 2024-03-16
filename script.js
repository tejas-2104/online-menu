document.getElementById('orderButton').addEventListener('click', function() {
    const foodItems = document.querySelectorAll('.food-items input[type="checkbox"]:checked');
    
    if (foodItems.length === 0) {
      alert('Please select at least one food item.');
      return;
    }
  
    const loading = document.getElementById('loading');
    const orderDetails = document.getElementById('orderDetails');
  
    loading.style.display = 'block';
  
    
    const prepareFood = new Promise(function(resolve, reject) {
      const randomTime = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; 
      setTimeout(resolve, randomTime);
    });
  
    prepareFood.then(function() {
      loading.style.display = 'none';
      orderDetails.style.display = 'block';
  
      const foodImageContainer = document.getElementById('foodImageContainer');
      foodImageContainer.innerHTML = ''; 
      
      const selectedFood = Array.from(foodItems).map(item => item.value);
      const foodImageUrls = getFoodImageUrl(selectedFood);
      
     
      foodImageUrls.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Food Image';
        foodImageContainer.appendChild(img);
      });
  
      
      const orderId = document.getElementById('orderId');
      const orderIdText = generateOrderId();
      orderId.textContent = `Order ID: ${orderIdText}`;
    });
  });
  
  function getFoodImageUrl(selectedFood) {
    const foodImages = {
      Burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww',
      Fries: 'https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZyaWVzfGVufDB8fDB8fHww',
      Soda: 'https://images.unsplash.com/photo-1594492634282-12a04144fbfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHNvZGF8ZW58MHx8MHx8fDA%3D',
      'Onion Rings': 'https://plus.unsplash.com/premium_photo-1683121324272-90f4b4084ac9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    };
  
    const imageUrls = selectedFood.map(food => foodImages[food]);
    return imageUrls; 
  }
  
  function generateOrderId() {
    
    return 'BK' + Math.floor(Math.random() * 1000000);
  }
  