import { Card, Box, Typography } from "@mui/material";
import PageHeaders from "../components/PageHeaders";
import CardTitles from "../components/CardTitles";
import will from "../assets/will.png";
import kelly from "../assets/kelly.png";
import aidan from "../assets/aidan.png";
import theme from "../theme";
import NavBar from "../components/NavBar";

const blurbs = {
  will: "Will is a qualified shipwright who began working in the boat building industry in 2007. He has worked as a shipwright on various projects from the restoration of a traditional timber tall ship, to modern composite new build yacht tenders both here in Australia and in the UK.",
  kelly:
    "Kelly is the Operations Manager. She plays the 'behind the scenes' role and handles everything from administration to accounts and much more.",
  aidan:
    "Aidan joined the Fullard Boat Co family as a school-based apprentice in 2021, whilst also completing his VCE. He has now finished his VCE and is a full time apprentice. He has a fantastic work ethic and we look forward to watching him grow and develop throughout the rest of his apprenticeship and beyond.",
};

const teamMembers = [
  {
    name: "Will Fullard",
    image: will,
    color: theme.palette.text.blue,
    blurb: blurbs.will,
  },
  {
    name: "Kelly Fullard",
    image: kelly,
    color: theme.palette.text.green,
    blurb: blurbs.kelly,
  },
  {
    name: "Aidan Kell",
    image: aidan,
    color: theme.palette.text.pink,
    blurb: blurbs.aidan,
  },
];

const CardImage = ({ source, alt }) => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <img
        src={source}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </Box>
  );
};

const AboutUsPage = () => {
  return (
    <>
      <NavBar />
      <PageHeaders
        title="Navigating Excellence."
        subtitle="Your Journey Starts with Our Craftsmanship."
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontSize={20}
          sx={{
            borderRadius: 2,
            maxWidth: 1000,
            mt: {
              xs: 4,
              sm: 4,
              md: 2,
            },
            mb: {
              xs: 2,
              sm: 2,
              md: 4,
            },
            mx: 2,
            p: 2,
            bgcolor: {
              xs: theme.palette.text.dark,
              sm: theme.palette.text.dark,
              md: "inherit",
            },
          }}
        >
          Established in 2018, Fullard Boat Co is a family-run business based
          around the Gippsland Lakes in Victoria. We offer a comprehensive
          service for all wooden and fibreglass boats, specialising in both
          timber and fibreglass repairs, restorations and new builds.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            maxWidth: 800,
            my: {
              xs: 2,
              sm: 2,
              md: 4,
            },
            mb: 4,
            color: theme.palette.text.dark,
          }}
        >
          Our Team
        </Typography>
      </Box>
      <Box
        sx={{
          m: 2,
          gap: 2,
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
        }}
      >
        {teamMembers.map((member, key) => (
          <Card
            key={key}
            sx={{
              width: { xs: "100%", sm: "100%", md: 432 },
            }}
          >
            <CardImage source={member.image} alt={member.name} />
            <Box sx={{ p: 4 }}>
              <CardTitles title={member.name} color={member.color} />
              <Typography>{member.blurb}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default AboutUsPage;
