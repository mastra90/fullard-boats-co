import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import navHomeIcon from '../assets/logo-mobile.svg';
import { Box, Drawer, IconButton, Toolbar, Tooltip, useMediaQuery, useTheme, } from "@mui/material"


const NavBar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isDesktop = useMediaQuery(theme.breakpoints.down('md'));
  const isHomePage = (location.pathname === '/')
  const navHomeTooltipText = 'Navigate home'

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const HomeIcon = () => {
    return (
      <Link to="/">
        <Tooltip title={navHomeTooltipText}>
          <Box
            component="img"
            src={navHomeIcon}
            alt={navHomeTooltipText}
            sx={{
              m: 4,
              height: 24,
              zIndex: 200,
              position: 'absolute',
            }}
          />
        </Tooltip>
      </Link>
    );
  }

  const MobileMenu = () => {
    return (
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
            onClick={toggleMenu}
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
    )
  }

  return (
    <Toolbar>
      {!isHomePage && <HomeIcon />}
      
        <Box sx={{ flexGrow: 1 }} />
        {isDesktop ? (
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
      
      <MobileMenu />
      </Toolbar>
  )
}

export default NavBar;