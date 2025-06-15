import { Box, Card } from "@mui/material";
import waves from "../assets/waves_footer.svg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box
        component="img"
        src={waves}
        alt="waves"
        sx={{
          width: "100%",
          zIndex: -20,
          mt: -30,
        }}
      />
      <Box sx={{ height: 400, mt: -2, bgcolor: "#03111d" }}>
        <Card
          sx={{
            height: 400,
            maxWidth: "100rem",
            m: "auto",
            bgcolor: "#03111d",
          }}
        >
          <Box>
            <Link to="/">
              <Box
                component="img"
                src={logo}
                alt="FullardBoatsCo logo"
                sx={{
                  width: { xs: 80, sm: 240 },
                }}
              />
            </Link>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Footer;
