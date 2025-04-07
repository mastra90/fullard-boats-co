import { useState } from 'react';
import {
  Route,
  Routes,
  Link,
  useLocation
} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logoMobile from './assets/logo-mobile.svg';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUs';
import OurServicesPage from './Pages/OurServices';
import ContactPage from './Pages/ContactPage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <Toolbar>
        <Logo />

        <Box sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="end"
            onClick={toggleMenu}
            sx={{ fontSize: '1.3em' }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box
            component="nav"
            sx={{
              display: 'flex',
              gap: '2em',
              fontSize: '1.5em',
              fontWeight: 500
            }}
          >
            <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
              About Us
            </Link>
            <Link to="/our-services" style={{ textDecoration: 'none', color: 'inherit' }}>
              Our Services
            </Link>
            <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
              Contact Us
            </Link>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={toggleMenu}
        PaperProps={{
          sx: {
            backgroundColor: '#1d1e21',
            height: '100%',
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: 8,
            pb: 4
          }}
          onClick={toggleMenu}
        >
          <Link
            to="/about-us"
            style={{
              textDecoration: 'none',
              color: 'white',
              padding: '1em',
              fontSize: '1.2rem'
            }}
          >
            About Us
          </Link>
          <Link
            to="/our-services"
            style={{
              textDecoration: 'none',
              color: 'white',
              padding: '1em',
              fontSize: '1.2rem'
            }}
          >
            Our Services
          </Link>
          <Link
            to="/contact-us"
            style={{
              textDecoration: 'none',
              color: 'white',
              padding: '1em',
              fontSize: '1.2rem'
            }}
          >
            Contact Us
          </Link>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-services" element={<OurServicesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </AppBar>
  );
}

function Logo() {
  const location = useLocation();

  if (location.pathname !== '/') {
    return (
      <Link to="/">
        <Box
          component="img"
          src={logoMobile}
          alt="Fullard Boat Co Logo"
          sx={{
            height: '1.5em',
            margin: '3.2em 0em -6em 2em',
            position: 'absolute',
            display: 'flex',
          }}
        />
      </Link>
    );
  }
  return null;
}

export default App;