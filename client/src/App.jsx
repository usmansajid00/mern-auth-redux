import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import Home from "./pages/Home.jsx";
import LoginScreen from "./pages/LoginScreen.jsx";
import RegisterScreen from "./pages/RegisterScreen.jsx";
import ProfileScreen from "./pages/ProfileScreen.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className="my-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="" element={<ProtectedRoutes />}>
            <Route path="profile" element={<ProfileScreen />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
