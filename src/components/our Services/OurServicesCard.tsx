import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import brush from "../../assets/brush.png";
import CardImage from "../CardImage";
import CardTitles from "../CardTitles";

const OurServicesCard = () => {
  const theme = useTheme();
  const services = [
    "Traditional Timber Shipwrighting",
    "Fibreglass Repairs",
    "Bespoke Cabinetry and Joinery",
    "Bow and Stern Thruster Installation",
    "Gel Coat Repairs",
    "Perspex Window Installation",
    "Custom Parts",
    "Teak Decking Restoration, Replacement and Rebuilds",
    "Antifouling and Maintenance",
    "Restorations",
    "Complete Boat Management",
  ];

  return (
    <>
      <CardImage source={brush} height={190} position={"absolute"} />
      <Box sx={{ position: "relative", p: 4 }}>
        <CardTitles title={"Our Services"} color={theme.palette.text.blue} />
        <Typography sx={{ my: 2 }}>
          At Fullard Boat Co we offer a wide range of services. We have built a
          solid reputation and pride ourselves on our attention to detail and
          high-quality finishes at competitive prices. The services we offer
          include:
        </Typography>
        {services && (
          <List sx={{ listStyleType: "disc", pt: 2 }}>
            {services.map((service, index) => (
              <ListItem key={index} sx={{ p: 0, ml: 2, display: "list-item" }}>
                {service}
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </>
  );
};

export default OurServicesCard;
