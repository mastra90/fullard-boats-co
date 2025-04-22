import { Box, Typography } from "@mui/material";

const PageHeaders = ({ title, subtitle }) => (
  <Box
    sx={{
      my: 8,
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Typography variant="h5" align="center">
      {title}
      <br />
      {subtitle}
    </Typography>
  </Box>
);

export default PageHeaders;
