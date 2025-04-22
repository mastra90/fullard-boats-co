import { Card, Box } from "@mui/material";
import PageHeaders from "../components/PageHeaders";
import ContactDetailsCard from "../components/ContactDetailsCard";
import ContactFormCard from "../components/ContactFormCard";

const cards = [<ContactDetailsCard />, <ContactFormCard />];

const ContactPage = () => {
  return (
    <>
      <PageHeaders title="Reach Out." subtitle="We're Here To Help." />
      <Box
        sx={{
          m: 2,
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
              p: 2,
              height: 800,
              width: { xs: "100%", md: 400 },
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
