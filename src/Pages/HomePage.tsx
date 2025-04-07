import { Box, Typography, Link, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Phone as PhoneIcon, Email as EmailIcon, Facebook as FacebookIcon } from '@mui/icons-material';

// Adjust the path as needed
import logoBgV2 from '../assets/logobgV2.png';
import homeBg from '../assets/homebg.png';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      {/* Taglines */}
      <Box
        sx={{
          position: 'absolute',
          top: isMobile ? '15%' : '20%',
          left: '1em',
          fontSize: {
            xs: '2em',
            sm: '3em',
            md: '6em',
          },
          fontWeight: 400,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: 'inherit',
            lineHeight: 0.9,
            margin: 0,
            opacity: 0,
            animation: 'fadeIn 200ms ease-in 300ms forwards',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 }
            }
          }}
          id="modern"
        >
          Modern,
        </Typography>
        
        <Typography
          variant="h1"
          sx={{
            fontSize: 'inherit',
            lineHeight: 0.9,
            margin: 0,
            opacity: 0,
            animation: 'fadeIn 200ms ease-in 600ms forwards',
          }}
          id="traditional"
        >
          Traditional,
        </Typography>
        
        <Typography
          variant="h1"
          sx={{
            fontSize: 'inherit',
            lineHeight: 0.9,
            margin: 0,
            opacity: 0,
            animation: 'fadeIn 200ms ease-in 900ms forwards',
          }}
          id="boat-building"
        >
          Boat Building.
        </Typography>
        
        {/* "Check out our services" link */}
        <Box
          sx={{
            fontSize: '0.3em',
            marginTop: '3em',
            marginLeft: '0.2em',
            opacity: 0,
            animation: 'slideInFromLeft 300ms ease-in 1500ms forwards',
            '@keyframes slideInFromLeft': {
              from: {
                opacity: 0,
                transform: 'translateX(-100%)',
              },
              to: {
                opacity: 1,
                transform: 'translateX(0)',
              }
            }
          }}
          className="see-our-services"
        >
          <Link
            component={RouterLink}
            to="/our-services"
            sx={{
              display: 'flex',
              color: 'text.primary',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              }
            }}
          >
            <Typography>Check out our services! &gt;</Typography>
          </Link>
        </Box>
      </Box>

      {/* Logo background */}
      <Box
        component="img"
        src={logoBgV2}
        alt="Logo Background"
        sx={{
          width: {
            xs: '200px',
            sm: '350px',
            md: '550px',
          },
          position: { 
            xs: 'absolute',
            sm: 'absolute',
          },
          margin: {
            xs: '18em 0em 0em 2em',
            sm: '8em 0em 0em 3.5em',
            md: '35em 0em -2em 3em',
          },
          float: {
            sm: 'right',
          },
          opacity: 0,
          animation: 'fadeIn 200ms ease-in 1200ms forwards',
          display: {
            xs: 'inline',
            sm: 'flex',
          },
        }}
        className="logobgV2"
      />

      {/* Contact details */}
      <Box
        sx={{
          display: 'block',
          position: 'absolute',
          bottom: '4em',
          marginLeft: '5.2em',
          opacity: 0,
          animation: 'fadeIn 400ms ease-in 1500ms forwards',
          '@media (max-width: 1700px)': {
            display: 'block',
          },
        }}
        className="homepg-contact-details"
      >
        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <PhoneIcon sx={{ mr: 1 }} /> 0434 819 553
        </Typography>
        
        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <EmailIcon sx={{ mr: 1 }} /> office@fullardboatco.com
        </Typography>
        
        <Link
          href="https://www.facebook.com/FullardBoats"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            color: 'text.primary',
          }}
          id="facebook-link"
        >
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
            <FacebookIcon sx={{ mr: 1 }} /> facebook.com/FullardBoatCo
          </Typography>
        </Link>
      </Box>

      {/* Service locations */}
      {!isMobile && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '4em',
            right: '5.2em',
            fontSize: {
              md: '1.2em',
              lg: '1.5em',
            },
            opacity: 0,
            animation: 'fadeIn 400ms ease-in 1500ms forwards',
          }}
          className="home-serivce-locations-container"
        >
          <Typography variant="h5" sx={{ mb: 1 }}>Opening Hours</Typography>
          <Typography sx={{ mb: 1 }}>8:00am - 4:30pm</Typography>
          <Typography sx={{ mb: 1 }}>Monday - Friday</Typography>
          <Typography sx={{ fontStyle: 'italic', fontSize: '0.8em', mb: 2 }}>
            *Excluding public holidays
          </Typography>
          
          <Typography variant="h5" sx={{ mb: 1 }}>Service Locations</Typography>
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            <Typography component="li">Metung, VIC</Typography>
            <Typography component="li">Bairnsdale, VIC</Typography>
            <Typography component="li">Paynesville, VIC</Typography>
            <Typography component="li">Lakes Entrance, VIC</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;