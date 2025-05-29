import { Box, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import HoursLocations from "./contact us/HoursLocations";
import theme from "../theme";
import { useLocation } from "react-router-dom";
import { ContactPageOutlined } from "@mui/icons-material";

const MobileModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          position: "absolute",
          display: isHomePage ? { xs: "flex", sm: "none" } : "none",
          m: 1,
          color: theme.palette.text.green,
          fontSize: 40,
        }}
      >
        <ContactPageOutlined sx={{fontSize: 32,}} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <Box sx={modalStyle}>
          <HoursLocations />
        </Box>
      </Modal>
    </>
  );
};

export default MobileModal;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: 2,
  borderRadius: 2,
  backgroundColor: theme.palette.background.paper,
  borderColor: theme.palette.primary.main,
  padding: 2,
  width: "fit-content",
  minWidth: 180,
};
