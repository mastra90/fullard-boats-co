import { Box, Card, Typography } from "@mui/material";
import homeBg from "../assets/homebg.png";
import waves from "../assets/waves.svg";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";
import HoursLocations from "../components/contact us/HoursLocations";
import AboutUsPage from "./AboutUsPage";
import OurServicesPage from "./OurServicesPage";

const HomePage = () => {
  const tagLines = [
    "Modern,",
    "Traditional,",
    "Boat Building.",
    "Check out our services! >",
  ];

  const tagContainerStyle = () => {
    return {
      p: {
        xs: 2,
        sm: 8,
        md: 12,
      },

      pt: {
        xs: 0,
        sm: 0,
        md: 6,
      },
    };
  };

  const tagStyle = (tagLine) => {
    const isCTA = tagLine === tagLines.slice(-1)[0];
    return {
      mt: isCTA ? 4 : 0,
      fontSize: isCTA
        ? {
            xs: 20,
            sm: 24,
            md: 32,
          }
        : {
            xs: 40,
            sm: 56,
            md: 108,
          },
    };
  };

  const LandingImage = ({ source }) => {
    return (
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "inherit",
            height: "60em",
            backgroundImage: `url(${source})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -10,
            backgroundAttachment: "fixed",
          }}
        />
      </Box>
    );
  };

  const tagAnimations = (key, tagLine) => {
    const isCTA = tagLine === tagLines.slice(-1)[0];
    const delay = 500 + key * 500;
    const easeIn = isCTA ? 400 : 200;
    const animation = isCTA
      ? `slideInFromLeft ${easeIn}ms ease-in ${delay}ms forwards`
      : `fadeIn ${easeIn}ms ease-in ${delay}ms forwards`;

    return {
      opacity: 0,
      animation: animation,
      "@keyframes fadeIn": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      "@keyframes slideInFromLeft": {
        from: {
          opacity: 0,
          transform: "translateX(-100%)",
        },
        to: {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
    };
  };

  const logoImageStyle = () => {
    return {
      width: {
        xs: 240,
        sm: 360,
        md: 600,
      },
      mt: {
        xs: 0,
        sm: -4,
        md: -8,
      },
      ml: {
        xs: 1,
        sm: 3.5,
        md: 4.5,
      },
      opacity: 0,
      // animation: "fadeIn 200ms ease-in 2400ms forwards",
      display: { xs: "none", sm: "inherit" },
    };
  };

  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: -9,
          width: "100%",
          minHeight: "50vh",
        }}
      >
        <Box
          component="img"
          src={waves}
          alt="waves"
          sx={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            zIndex: -9,
          }}
        />

        <LandingImage source={homeBg} />
      </Box>
      
      {/* Single NavBar component that includes both primary and secondary navbars */}
      <NavBar />
      
      <Box>
        {tagLines && (
          <Box sx={tagContainerStyle}>
            {tagLines.map((tagLine, key) => {
              const isCTA = tagLine === tagLines.slice(-1)[0];
              return (
                <Typography
                  variant="h1"
                  key={key}
                  sx={{
                    ...tagAnimations(key, tagLine),
                    ...tagStyle(tagLine),
                    "&:hover": isCTA && {
                      textDecoration: "underline",
                      textUnderlineOffset: { xs: "inherit", md: 12 },
                    },
                  }}
                >
                  {!isCTA && tagLine}
                  {isCTA && (
                    <Link
                      to="/our-services"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {tagLine}
                    </Link>
                  )}
                </Typography>
              );
            })}
          </Box>
        )}
        <Box
          component="img"
          src={logo}
          alt="FullardBoatsCo logo"
          sx={logoImageStyle}
        />
      </Box>
      <Box>
        <AboutUsPage />
        <OurServicesPage />
      </Box>
    </Box>
  );
};

export default HomePage;