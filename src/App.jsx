import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.page";
import Plants from "./pages/plants/plants.page";
import About from "./pages/about/about.page";
import SignIn from "./pages/sign-in/sign-in.page";
import Cart from "./pages/cart/cart.page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="plants/*" element={<Plants />} />
          <Route path="about" element={<About />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
