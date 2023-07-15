import img from "./images/f1.png";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Terms from "./components/Terms/terms";
import "./normalize.css";
import { CartProvider } from "./CartContex";

import Home from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
