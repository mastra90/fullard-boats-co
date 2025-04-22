import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Menu as MenuIcon,
  Construction,
  ContactPage,
  Person,
  Sailing,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const NavBar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isHomePage = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { text: "About Us", icon: <Person />, route: "/about-us" },
    { text: "Our Services", icon: <Construction />, route: "/our-services" },
    { text: "Contact Us", icon: <ContactPage />, route: "/contact-us" },
  ];

  const TopBackground = () => {
    return (
      <Box
        sx={{
          bgcolor: theme.palette.background.nav,
          width: "100%",
          height: 700,
          position: "absolute",
          zIndex: -10,
        }}
      />
    );
  };

  const HomeIcon = () => {
    if (isHomePage) return null;
    return (
      <Tooltip title="Navigate home">
        <IconButton to="/" component={RouterLink} sx={{ m: 1, p: 1 }}>
          <Sailing fontSize="large" />
        </IconButton>
      </Tooltip>
    );
  };

  if (isHomePage) return null;

  return (
    <Toolbar disableGutters>
      <TopBackground />
      <HomeIcon />
      {isMobile ? (
        <IconButton disableRipple onClick={toggleMenu} sx={{ m: 1, p: 1 }}>
          <MenuIcon sx={{ fontSize: 32 }} />
          <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
            <List sx={{ width: 200 }}>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton component={RouterLink} to={item.route}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </IconButton>
      ) : (
        <Box
          component="nav"
          sx={{
            display: "flex",
            gap: 2,
            mr: 2,
          }}
        >
          {menuItems.map((item) => (
            <IconButton
              disableRipple
              key={item.text}
              component={RouterLink}
              to={item.route}
              sx={{
                fontWeight: 500,
                fontSize: 20,
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: "#6c7175",
                },
                textDecoration:
                  location.pathname === item.route ? "underline" : "none",
                textUnderlineOffset: 8,
              }}
            >
              {item.text}
            </IconButton>
          ))}
        </Box>
      )}
    </Toolbar>
  );
};

export default NavBar;
