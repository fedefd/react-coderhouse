import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let user = { rol: "user" };

  return <>{user.rol === "admin" ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoutes;
