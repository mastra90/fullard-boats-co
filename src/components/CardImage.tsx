import { Box } from "@mui/material";

const CardImage = ({ source, height }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          height: height,
          backgroundImage: `url(${source})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
};

export default CardImage;
