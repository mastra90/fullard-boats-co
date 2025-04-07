import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ContactFormCard from '../Components/ContactFormCard';
import ContactDetailsCard from '../Components/ContactDetailsCard';

const ContactPage: React.FC = () => {
  return (
    <Box>
      <Box className="page-heading" sx={{ 
        display: { xs: 'block', sm: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: { xs: '9em 2em 0em 2.1em', sm: '10em 0 0 0' },
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordWrap: 'break-word',
        lineHeight: '2em',
        maxHeight: '11em'
      }}>
        <Typography variant="h2" component="h2" className="line1" sx={{ mb: 0 }}>
          Reach Out.
        </Typography>
        <Typography variant="h2" component="h2" className="line2" sx={{ mt: 0 }}>
          We're Here To Help.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Grid container spacing={4} className="contact-container" sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center'
        }}>
          <Grid item xs={12} md={6}>
            <ContactDetailsCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactFormCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;