fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" width="200">
        <h2>${p.name}</h2>
        <p>${p.description}</p>
        <p><strong>${p.price}</strong></p>
      `;
      container.appendChild(card);
    });
  });