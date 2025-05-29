import { Box, Typography } from "@mui/material";

const CardTitles = ({ title, color }) => (
  <Box
    sx={{
      display: "flex",
    }}
  >
    <Typography
      variant="h5"
      color={color}
      sx={{
        mb: 2,
        fontSize: {
          xs: 20,
          sm: 24,
        },
      }}
    >
      {title}
    </Typography>
  </Box>
);

export default CardTitles;
