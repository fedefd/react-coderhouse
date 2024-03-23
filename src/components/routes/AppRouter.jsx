import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Layout from "../layouts/Layout";
import ProtectedRoutes from "../../ProtectedRoutes";
import FetchingAxios from "../pages/fetchingAxios/FetchingAxios";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path="/fetching-axios" element={<FetchingAxios />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
