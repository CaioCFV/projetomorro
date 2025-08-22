import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ProtectedRoute } from "./util/protectedRoute";
import Home from "./pages/Home";
import { GlobalStyle } from "./pages/Home/style";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="*" Component={Home} />
        </Route>
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}
