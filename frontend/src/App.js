import img from "./images/f1.png";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Terms from "./components/Terms/terms";
import "./normalize.css";
import { CartProvider } from "./CartContex";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
