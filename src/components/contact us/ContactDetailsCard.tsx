import { Box, Link, List, ListItem, Typography } from "@mui/material";
import CardTitles from "../CardTitles";
import theme from "../../theme";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

const headings = [
  {
    icon: <PhoneIcon sx={{ mr: 2 }} />,
    text: "0434 819 553",
  },
  {
    icon: <EmailIcon sx={{ mr: 2 }} />,
    text: "office@fullardboatco.com",
  },
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
          facebook.com/FullardBoatCo
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
          id="facebook-link"
        >
          instagram.com/fullardboatco
        </Link>
      </>
    ),
  },
];

const details = [
  "8:00am - 4:30pm",
  "Monday - Friday",
  "*Excluding public holidays",
  "_",
  "Metung, VIC",
  "Bairnsdale, VIC",
  "Paynesville, VIC",
  "Lakes Entrance, VIC",
];

const ContactDetailsCard = () => {
  return (
    <Box sx={{ position: "relative", p: 2 }}>
      <CardTitles title={"Our Details"} color={theme.palette.text.pink} />

      <Box sx={{ mt: 1, mb: 3 }}>
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

      <Box>
        <Typography variant="h6">Opening Hours</Typography>
        <Box>
          {details.map((detail, index) => {
            if (detail === "_") {
              return (
                <Typography key={index} variant="h6" sx={{ mt: 2 }}>
                  Service Locations
                </Typography>
              );
            }
            return (
              <List
                key={index}
                sx={{
                  listStyleType: detail.startsWith("*") ? "default" : "disc",
                  p: 0,
                }}
              >
                <ListItem
                  sx={{
                    p: 0,
                    ml: detail.startsWith("*") ? 0 : 2,
                    display: "list-item",
                    fontStyle: detail.startsWith("*") ? "italic" : "inherit",
                  }}
                >
                  {detail}
                </ListItem>
              </List>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetailsCard;
