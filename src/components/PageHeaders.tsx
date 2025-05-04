import { Box, Typography } from "@mui/material";

const PageHeaders = ({ title, subtitle }) => (
  <Box
    sx={{
      mt: {
        xs: 6,
        sm: 8,
        md: 12,
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
