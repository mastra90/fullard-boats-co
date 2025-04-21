import {
  Route,
  Routes,
} from 'react-router-dom';
import {
  AppBar,
} from '@mui/material';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUs';
import OurServicesPage from './Pages/OurServices';
import ContactPage from './Pages/ContactPage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        boxShadow: 'none',
        height: '400px',
        '@media (max-width: 600px)': {
          height: '300px'
        }
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-services" element={<OurServicesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </AppBar>
  );
}

export default App;