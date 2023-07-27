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
import Cart from "./pages/Cart/Cart"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cards from "./components/Cards/Cards";

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
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
