import { Box, List, ListItem, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const HoursLocations = () => {
  const openingHours = ["8:00am - 4:30pm", "Monday - Friday"];

  const serviceLocations = [
    "Metung, VIC",
    "Bairnsdale, VIC",
    "Paynesville, VIC",
    "Lakes Entrance, VIC",
  ];
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isContactPage = location.pathname === "/contact-us";

  const fontSizes = () => {
    return {
      fontSize: {
        xs: isHomePage ? 12 : 16,
        sm: isHomePage ? 20 : 16,
        md: isHomePage ? 24 : 18,
      },
    };
  };

  return (
    <>
      <Box
        sx={{
          display: {
            xs: "inherit",
            sm: isHomePage ? "inherit" : "flex",
            md: isHomePage ? "inherit" : "flex",
          },
          ...fontSizes(),
        }}
      >
        <Box
          sx={{
            flex: 1,
            ...fontSizes(),
          }}
        >
          <Typography
            variant={isHomePage ? "h5" : "h6"}
            sx={{
              flex: 1,
              ...fontSizes(),
            }}
          >
            Opening Hours
          </Typography>
          {openingHours.map((hours, index) => (
            <List
              key={index}
              sx={{
                p: 0,
                m: 0,
                listStyleType: hours.startsWith("*") ? "none" : "disc",
              }}
            >
              <ListItem
                sx={{
                  p: 0,
                  ml: { xs: isContactPage ? 3 : 2, sm: isContactPage ? 3 : 4 },
                  display: "list-item",
                  fontStyle: hours.startsWith("*") ? "italic" : "inherit",
                }}
              >
                {hours}
              </ListItem>
            </List>
          ))}
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 14, md: isHomePage ? 20 : 16 },
              ml: { xs: isContactPage ? 1 : 0.5, sm: 1, md: 1 },
              color: "#999999",
            }}
          >
            <i>Excludes public holidays</i>
          </Typography>
        </Box>
        <Box>
          <Typography
            variant={isHomePage ? "h5" : "h6"}
            sx={{
              mt: {
                xs: 1,
                sm: isHomePage ? 4 : 0,
                md: isHomePage ? 4 : 0,
              },
              ...fontSizes(),
            }}
          >
            Service Locations
          </Typography>
          {serviceLocations.map((locations, index) => (
            <List
              key={index}
              sx={{
                listStyleType: "disc",
                p: 0,
                m: 0,
              }}
            >
              <ListItem
                sx={{
                  p: 0,
                  ml: { xs: isContactPage ? 3 : 2, sm: isContactPage ? 3 : 4 },
                  display: "list-item",
                }}
              >
                {locations}
              </ListItem>
            </List>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default HoursLocations;
