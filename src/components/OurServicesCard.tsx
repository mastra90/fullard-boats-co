import { Box, List, ListItem } from '@mui/material';

const OurServicesCard = () => {

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
    "Complete Boat Management"
  ];
  return (
    <Box>
      Our Services
      {services && (
        <List>
          {services.map((service, index) => (
            <ListItem key={index}>{service}</ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default OurServicesCard;