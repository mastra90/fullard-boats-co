import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, Construction, ContactPage, Person, Sailing } from '@mui/icons-material';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Tooltip, useMediaQuery, useTheme, } from "@mui/material";

const NavBar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isHomePage = (location.pathname === '/');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { text: 'About Us', icon: <Person />, route: '/about-us' },
    { text: 'Our Services', icon: <Construction />, route: '/our-services' },
    { text: 'Contact Us', icon: <ContactPage />, route: '/contact-us' }
  ];

  const HomeIcon = () => {
    if (isHomePage) return null;
    return (
      <Tooltip title='Navigate home'>
        <IconButton
          to="/"
          component={Link}
          color="inherit"
        >
          <Sailing sx={{ fontSize: 32 }} />
        </IconButton>
      </Tooltip>
    );
  };

  const NavDrawer = () => {
    const DrawerList = (
      <Box sx={{ width: 250 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.route}>
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    );

    return (
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={toggleMenu}
      >
        {DrawerList}
      </Drawer>
    );
  };

  if (isHomePage) return null;

  return (
    <>
      <Box sx={{ bgcolor: theme.palette.primary.main, width: '100%', height: 400, position: 'absolute', zIndex: -10000 }} />
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <HomeIcon />
        {isMobile ? (
          <IconButton
            color="inherit"
            onClick={toggleMenu}
          >
            <MenuIcon sx={{ fontSize: 32 }} />
            <NavDrawer />
          </IconButton>
        ) : (
          <Box
            component="nav"
            sx={{
              display: 'flex',
              gap: 4,
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.route}
                style={{
                  textDecoration: 'none',
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  fontSize: 20
                }}
              >
                {item.text}
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </>
  );
};

export default NavBar;