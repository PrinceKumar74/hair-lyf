import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import TryOn from "./components/pages/TryOn/TryOn.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Header from "./components/pages/Header/Header.jsx";
import Home from "./components/pages/Home/Home.jsx";
import OurStory from "./components/pages/OurStory/OurStory.jsx";
import Help from "./components/pages/Help/Help.jsx";
import Blogs from "./components/pages/Blogs/Blogs.jsx";
import Cart from "./components/pages/Cart/Cart.jsx";

import Shop from "./components/pages/Shop/Shop.jsx";
import MenSection from "./components/pages/Categories/MenSection/MenSection.jsx";
import WomenSection from "./components/pages/Categories/WomenSection/WomenSection.jsx";
import Footer from "./components/pages/Footer/Footer.jsx";
import UnauthPage from "./components/pages/notFound/UnAuth.jsx";
import NotFound from "./components/pages/notFound/NotFound.jsx";
import Login from "./components/pages/authPages/Login.jsx";
import Register from "./components/pages/authPages/Register.jsx";
import CheckAuth from "./components/auth/CheckAuth.jsx";
import ProductDetailPage from "./components/pages/ProductDetailPage/ProductDetailPage.jsx";
import Wishlist from './components/pages/Wishlist/Wishlist.jsx';
import UserDashboard from "./components/pages/userDashboard/UserDashboard.jsx";
import AuthLayout from "./components/pages/authPages/Layout.jsx";
import LoginWithOTP from "./components/pages/authPages/otp/LoginWithOTP.jsx";
import VerifyWithOTP from "./components/pages/authPages/otp/VerifyWithOTP.jsx";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourStory" element={<OurStory />} />
          <Route path="/tryOn" element={<TryOn />} />
          <Route path="/help" element={<Help />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          {/* Cart Page -- with Protected Route */}
          <Route
            path="/cart"
            element={
              <CheckAuth>
                <Cart />
              </CheckAuth>
            }
          />
          <Route
            path="/wishlist"
            element={
              <CheckAuth>
                <Whishlist />
              </CheckAuth>
            }
          />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shop" element={<Shop />}>
            <Route path="menSection" element={<MenSection />} />
            <Route path="womenSection" element={<WomenSection />} />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="login-with-otp" element={<LoginWithOTP />} />
            <Route path="verify-with-otp" element={<VerifyWithOTP />} />

          </Route>

          <Route path="/unauth-page" element={<UnauthPage />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};
export default App;
