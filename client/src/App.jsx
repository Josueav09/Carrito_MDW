import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {AuthProvider} from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import { CartProvider } from "./context/CartContext";
import Home from "./components/Home/homePage";
import CompraExitosa from "./pages/CompraExitosa";

function App() {

  return (
    <>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoute/>}>
              <Route path="/carrito" element={<Home/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route path="/compraExitosa" element={<CompraExitosa/>}/>                  
            </Route>
          </Routes>           
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
    </>
  )
}

export default App