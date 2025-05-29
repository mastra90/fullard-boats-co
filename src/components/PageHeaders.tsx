import { Box, Typography } from "@mui/material";

const PageHeaders = ({ title, subtitle }) => (
  <Box
    sx={{
      mt: {
        xs: 2,
        sm: 6,
        md: 8,
      },
      mx: 2,
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
