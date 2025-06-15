import {
  Construction,
  DirectionsBoat,
  Engineering,
  HomeRepairService,
  Restore,
  Sailing,
} from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import theme from "../../theme";

const OurServicesCards = () => {
  const CardIconStyle = () => {
    return {
      fontSize: 60,
      mt: -4,
      ml: 4,
      border: 2,
      borderRadius: 100,
      p: 1,
      bgcolor: theme.palette.background.default,
      position: "absolute",
    };
  };

  const services = [
    {
      title: "Traditional Timber Shipwrighting",
      icon: <DirectionsBoat sx={CardIconStyle} />,
      description:
        "Handcrafted wooden boats built using time-honored techniques and premium marine-grade timber for lasting beauty and performance.",
    },
    {
      title: "Fibreglass Repairs",
      icon: <Construction sx={CardIconStyle} />,
      description:
        "Expert gel coat repairs, hull damage fixes, and structural reinforcement to restore your boat's integrity and appearance.",
    },
    {
      title: "Bespoke Cabinetry & Joinery",
      icon: <HomeRepairService sx={CardIconStyle} />,
      description:
        "Custom marine woodwork including galley cabinets, navigation stations, and storage solutions tailored to your vessel's unique requirements.",
    },
    {
      title: "Bow and Stern Thruster Installation",
      icon: <Engineering sx={CardIconStyle} />,
      description:
        "Professional installation of bow and stern thrusters to enhance maneuverability and docking confidence in tight spaces.",
    },
    {
      title: "Antifouling and Maintenance",
      icon: <Sailing sx={CardIconStyle} />,
      description:
        "Complete hull cleaning, antifouling application, and seasonal maintenance services to keep your boat in optimal condition.",
    },
    {
      title: "Restorations",
      icon: <Restore sx={CardIconStyle} />,
      description:
        "Full restoration services bringing classic and vintage boats back to their original glory with authentic materials and craftsmanship.",
    },
  ];

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 2,
          mt: -1,
          color: "#FF6B6B",
        }}
      >
        Our Top Services
      </Typography>
      <Typography
        // variant="h4"
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: 820,
          m: "auto",
          px: 2,
          textAlign: "center",
        }}
      >
        At Fullard Boat Co we offer a wide range of boat building services. We
        have built a solid reputation and pride ourselves on our attention to
        detail and high-quality finishes at competitive prices. Here are some of
        the services we offer.
      </Typography>

      <Box
        sx={{
          p: 2,
          m: "auto",
          mt: 2,
          gap: 2,
          maxWidth: "100rem",
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gridTemplateRows: "repeat(2, 1fr)",
          justifyContent: "center",
        }}
      >
        {services.map((service, index) => (
          <Card sx={{ boxShadow: "none", mt: 6 }}>
            {service.icon}

            <Card
              key={index}
              sx={{
                height: "100%",
                width: "100%",
                border: 1,
                borderColor: "#394d5b",
                p: {
                  xs: 1,
                  sm: 3,
                },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: 20,
                      sm: 24,
                    },
                    fontWeight: 600,
                    my: {
                      xs: 1,
                      sm: 2,
                    },
                  }}
                >
                  {service.title}
                </Typography>
                <Typography>{service.description}</Typography>
              </CardContent>
            </Card>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default OurServicesCards;
