function loadProducts() {
  const container = document.getElementById('product-list');
  if (!container) return;

  fetch('data/products.json')
    .then(response => response.json())
    .then(products => {
      products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${p.image}" alt="${p.name}" width="200">
          <h2>${p.name}</h2>
          <p>${p.description}</p>
          <p class="price"><strong>Price: ${p.price}</strong></p>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => console.error('Failed to load products:', err));
}

// Call function
loadProducts();