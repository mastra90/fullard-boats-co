import { Box, Typography } from "@mui/material";
import homeBg from "../assets/homebg.png";
import CardImage from "../components/CardImage";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";

const HomePage = () => {
  const tagLines = [
    "Modern,",
    "Traditional,",
    "Boat Building.",
    "Check out our services! >",
  ];

  const tagContainerStyle = () => {
    return {
      p: {
        xs: 4,
        sm: 8,
        md: 12,
      },

      pt: {
        xs: 0,
        sm: 0,
        md: 6,
      },
    };
  };

  const tagStyle = (tagLine) => {
    const isCTA = tagLine === tagLines.slice(-1)[0];
    return {
      mt: isCTA ? 4 : 0,
      fontSize: isCTA
        ? {
            xs: 20,
            sm: 24,
            md: 32,
          }
        : {
            xs: 40,
            sm: 56,
            md: 108,
          },
    };
  };

  const tagAnimations = (key: number, tagLine: string) => {
    const isCTA = tagLine === tagLines.slice(-1)[0];
    const delay = 500 + key * 500;
    const easeIn = isCTA ? 400 : 200;
    const animation = isCTA
      ? `slideInFromLeft ${easeIn}ms ease-in ${delay}ms forwards`
      : `fadeIn ${easeIn}ms ease-in ${delay}ms forwards`;

    return {
      opacity: 0,
      animation: animation,
      "@keyframes fadeIn": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      "@keyframes slideInFromLeft": {
        from: {
          opacity: 0,
          transform: "translateX(-100%)",
        },
        to: {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
    };
  };

  const logoImageStyle = () => {
    return {
      width: {
        xs: 240,
        sm: 360,
        md: 600,
      },
      mt: {
        xs: 0,
        sm: -4,
        md: -8,
      },
      ml: {
        xs: 1,
        sm: 3.5,
        md: 4.5,
      },
      opacity: 0,
      animation: "fadeIn 200ms ease-in 2400ms forwards",
    };
  };

  return (
    <>
      <CardImage
        source={homeBg}
        height={"100vh"}
        position={"absolute"}
        zIndex={0}
      />
      <NavBar />
      {tagLines && (
        <Box sx={tagContainerStyle}>
          {tagLines.map((tagLine, key) => {
            const isCTA = tagLine === tagLines.slice(-1)[0];
            return (
              <Typography
                variant="h1"
                key={key}
                sx={{
                  ...tagAnimations(key, tagLine),
                  ...tagStyle(tagLine),
                }}
              >
                {!isCTA && tagLine}
                {isCTA && (
                  <Link
                    to="/our-services"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <u>{tagLine}</u>
                  </Link>
                )}
              </Typography>
            );
          })}
        </Box>
      )}
      <Box
        component="img"
        src={logo}
        alt="FullardBoatsCo logo"
        sx={logoImageStyle}
      />
    </>
  );
};

export default HomePage;

// import { Box, Typography, Link, useMediaQuery } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import {
//   Phone as PhoneIcon,
//   Email as EmailIcon,
//   Facebook as FacebookIcon,
// } from "@mui/icons-material";

// // Adjust the path as needed
// import logo from "../assets/logo.png";
// import homeBg from "../assets/homebg.png";
// import theme from "../theme";

// const HomePage = () => {
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${homeBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         width: "100%",
//         position: "absolute",
//       }}
//     >
//       {/* Taglines */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: isMobile ? "4rem" : "5rem",
//           left: "1em",
//           fontSize: {
//             xs: "2em",
//             sm: "3em",
//             md: "6em",
//           },
//           fontWeight: 400,
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: "inherit",
//             mb: -4,
//             opacity: 0,
//             animation: "fadeIn 200ms ease-in 300ms forwards",
//             "@keyframes fadeIn": {
//               from: { opacity: 0 },
//               to: { opacity: 1 },
//             },
//           }}
//           id="modern"
//         >
//           Modern,
//         </Typography>

//         <Typography
//           sx={{
//             fontSize: "inherit",
//             mb: -2,
//             opacity: 0,
//             animation: "fadeIn 200ms ease-in 600ms forwards",
//           }}
//           id="traditional"
//         >
//           Traditional,
//         </Typography>

//         <Typography
//           sx={{
//             fontSize: "inherit",
//             mb: -2,
//             opacity: 0,
//             animation: "fadeIn 200ms ease-in 900ms forwards",
//           }}
//           id="boat-building"
//         >
//           Boat Building.
//         </Typography>

//         {/* "Check out our services" link */}
//         <Box
//           sx={{
//             opacity: 0,
//             animation: "slideInFromLeft 300ms ease-in 1500ms forwards",
//             "@keyframes slideInFromLeft": {
//               from: {
//                 opacity: 0,
//                 transform: "translateX(-100%)",
//               },
//               to: {
//                 opacity: 1,
//                 transform: "translateX(0)",
//               },
//             },
//           }}
//           className="see-our-services"
//         >
//           <Link
//             component={RouterLink}
//             to="/our-services"
//             sx={{
//               color: "text.primary",
//               textDecoration: "none",
//               "&:hover": {
//                 textDecoration: "underline",
//               },
//             }}
//           >
//             <Typography sx={{ fontSize: 28, mt: 4 }}>
//               Check out our services!
//             </Typography>
//           </Link>
//         </Box>
//       </Box>

//       {/* Logo background */}
// <Box
//   component="img"
//   src={logo}
//   alt="Logo Background"
//   sx={{
//     width: {
//       xs: "200px",
//       sm: "350px",
//       md: "550px",
//     },
//     position: {
//       xs: "absolute",
//       sm: "absolute",
//     },
//     margin: {
//       xs: "18em 0em 0em 2em",
//       sm: "8em 0em 0em 3.5em",
//       md: "35em 0em -2em 3em",
//     },
//     float: {
//       sm: "right",
//     },
//     opacity: 0,
//     animation: "fadeIn 200ms ease-in 1200ms forwards",
//     display: {
//       xs: "inline",
//       sm: "flex",
//     },
//   }}
//   className="logobgV2"
// />

//       {/* Contact details */}
//       <Box
//         sx={{
//           display: "block",
//           position: "absolute",
//           bottom: "4em",
//           marginLeft: "5.2em",
//           opacity: 0,
//           animation: "fadeIn 400ms ease-in 1500ms forwards",
//           "@media (max-width: 1700px)": {
//             display: "block",
//           },
//         }}
//         className="homepg-contact-details"
//       >
//         <Typography
//           variant="h5"
//           sx={{ display: "flex", alignItems: "center", mb: 1 }}
//         >
//           <PhoneIcon sx={{ mr: 1 }} /> 0434 819 553
//         </Typography>

//         <Typography
//           variant="h5"
//           sx={{ display: "flex", alignItems: "center", mb: 1 }}
//         >
//           <EmailIcon sx={{ mr: 1 }} /> office@fullardboatco.com
//         </Typography>

//         <Link
//           href="https://www.facebook.com/FullardBoats"
//           target="_blank"
//           rel="noopener noreferrer"
//           sx={{
//             textDecoration: "none",
//             color: "text.primary",
//           }}
//           id="facebook-link"
//         >
//           <Typography
//             variant="h5"
//             sx={{ display: "flex", alignItems: "center" }}
//           >
//             <FacebookIcon sx={{ mr: 1 }} /> facebook.com/FullardBoatCo
//           </Typography>
//         </Link>
//       </Box>

//       {/* Service locations */}
//       {!isMobile && (
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: "2em",
//             right: "2em",
//             fontSize: {
//               md: "1.2em",
//               lg: "1.5em",
//             },
//             opacity: 0,
//             animation: "fadeIn 400ms ease-in 1500ms forwards",
//           }}
//           className="home-serivce-locations-container"
//         >
//           <Typography variant="h3" sx={{ mb: 1 }}>
//             Opening Hours
//           </Typography>
//           <Typography sx={{ mb: 1 }}>8:00am - 4:30pm</Typography>
//           <Typography sx={{ mb: 1 }}>Monday - Friday</Typography>
//           <Typography sx={{ fontStyle: "italic", fontSize: "0.8em", mb: 2 }}>
//             *Excluding public holidays
//           </Typography>

//           <Typography variant="h3" sx={{ mb: 1 }}>
//             Service Locations
//           </Typography>
//           <Box component="ul" sx={{ pl: 2, m: 0 }}>
//             <Typography component="li">Metung, VIC</Typography>
//             <Typography component="li">Bairnsdale, VIC</Typography>
//             <Typography component="li">Paynesville, VIC</Typography>
//             <Typography component="li">Lakes Entrance, VIC</Typography>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default HomePage;
