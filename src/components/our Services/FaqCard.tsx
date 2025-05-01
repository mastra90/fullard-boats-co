import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import CardImage from "../CardImage";
import water from "../../assets/water.png";
import CardTitles from "../CardTitles";

const FaqCard = () => {
  const theme = useTheme();
  const faqs = [
    {
      question: "Where is your workshop located?",
      answer:
        "We are a mobile business, which means we can come to your boat to complete work. We can also complete work on your boat at one of the many local facilities if required. We do have a machine shop where we can fabricate parts and work on some projects, but we don't have a conventional shop front.",
    },
    {
      question: "Can you come to my boat to do the work?",
      answer:
        "Being a mobile business, we come to your boat and do most types of work on location without you needing to move your boat anywhere. There is however, a few different types of work that can't be done over water in the Gippsland Lakes. If this is the case, we can work with you to organise the work to be completed at one of the facilities in the local area.",
    },
    {
      question: "What facilities can you work out of?",
      answer:
        "We can organise to complete work on your vessel at the Paynesville & Bullock Island Gippsland Ports Facilities, as well as a number of smaller private boat yards and workshops around the area.",
    },
    {
      question:
        "My job needs you to work with other trades. Can you organise everything?",
      answer:
        "We offer a comprehensive and complete service. There are a number of high quality and professional local businesses that we work closely with as needed including, marine electricians, marine mechanics, metal fabricators and many more. If you would like us to, we can liaise with whoever else is needed to complete the works, handling your job from start to finish!",
    },
    {
      question: "Can I see some photos of your work?",
      answer:
        "Of course! We regularly post photos of our hard work on the Fullard Boat Co Facebook and Instagram pages.",
    },
    {
      question: "Have some work you'd like to discuss with us?",
      answer:
        "Click here to get in touch today and book a free quote. Generally, we'll come out and meet you at your vessel to look at the work, then make a plan with you from there.",
    },
  ];

  return (
    <>
      <CardImage source={water} height={150} position={"absolute"} />
      <Box sx={{ position: "relative", p: 4 }}>
        <CardTitles title={"FAQ"} color={theme.palette.text.green} />

        <Typography sx={{ mt: 2 }}>
          Have a question that isn't answered here?
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Get in touch with us using the contact form below or give us a call.
        </Typography>

        {faqs && (
          <List sx={{ pt: 2 }}>
            {faqs.map((faq, index) => (
              <ListItem key={index} sx={{ p: 0, mt: 2, display: "list-item" }}>
                <Typography component="span" sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
                <br></br>
                {faq.answer}
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </>
  );
};

export default FaqCard;
