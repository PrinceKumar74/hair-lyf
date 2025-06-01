import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// Layouts
import Header from "./components/pages/Header/Header.jsx";
import Footer from "./components/pages/Footer/Footer.jsx";
import AuthLayout from "./components/pages/authPages/Layout.jsx";

// Pages
import Home from "./components/pages/Home/Home.jsx";
import OurStory from "./components/pages/OurStory/OurStory.jsx";
import TryOn from "./components/pages/TryOn/TryOn.jsx";
import Help from "./components/pages/Help/Help.jsx";
import Blogs from "./components/pages/Blogs/Blogs.jsx";
import Shop from "./components/pages/Shop/Shop.jsx";
import MenSection from "./components/pages/Categories/MenSection/MenSection.jsx";
import WomenSection from "./components/pages/Categories/WomenSection/WomenSection.jsx";
import Cart from "./components/pages/Cart/Cart.jsx";
import Wishlist from "./components/pages/Wishlist/Wishlist.jsx";
import ProductDetailPage from "./components/pages/ProductDetailPage/ProductDetailPage.jsx";
import ForgotPassword from "./components/pages/authPages/ForgotPassword.jsx";
import Login from "./components/pages/authPages/Login.jsx";
import Register from "./components/pages/authPages/Register.jsx";
import LoginWithOTP from "./components/pages/authPages/otp/LoginWithOTP.jsx";
import VerifyWithOTP from "./components/pages/authPages/otp/VerifyWithOTP.jsx";
import UnauthPage from "./components/pages/notFound/UnAuth.jsx";
import NotFound from "./components/pages/notFound/NotFound.jsx";
import UserDashboard from "./components/pages/userDashboard/UserDashboard.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";

// Middleware
import CheckAuth from "./components/auth/CheckAuth.jsx";

// Layout for main pages
const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public and Main Routes with Header/Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ourStory" element={<OurStory />} />
            <Route path="/tryOn" element={<TryOn />} />
            <Route path="/help" element={<Help />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/unauth-page" element={<UnauthPage />} />

            {/* Shop with nested sections */}
            <Route path="/shop" element={<Shop />}>
              <Route path="menSection" element={<MenSection />} />
              <Route path="womenSection" element={<WomenSection />} />
            </Route>

            {/* Protected Routes */}
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
                  <Wishlist />
                </CheckAuth>
              }
            />
          </Route>

          {/* Auth Layout Routes */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="login-with-otp" element={<LoginWithOTP />} />
            <Route path="verify-with-otp" element={<VerifyWithOTP />} />
          </Route>

          {/* Standalone pages without Header/Footer */}
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
