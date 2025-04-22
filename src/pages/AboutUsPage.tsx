import { Card, Box } from "@mui/material";
import PageHeaders from "../components/PageHeaders";
import { AidanCard, KellyCard, WillCard } from "../components/TeamMembersCards";

const cards = [<WillCard />, <KellyCard />, <AidanCard />];

const AboutUsPage = () => {
  return (
    <>
      <PageHeaders
        title="Navigating Excellence."
        subtitle="Your Journey Starts with Our Craftsmanship."
      />
      <Box
        sx={{
          m: 2,
          gap: 2,
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
        }}
      >
        {cards.map((cards, key) => (
          <Card
            key={key}
            sx={{
              p: 2,
              height: 800,
              width: { md: "100%", lg: 400 },
            }}
          >
            {cards}
          </Card>
        ))}
      </Box>
    </>
  );
};

export default AboutUsPage;
