import { Routes, Route, BrowserRouter } from "react-router-dom";
import Terms from "./components/Terms/terms";
import "./normalize.css";
import { CartProvider } from "./CartContex";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import EditCard from "./components/EditCard/EditCard";
import Register from "./components/Register/Register";
import Login from "./components/logIn/Login";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="terms" element={<Terms />} />
          <Route path="/card/:id" element={<EditCard />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
