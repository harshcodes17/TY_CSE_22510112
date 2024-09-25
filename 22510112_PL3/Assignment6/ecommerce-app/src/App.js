import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import FilterSort from './FilterSort';

const App = () => {
  const [products, setProducts] = useState([
    // Sample products
    { id: 1, name: 'Product 1', price: 100, image: 'image1.jpg', category: 'electronics' },
    { id: 2, name: 'Product 2', price: 200, image: 'image2.jpg', category: 'fashion' },
    // Add more products as needed
  ]);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const filteredProducts = products.filter(product => filter ? product.category === filter : true);
  const sortedProducts = filteredProducts.sort((a, b) => sort === 'low-to-high' ? a.price - b.price : b.price - a.price);

  return (
    <Router>
      <div className="container mx-auto">
        <FilterSort setFilter={setFilter} setSort={setSort} />
        <Routes>
          <Route path="/" element={<ProductList products={sortedProducts} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;