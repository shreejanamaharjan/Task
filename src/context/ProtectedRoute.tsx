import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const accessToken = localStorage.getItem("access-token");
  return accessToken ? <Outlet /> : <Navigate to="/auth-form" />;
};

export default ProtectedRoute;
