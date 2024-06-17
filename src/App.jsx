import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.page";
import Plants from "./pages/plants/plants.page";
import About from "./pages/about/about.page";
import Navbar from "./components/navbar/navbar.component";
import SignIn from "./pages/sign-in/sign-in.page";
import Cart from "./pages/cart/cart.page";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants/*" element={<Plants />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
