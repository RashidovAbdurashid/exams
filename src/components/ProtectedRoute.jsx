import { Navigate } from "react-router-dom";

const isAuth = false;

const ProtectedRoute = ({ children }) => {
  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
