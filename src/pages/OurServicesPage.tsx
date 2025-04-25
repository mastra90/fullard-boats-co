import { Card, Box, CardContent } from "@mui/material";
import OurServicesCard from "../components/OurServicesCard";
import FaqCard from "../components/FaqCard";
import PageHeaders from "../components/PageHeaders";

const cards = [
  {
    content: <OurServicesCard />,
    width: 440,
  },
  {
    content: <FaqCard />,
    width: 1000,
  },
];

const OurServicesPage = () => {
  return (
    <>
      <PageHeaders
        title="Hands-On Expertise:"
        subtitle="Where Our Services Exceed Your Aspirations."
      />
      <Box
        sx={{
          m: 2,
          gap: 2,
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {cards.map((card, key) => (
          <Card
            key={key}
            sx={{
              height: "fit-content",
              width: { xs: "100%", md: card.width },
            }}
          >
            <CardContent
              sx={{
                "&:last-child": {
                  p: 0,
                },
              }}
            >
              {card.content}
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default OurServicesPage;
