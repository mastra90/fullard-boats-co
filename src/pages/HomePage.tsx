import { Box, Button, Typography } from "@mui/material";
import homeBg from "../assets/homebg.png";
import waves from "../assets/waves2.svg";
import { Link } from "react-router-dom";
import OurServicesCards from "../components/our Services/OurServicesCards";

const HomePage = () => {
  const tagLines = ["Modern,", "Traditional,", "Boat Building."];

  const HeroImage = ({ source }) => {
    return (
      <Box
        sx={{
          position: "absolute",
          zIndex: -9,
          width: "100%",
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
            mb: -1,
            px: 0,
          }}
        />
        <Box
          sx={{
            position: "relative",
            height: "98vh",
            maxHeight: { xs: "50vh", sm: "50vh", md: "80vh" },
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
        fontSize: {
          xs: 16,
          sm: 16,
          md: 20,
        },
        ml: {
          xs: 2,
          sm: 4,
          md: 12,
        },
        mt: {
          xs: 0,
          sm: -2,
          md: -12,
        },
        px: 2,
        py: 1,
        borderRadius: 2,
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
        <Box
          sx={{
            p: {
              xs: 2,
              sm: 4,
              md: 12,
            },
            pt: 0,
          }}
        >
          {tagLines.map((tagLine, key) => {
            return (
              <Typography
                variant="h1"
                key={key}
                sx={{
                  ...tagAnimations(key),
                  fontSize: { xs: 40, sm: 64, md: 96 },
                }}
              >
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
    <Box>
      <Box sx={{ minHeight: { xs: "60vh", sm: "60vh", md: "85vh" } }}>
        <HeroImage source={homeBg} />
        <TagLines />
      </Box>
      <OurServicesCards />
    </Box>
  );
};

export default HomePage;
