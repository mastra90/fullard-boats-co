import { Card, Box } from "@mui/material";
import PageHeaders from "../components/PageHeaders";
import ContactDetailsCard from "../components/contact us/ContactDetailsCard";
import ContactFormCard from "../components/contact us/ContactFormCard";

const cards = [<ContactDetailsCard />, <ContactFormCard />];

const ContactPage = () => {
  return (
    <>
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
              height: "fit-content",
              width: { xs: "100%", md: 480 },
              p: 2,
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
