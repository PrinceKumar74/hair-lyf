import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import TryOn from './components/TryOn/TryOn.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import OurStory from './components/OurStory/OurStory.jsx'
import Help from './components/Help/Help.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Cart from './components/Cart/Cart.jsx'
import Whishlist from './components/Wishlist/Wishlist.jsx'
const App = () => {
  return (
   <Provider store={store}>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ourStory' element={<OurStory/>}/>
        <Route path='/tryOn' element={<TryOn/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Whishlist/>}/>
      </Routes>
    </Router>
   </Provider>
  )
}

export default App
