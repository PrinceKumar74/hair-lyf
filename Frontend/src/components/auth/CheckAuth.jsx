import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  console.log("Authenticated:", isAuthenticated);
  if (!isAuthenticated) {
    // Redirect to login and remember the page they tried to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default CheckAuth;
