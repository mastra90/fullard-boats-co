import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

// Import background images - adjust paths as needed
import brushBg from '../assets/brush.png';
import waterBg from '../assets/water.png';
import ServiceCard from '../Components/ServicesCard';

const OurServicesPage: React.FC = () => {
  // Services list
  const services = [
    "Traditional Timber Shipwrighting",
    "Fibreglass Repairs",
    "Bespoke Cabinetry and Joinery",
    "Bow and Stern Thruster Installation",
    "Gel Coat Repairs",
    "Perspex Window Installation",
    "Custom Parts",
    "Teak Decking Restoration, Replacement and Rebuilds",
    "Antifouling and Maintenance",
    "Restorations",
    "Complete Boat Management"
  ];

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
          Hands-On Expertise:
        </Typography>
        <Typography variant="h2" component="h2" className="line2" sx={{ mt: 0 }}>
          Where Our Services Exceed Your Aspirations.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Grid container spacing={4} className="our-services-container" sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
        }}>
          <Grid item xs={12} lg={6}>
            <ServiceCard
              backgroundImage={brushBg}
              title="OUR SERVICES"
              headingColor="#90CAF3" // Will's blue color
              headingClass="our-services-heading"
              blurb="At Fullard Boat Co we offer a wide range of services. We have built a solid reputation and pride ourselves on our attention to detail and high-quality finishes at competitive prices. The services we offer include:"
              services={services}
              id="our-services-card"
            />
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <ServiceCard
              backgroundImage={waterBg}
              title="FAQ"
              headingColor="#77E7C0" // Kelly's green color
              headingClass="faq-heading"
              blurb="Have a question that isn't answered here? Get in touch with us using the contact form below or give us a call"
              id="faq-card"
            >
              <Box sx={{ mt: -2 }}>
                <Typography variant="h6" component="b" sx={{ fontWeight: 'bold' }}>
                  Where is your workshop located?
                </Typography>
                <Typography paragraph className="faq-questions">
                  We are a mobile business, which means we can come to your boat to complete work. 
                  We can also complete work on your boat at one of the many local facilities if required. 
                  We do have a machine shop where we can fabricate parts and work on some projects, but we don't have a conventional shop front.
                </Typography>
                
                <Typography variant="h6" component="b" sx={{ fontWeight: 'bold' }}>
                  Can you come to my boat to do the work?
                </Typography>
                <Typography paragraph className="faq-questions">
                  Being a mobile business, we come to your boat and do most types of work on location without you needing to move your boat anywhere. 
                  There is however, a few different types of work that can't be done over water in the Gippsland Lakes. 
                  If this is the case, we can work with you to organise the work to be completed at one of the facilities in the local area.
                </Typography>
                
                <Typography variant="h6" component="b" sx={{ fontWeight: 'bold' }}>
                  What facilities can you work out of?
                </Typography>
                <Typography paragraph className="faq-questions">
                  We can organise to complete work on your vessel at the Paynesville & Bullock Island Gippsland Ports Facilities, 
                  as well as a number of smaller private boat yards and workshops around the area.
                </Typography>
                
                <Typography variant="h6" component="b" sx={{ fontWeight: 'bold' }}>
                  My job needs you to work with other trades. Can you organise everything?
                </Typography>
                <Typography paragraph className="faq-questions">
                  We offer a comprehensive and complete service. 
                  There are a number of high quality and professional local businesses that we work closely with as needed including, 
                  marine electricians, marine mechanics, metal fabricators and many more. If you would like us to, we can liaise with 
                  whoever else is needed to complete the works, handling your job from start to finish!
                </Typography>
                
                <Typography variant="h6" component="b" sx={{ fontWeight: 'bold' }}>
                  Can I see some photos of your work?
                </Typography>
                <Typography paragraph className="faq-questions">
                  Of course! We regularly post photos of our hard work on the Fullard Boat Co {' '}
                  <Link 
                    href="https://www.facebook.com/FullardBoats" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    id="facebook-link"
                    sx={{ textDecoration: 'underline', color: 'inherit' }}
                  >
                    Facebook
                  </Link> and {' '}
                  <Link 
                    href="https://www.instagram.com/fullardboatco/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    id="instagram-link"
                    sx={{ textDecoration: 'underline', color: 'inherit' }}
                  >
                    Instagram
                  </Link> pages.
                </Typography>
                
                <Typography variant="h6" component="b" sx={{ fontWeight: 'bold' }}>
                  Have some work you'd like to discuss with us?
                </Typography>
                <Typography paragraph className="faq-questions">
                  Click here to get in touch today and book a free quote. Generally, we'll come out and meet you at your vessel 
                  to look at the work, then make a plan with you from there.
                </Typography>
              </Box>
            </ServiceCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServicesPage;