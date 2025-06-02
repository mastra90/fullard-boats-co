import { Box, Button, Typography } from "@mui/material";
import homeBg from "../assets/homebg.png";
import waves from "../assets/waves2.svg";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import AboutUsPage from "./AboutUsPage";
import OurServicesPage from "./OurServicesPage";

const HomePage = () => {
  const tagLines = ["Modern,", "Traditional,", "Boat Building."];

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
        md: 16,
      },
    };
  };

  const HeroImage = ({ source }) => {
    return (
      <Box
        sx={{
          position: "absolute",
          zIndex: -9,
          width: "100%",
          minHeight: "90vh",
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
        <Box
          sx={{
            position: "relative",
            height: "98vh",
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

  const tagAnimations = (key: number) => {
    const delay = 500 + key * 500;
    const easeIn = 200;
    const animation = `fadeIn ${easeIn}ms ease-in ${delay}ms forwards`;
    return {
      opacity: 0,
      animation: animation,
      "@keyframes fadeIn": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    };
  };

  const OurServicesButton = () => (
    <Button
      sx={{
        fontSize: 24,
        ml: 12,
        mt: -12,
        px: 5,
        py: 1.5,
        borderRadius: 3,
        fontWeight: 600,
        bgcolor: "#ff6b6a",
        opacity: 0,
        animation: `slideInFromLeft 200ms ease-in 2000ms forwards`,
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
        "&:hover": {
          bgcolor: "#f2f2f2",
        },
      }}
    >
      <Link
        style={{ textDecoration: "none", color: "#0e2132" }}
        to={"/our-services"}
      >
        Our Services
      </Link>
    </Button>
  );

  const TagLines = () => (
    <>
      {tagLines && (
        <Box sx={tagContainerStyle}>
          {tagLines.map((tagLine, key) => {
            return (
              <Typography variant="h1" key={key} sx={{ ...tagAnimations(key) }}>
                {tagLine}
              </Typography>
            );
          })}
        </Box>
      )}
      <OurServicesButton />
    </>
  );

  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        <HeroImage source={homeBg} />
        <NavBar />
        <TagLines />
      </Box>
      <AboutUsPage />
      <OurServicesPage />
    </>
  );
};

export default HomePage;
