// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import TryOn from './components/TryOn/TryOn';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import BestSeller from './components/BestSeller/BestSeller';
import Wishlist from './components/Wishlist/Wishlist';
import Cart from './components/Cart/Cart';
import { store } from './components/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/try-on" element={<TryOn />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/best-seller" element={<BestSeller />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;