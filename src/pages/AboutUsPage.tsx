import React from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';

// Import headshot images - adjust the paths as needed based on your assets folder
import WillImage from '../assets/Will.png';
import KellyImage from '../assets/Kelly.png';
import AidenImage from '../assets/Aiden.png';
import TeamMembersCard from '../components/TeamMembersCard';

const AboutUsPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box className="page-heading" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '10em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordWrap: 'break-word',
        lineHeight: '2em',
        maxHeight: '11em'
      }}>
        <Typography variant="h2" component="h2" className="line1" sx={{ mb: 0 }}>
          Navigating Excellence.
        </Typography>
        <Typography variant="h2" component="h2" className="line2" sx={{ mt: 0 }}>
          Your Journey Starts with Our Craftsmanship.
        </Typography>
      </Box>

      <Box className="about-us-blurb-container" sx={{
        display: 'flex',
        width: { xs: '84%', md: '60em' },
        margin: 'auto',
        bgcolor: { xs: theme.palette.background.paper, md: 'transparent' },
        justifyContent: 'center',
        borderRadius: { xs: '12px', md: 0 },
        padding: { xs: '1em 2em 1em 2em', md: 0 },
        mt: 2,
        mb: { xs: -2, md: 0 }
      }}>
        <Typography variant="body1" className="about-us-blurb" sx={{
          fontSize: { xs: '1em', md: '1.3em' },
          lineHeight: { xs: '1.2em', md: 'inherit' },
          mt: 1
        }}>
          Established in 2018, Fullard Boat Co is a family-run business based around the Gippsland Lakes in Victoria.
          We offer a comprehensive service for all wooden and fibreglass boats, specialising in both timber and fibreglass repairs, restorations and new builds.
        </Typography>
      </Box>

      <Typography variant="h1" className="our-team-heading" sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#2d2d2d',
        mt: 2
      }}>
        Our Team
      </Typography>

      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Grid container spacing={4} className="about-us-container" sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          mt: { xs: -4, md: -7 }
        }}>
          <TeamMembersCard
            name="Will Fullard"
            color="will"
            headshot={WillImage}
            bio="Will is a qualified shipwright who began working in the boat building industry in 2007. He has worked as a shipwright on various projects from the restoration of a traditional timber tall ship, to modern composite new build yacht tenders both here in Australia and in the UK."
          />
          <TeamMembersCard
            name="Kelly Fullard"
            color="kelly"
            headshot={KellyImage}
            bio="Kelly is the Operations Manager. She plays the 'behind the scenes' role and handles everything from administration to accounts and much more."
          />
          <TeamMembersCard
            name="Aidan Kell"
            color="aiden"
            headshot={AidenImage}
            bio="Aidan joined the Fullard Boat Co family as a school-based apprentice in 2021, whilst also completing his VCE. He has now finished his VCE and is a full time apprentice. He has a fantastic work ethic and we look forward to watching him grow and develop throughout the rest of his apprenticeship and beyond."
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsPage;