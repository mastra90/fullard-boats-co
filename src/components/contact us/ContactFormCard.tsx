import { Box, Button, TextField, Typography } from "@mui/material";
import CardTitles from "../CardTitles";
import theme from "../../theme";

const fields = [
  {
    label: "Name*",
    placeholder: "Your full name",
  },
  {
    label: "Email*",
    placeholder: "Your email",
  },
  {
    label: "Phone",
    placeholder: "Your contact number",
  },
  {
    label: "Subject*",
    placeholder: "Your messsage",
  },
];

const ContactFormCard = () => {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <CardTitles title={"Contact Us"} color={theme.palette.text.green} />

      {fields.map((field, key) => (
        <Box key={key} sx={{ mb: 2 }}>
          <Typography sx={{ mt: 2 }}>{field.label}</Typography>
          <TextField
            placeholder={field.placeholder}
            variant="standard"
            fullWidth
            multiline
            sx={{
              "& .MuiInputBase-input": {
                resize: field.label === "Subject*" && "vertical",
                minHeight: field.label === "Subject*" && 250,
              },
            }}
          />
        </Box>
      ))}

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
