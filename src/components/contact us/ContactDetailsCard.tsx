import { Box, Link, Typography } from "@mui/material";
import CardTitles from "../CardTitles";
import theme from "../../theme";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";

const ContactDetailsCard = () => {
  return (
    <Box sx={{ position: "relative", p: 2 }}>
      <CardTitles title={"Our Details"} color={theme.palette.text.pink} />
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            fontSize: {
              xs: 16,
              sm: 24,
              md: 24,
            },
          }}
        >
          <PhoneIcon sx={{ mr: 2 }} /> 0434 819 553
        </Typography>

        <Typography
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            fontSize: {
              xs: 16,
              sm: 24,
              md: 24,
            },
          }}
        >
          <EmailIcon sx={{ mr: 2 }} /> office@fullardboatco.com
        </Typography>

        <Link
          href="https://www.facebook.com/FullardBoats"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: "none",
            color: "text.primary",
          }}
          id="facebook-link"
        >
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              fontSize: {
                xs: 16,
                sm: 24,
                md: 24,
              },
            }}
          >
            <FacebookIcon sx={{ mr: 2 }} /> facebook.com/FullardBoatCo
          </Typography>
        </Link>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Opening Hours
        </Typography>
        <Typography>8:00am - 4:30pm</Typography>
        <Typography>Monday - Friday</Typography>
        <Typography sx={{ fontStyle: "italic", mb: 2 }}>
          *Excluding public holidays
        </Typography>

        <Typography variant="h6" sx={{ mb: 1 }}>
          Service Locations
        </Typography>
        <Box component="ul" sx={{ pl: 2, m: 0 }}>
          <Typography component="li">Metung, VIC</Typography>
          <Typography component="li">Bairnsdale, VIC</Typography>
          <Typography component="li">Paynesville, VIC</Typography>
          <Typography component="li">Lakes Entrance, VIC</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetailsCard;
