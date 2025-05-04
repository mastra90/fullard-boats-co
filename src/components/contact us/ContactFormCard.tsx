import { Box, Button, TextField, Typography } from "@mui/material";
import CardTitles from "../CardTitles";
import theme from "../../theme";

const ContactFormCard = () => {
  const textFieldStyle = {
    "& .MuiInput-underline:before": {
      borderBottom: 1,
      borderBottomColor: "#2c2d2e",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: 1,
      borderBottomColor: "#333333",
    },
    "& .MuiInput-underline:after": {
      borderBottom: 1,
      borderBottomColor: theme.palette.text.green,
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#333333",
      opacity: 1,
    },
    "& .MuiInputBase-input:focus::placeholder": {
      color: "#555555",
      opacity: 1,
    },
    "& .MuiInputBase-input:hover::placeholder": {
      color: "#555555",
      opacity: 1,
    },
  };

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <CardTitles title={"Contact Us"} color={theme.palette.text.green} />
      <Typography sx={{ mt: 2 }}>Name*</Typography>
      <TextField
        placeholder="Your full name"
        variant="standard"
        fullWidth
        sx={textFieldStyle}
      />
      <Typography sx={{ mt: 2 }}>Email*</Typography>
      <TextField
        placeholder="Your Email"
        variant="standard"
        fullWidth
        sx={textFieldStyle}
      />
      <Typography sx={{ mt: 2 }}>Phone</Typography>
      <TextField
        placeholder="Your contact number"
        variant="standard"
        fullWidth
        sx={textFieldStyle}
      />
      <Typography sx={{ mt: 2 }}>Subject*</Typography>
      <TextField
        placeholder="Your message"
        variant="standard"
        fullWidth
        multiline
        sx={{
          ...textFieldStyle,
          "& .MuiInputBase-input": {
            resize: "vertical",
            minHeight: 250,
          },
        }}
      />
      <Button
        sx={{
          textTransform: "none",
          mt: 2,
          backgroundColor: theme.palette.text.green,
          color: theme.palette.text.dark,
          "&:hover": {
            backgroundColor: "#5ac9a3",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ContactFormCard;
