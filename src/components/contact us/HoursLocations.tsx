import { Box, List, ListItem, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const HoursLocations = () => {
  const openingHours = [
    "8:00am - 4:30pm",
    "Monday - Friday",
    "*Excluding public holidays",
  ];

  const serviceLocations = [
    "Metung, VIC",
    "Bairnsdale, VIC",
    "Paynesville, VIC",
    "Lakes Entrance, VIC",
  ];
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
                  ml: hours.startsWith("*") ? 0 : 2,
                  display: "list-item",
                  fontStyle: hours.startsWith("*") ? "italic" : "inherit",
                }}
              >
                {hours}
              </ListItem>
            </List>
          ))}
        </Box>
        <Box>
          <Typography
            variant={isHomePage ? "h5" : "h6"}
            sx={{
              mt: {
                xs: 2,
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
                  ml: 2,
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
