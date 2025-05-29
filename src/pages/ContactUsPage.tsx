import { Card, Box } from "@mui/material";
import PageHeaders from "../components/PageHeaders";
import ContactDetailsCard from "../components/contact us/ContactDetailsCard";
import ContactFormCard from "../components/contact us/ContactFormCard";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

const cards = [<ContactDetailsCard />, <ContactFormCard />];

const ContactPage = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <NavBar />
      <PageHeaders title="Reach Out." subtitle="We're Here To Help." />
      <Box
        sx={{
          m: 2,
          mt: 6,
          gap: 2,
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {cards.map((cards, key) => (
          <Card
            key={key}
            sx={{
              margin: { xs: 0, sm: "auto", md: 0 },
              height: "fit-content",
              width: { xs: "100%", sm: 480, md: 480 },
              p: !isHomePage && { xs: 1, sm: 2 },
            }}
          >
            {cards}
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ContactPage;
