import { Box } from "@mui/material";

const CardImage = ({ source, height, position, zIndex }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: position,
          left: 0,
          right: 0,
          height: height,
          backgroundImage: `url(${source})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: zIndex
        }}
      />
    </Box>
  );
};

export default CardImage;
