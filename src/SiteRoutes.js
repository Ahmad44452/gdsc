import { BrowserRouter, Routes, Route } from "react-router-dom";

///////////////////// COMPONENTS
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const SiteRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default SiteRoutes;