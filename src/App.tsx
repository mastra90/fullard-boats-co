import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import OurServicesPage from "./pages/OurServicesPage";
import ContactPage from "./pages/ContactUsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-services" element={<OurServicesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
