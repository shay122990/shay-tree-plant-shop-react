import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.page";
import Plants from "./pages/plants/plants.page";
import About from "./pages/about/about.page";
import Checkout from "./pages/checkout/checkout.page";
import AuthenticationPage from "./pages/authentication/authentication.page";
import Footer from "./components/footer/footer.component";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";

const Layout = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="plants/*" element={<Plants />} />
      <Route path="about" element={<About />} />
      <Route path="auth" element={<AuthenticationPage />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
};

export default App;
