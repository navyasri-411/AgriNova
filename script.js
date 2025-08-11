// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  
  const searchInput = document.querySelector(".search-section input");
  const fertilizerCards = document.querySelectorAll(".fertilizer-card");
  const cartButtons = document.querySelectorAll(".cart");
  const buyButtons = document.querySelectorAll(".buy");

  let cartCount = 0;

  // --- Search filter functionality ---
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase().trim();
    
    fertilizerCards.forEach(card => {
      const productName = card.querySelector("h4").textContent.toLowerCase();
      if (productName.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // --- Add to Cart functionality ---
  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      alert("✅ Item added to cart! Total items: " + cartCount);

      // Optional: Update cart icon with count
      updateCartIcon();
    });
  });

  // --- Buy Now functionality ---
  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productName = button.closest(".fertilizer-card").querySelector("h4").textContent;
      alert(`🛒 You selected "${productName}". Proceeding to checkout...`);
    });
  });

  // --- Update cart icon with count ---
  function updateCartIcon() {
    const cartIcon = document.querySelector("header .top-right i:first-child");
    if (cartIcon) {
      cartIcon.textContent = `🛒(${cartCount})`;
    }
  }

});
