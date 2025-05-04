import { Box } from "@mui/material";
import CardTitles from "../CardTitles";
import theme from "../../theme";

const ContactFormCard = () => {
  return (
    <Box sx={{ position: "relative", p: 2 }}>
      <CardTitles title={"Contact Us"} color={theme.palette.text.green} />
    </Box>
  );
};

export default ContactFormCard;
