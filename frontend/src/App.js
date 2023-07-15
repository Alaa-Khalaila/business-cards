import img from "./images/f1.png";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Terms from "./components/Terms/terms";
import "./normalize.css";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
