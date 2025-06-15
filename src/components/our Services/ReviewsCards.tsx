import {
  Construction,
  DirectionsBoat,
  Person,
  Star,
} from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import theme from "../../theme";

const ReviewsCards = () => {
  const Stars = () => {
    return (
      <>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </>
    );
  };
  const services = [
    {
      title: "Paul Martin",
      icon: (
        <Construction
          sx={{
            fontSize: {
              xs: 32,
              sm: 60,
            },
          }}
        />
      ),
      description:
        "I have engaged Fullard Boat Co on a number of occasions. From advice and support in restorations (which has been spot on), or for repairs (timely and on budget) I can honestly recommend Will, Kelly and the team.",
    },
    {
      title: "David Griffiths",
      icon: (
        <DirectionsBoat
          sx={{
            fontSize: {
              xs: 32,
              sm: 60,
            },
          }}
        />
      ),
      description:
        "Will delivers a top quality finish at a reasonable price and in a timely manner. He is committed to doing his best to work with the customer and achieve a product/result that meets or exceeds the customers expectations.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#061828", mt: 12, pb: 36 }}>
      <Typography
        variant="h3"
        sx={{
          m: "auto",
          p: 2,
          pt: 6,
          maxWidth: "100rem",
          color: "#FEF6EF",
        }}
      >
        Our clients love us!
      </Typography>
      <Box
        sx={{
          p: 2,
          m: "auto",
          my: 2,
          gap: 2,
          maxWidth: "100rem",
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          },

          justifyContent: "center",
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            sx={{
              height: "100%",
              width: "100%",
              border: 1,
              borderColor: "#394d5b",
              p: {
                xs: 1,
                sm: 3,
              },
              bgcolor: "#FEF6EF",
              color: theme.palette.background.default,
              zIndex: 20,
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  display: "flex",
                  fontSize: {
                    xs: 20,
                    sm: 24,
                  },
                  fontWeight: 600,
                  my: {
                    xs: 1,
                    sm: 2,
                  },
                }}
              >
                <Person sx={{ fontSize: 36, mr: 2 }} />
                {service.title}
              </Typography>
              <Stars />
              <Typography
                sx={{
                  mt: 1,
                }}
              >
                "{service.description}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewsCards;
