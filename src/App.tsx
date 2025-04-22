import {
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUs';
import OurServicesPage from './Pages/OurServices';
import ContactPage from './Pages/ContactPage';
import NavBar from './Components/NavBar';


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
    </>
  );
}

export default App;