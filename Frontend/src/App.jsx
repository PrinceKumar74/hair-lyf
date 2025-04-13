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
import Shop from './components/Shop/Shop.jsx'
import MenSection from './components/Categories/MenSection/MenSection.jsx'
import WomenSection from './components/Categories/WomenSection/WomenSection.jsx'
import Footer from './components/Footer/Footer.jsx'
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

       {/* Shop Page with nested elements */}
        <Route path='/shop' element={<Shop/>}>
        <Route path='menSection' element={<MenSection/>}/>
        <Route path='womenSection' element={<WomenSection/>}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
   </Provider>
  )
}

export default App
