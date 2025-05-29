import { Box, Link, Typography } from "@mui/material";
import CardTitles from "../CardTitles";
import theme from "../../theme";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import HoursLocations from "./HoursLocations";

const headings = [
  {
    icon: <FacebookIcon sx={{ mr: 2 }} />,
    text: (
      <>
        <Link
          href="https://www.facebook.com/FullardBoats"
          target="_blank"
          rel="noopener noreferrer"
          id="facebook-link"
        >
          facebook
        </Link>
      </>
    ),
  },
  {
    icon: <InstagramIcon sx={{ mr: 2 }} />,
    text: (
      <>
        <Link
          href="https://www.instagram.com/fullardboatco/"
          target="_blank"
          rel="noopener noreferrer"
          id="instagram-link"
        >
          instagram
        </Link>
      </>
    ),
  },
  {
    icon: <PhoneIcon sx={{ mr: 2 }} />,
    text: "0434 819 553",
  },
  {
    icon: <EmailIcon sx={{ mr: 2 }} />,
    text: "office@fullardboatco.com",
  },
];

const ContactDetailsCard = () => {
  return (
    <>
      <Box sx={{ position: "relative", p: 2, flexDirection: "row" }}>
        <CardTitles title={"Our Details"} color={theme.palette.text.pink} />

        <Box sx={{ mt: 1, mb: -1 }}>
          {headings.map((heading, key) => (
            <Typography
              key={key}
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                fontSize: {
                  xs: 16,
                  sm: 20,
                  md: 20,
                },
              }}
            >
              {heading.icon}
              {heading.text}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ p: 1 }}>
        <HoursLocations />
      </Box>
    </>
  );
};

export default ContactDetailsCard;
