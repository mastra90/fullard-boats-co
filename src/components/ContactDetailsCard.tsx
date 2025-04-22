import { 
    Card, 
    Box, 
    Typography, 
    Link,
    useTheme,
    useMediaQuery
  } from '@mui/material';
  import PhoneIcon from '@mui/icons-material/Phone';
  import EmailIcon from '@mui/icons-material/Email';
  import FacebookIcon from '@mui/icons-material/Facebook';
  
  const ContactDetailsCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <Box className="card-container" id="contact-details-card">
        <Card
          sx={{
            width: {
              xs: '100%',
              sm: '20em',
              md: '25em',
              lg: '30em',
            },
            margin: 'auto',
            backgroundColor: 'background.paper',
            borderRadius: '12px',
          }}
          className="card-contents"
        >
          <Typography
            variant="h4"
            component="h2"
            className="our-details-heading"
            sx={{
              display: 'flex',
              marginLeft: {
                xs: '0.4em',
                sm: '1.1em',
              },
              color: theme.palette.error.main,
            }}
          >
            OUR DETAILS
          </Typography>
          
          <Box
            className="our-deatils-body"
            sx={{
              width: '100%',
              padding: {
                xs: '0em',
                sm: '1em',
              },
            }}
          >
            <Typography 
              variant="h5" 
              component="h2"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                fontSize: isMobile ? '1.1em' : '1.5em',
              }}
            >
              <PhoneIcon sx={{ mr: 1, ml: 1 }} /> 0434 819 553
            </Typography>
            
            <Typography 
              variant="h5" 
              component="h2"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                fontSize: isMobile ? '1.1em' : '1.5em',
              }}
            >
              <EmailIcon sx={{ mr: 1, ml: 1 }} /> office@fullardboatco.com
            </Typography>
            
            <Link
              href="https://www.facebook.com/FullardBoats"
              target="_blank"
              rel="noopener noreferrer"
              id="facebook-link"
              sx={{
                textDecoration: 'none',
                color: 'text.primary',
              }}
            >
              <Typography 
                variant="h5" 
                component="h2"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  fontSize: isMobile ? '1.1em' : '1.5em',
                }}
              >
                <FacebookIcon sx={{ mr: 1, ml: 1 }} /> facebook.com/FullardBoatCo
              </Typography>
            </Link>
            
            <Box sx={{ mt: 3 }}>
              <Box className="hours-container">
                <Typography 
                  variant="h6" 
                  className="hours-heading"
                  sx={{
                    marginLeft: {
                      xs: '0.7em',
                      sm: '0.8em',
                    },
                    marginTop: {
                      xs: '-0.5em',
                    },
                    marginBottom: '-1em',
                    fontSize: isMobile ? '1.1em' : '1.3em',
                  }}
                >
                  Opening Hours
                </Typography>
                
                <Typography 
                  className="hours-text"
                  sx={{
                    padding: {
                      xs: '0.5em 0 0 0.8em',
                      sm: '1em',
                    },
                    marginBottom: '-3em',
                  }}
                >
                  8:00am - 4:30pm
                </Typography>
                
                <Typography 
                  className="days-text"
                  sx={{
                    padding: {
                      xs: '0 0 0 0.8em',
                      sm: '1em',
                    },
                    marginBottom: '-1em',
                  }}
                >
                  Monday - Friday
                </Typography>
                
                <Typography 
                  className="public-hols-text"
                  sx={{
                    padding: {
                      xs: '0 0 0 0.8em',
                      sm: '1em',
                    },
                    fontSize: '0.8em',
                    fontStyle: 'italic',
                  }}
                >
                  *Excluding public holidays
                </Typography>
              </Box>
              
              <Box 
                className="serivce-locations-container"
                sx={{
                  float: {
                    xs: 'none',
                    sm: 'right',
                  },
                  marginRight: '1em',
                }}
              >
                <Typography 
                  variant="h6" 
                  className="serivce-locations-heading"
                  sx={{
                    marginLeft: {
                      xs: '0.7em',
                      sm: '1.3em',
                    },
                    fontSize: isMobile ? '1.1em' : '1.3em',
                  }}
                >
                  Service Locations
                </Typography>
                
                <Box 
                  component="ul"
                  className="serivce-locations-text"
                  sx={{
                    marginRight: '1.65em',
                    paddingLeft: {
                      xs: '1.8em',
                    },
                    marginTop: {
                      xs: '-0.8em',
                    },
                  }}
                >
                  <Typography component="li">Metung, VIC</Typography>
                  <Typography component="li">Bairnsdale, VIC</Typography>
                  <Typography component="li">Paynesville, VIC</Typography>
                  <Typography component="li">Lakes Entrance, VIC</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    );
  };
  
  export default ContactDetailsCard;