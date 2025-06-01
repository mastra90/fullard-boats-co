import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Menu as MenuIcon,
  Construction,
  ContactPage,
  Person,
  Home,
  FacebookOutlined,
  Instagram,
  Phone,
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
  Typography,
} from "@mui/material";
import logo from "../assets/logo_for_nav.png";

const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { text: "Home", icon: <Home />, route: "/" },
    { text: "About Us", icon: <Person />, route: "/about-us" },
    { text: "Our Services", icon: <Construction />, route: "/our-services" },
    { text: "Contact Us", icon: <ContactPage />, route: "/contact-us" },
  ];

  const logoImageStyle = () => {
    return {
      width: 160,

      opacity: 1,
      // opacity: 0,
      // animation: "fadeIn 200ms ease-in 2400ms forwards",
      display: { xs: "none", sm: "inherit" },
    };
  };

  const NavTop = () => {
    const SocialButtons = () => {
      const socialLinks = [
        {
          url: "https://www.facebook.com/FullardBoats",
          icon: <FacebookOutlined sx={{ fontSize: 40, ml: 2 }} />,
          key: "facebook",
        },
        {
          url: "https://www.instagram.com/fullardboatco/",
          icon: <Instagram sx={{ fontSize: 40 }} />,
          key: "instagram",
        },
      ];

      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
          }}
        >
          {socialLinks.map((social) => (
            <IconButton
              key={social.key}
              component={RouterLink}
              to={social.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#FF6B6B",
                transition: "color 250ms ease",
                "&:hover": {
                  color: "#f2f2f2",
                },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      );
    };

    const NavPhoneIcon = () => {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
          }}
        >
          <IconButton
            component="a"
            href="tel:0434819553"
            disableRipple
            sx={{
              mr: 2,
              color: "#f2f2f2",
              transition: "color 250ms ease",
              "&:hover": {
                color: "#FF6B6B",
              },
            }}
          >
            <Phone sx={{ fontSize: 40, mr: 2 }} />
            <Typography fontSize={"large"}>0434 819 553</Typography>
          </IconButton>
        </Box>
      );
    };

    return (
      <Toolbar
        disableGutters
        sx={{
          bgcolor: "#0e2132",
          position: "sticky",
          top: 0,
          zIndex: 20,
          borderBottom: "1px solid #394d5b",
          height: 90,
        }}
      >
        <SocialButtons />
        <NavPhoneIcon />
      </Toolbar>
    );
  };

  const MobileNavButton = () => {
    return (
      <IconButton
        disableRipple
        onClick={toggleMenu}
        sx={{
          m: 1,
          p: 1,
          display: { xs: "flex", md: "none" },
          position: "absolute",
          right: 0,
        }}
      >
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
    );
  };

  return (
    <>
      <NavTop />
      <Toolbar
        sx={{
          position: "sticky",
          top: 90,
          zIndex: 10,
          bgcolor: "#0e2132",
          height: 120,

          boxShadow: "0em 0em 4em 0em #1d3243",
        }}
      >
        <MobileNavButton />
        <Box
          component="img"
          src={logo}
          alt="FullardBoatsCo logo"
          sx={logoImageStyle}
        />
        {/* Menu items */}
        <Box
          component="nav"
          sx={{
            display: { xs: "none", md: "flex" },
            margin: "auto",
            gap: 8,
          }}
        >
          {menuItems.map((item) => (
            <IconButton
              disableRipple
              key={item.text}
              component={RouterLink}
              to={item.route}
              sx={{
                fontWeight: location.pathname === item.route ? 600 : 500,
                fontSize: 20,
                borderRadius: 1,
                "&:hover": {
                  color: "#FF6B6B",
                },
                color: location.pathname === item.route ? "#FF6B6B" : "inherit",
                textUnderlineOffset: 8,
              }}
            >
              {item.text}
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </>
  );
};

export default NavBar;
