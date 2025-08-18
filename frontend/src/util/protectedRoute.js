import { Outlet, Navigate } from "react-router-dom";
import { Auth } from "../service/api";

export const ProtectedRoute = function (props) {
  const auth = new Auth();
  const user = auth.validateUser();

  return user ? <Outlet /> : <Navigate to={"/login"} />;
};
