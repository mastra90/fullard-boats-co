import { Card, Box, Typography, List, ListItem } from '@mui/material';
import { ReactNode } from 'react';

interface ServiceCardProps {
  backgroundImage?: string;
  title: string;
  headingColor: string;
  headingClass: string;
  blurb: string;
  services?: string[];
  children?: ReactNode;
  id?: string;
}

const ServiceCard = ({ 
  backgroundImage, 
  title, 
  headingColor, 
  headingClass, 
  blurb, 
  services,
  children,
  id = "our-services-card"
}: ServiceCardProps) => {
  return (
    <Box className="card-container" id={id}>
      <Card
        sx={{
          width: {
            xs: '85%',
            sm: '25em',
          },
          margin: 'auto',
          backgroundColor: 'background.paper',
          borderRadius: '12px',
          padding: '1em',
          position: 'relative',
        }}
        className="service-card-contents"
      >
        {backgroundImage && (
          <Box
            component="img"
            src={backgroundImage}
            alt="Background"
            className="brushbg"
            sx={{
              position: 'absolute',
              margin: '-1em',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              width: {
                xs: '85%',
                sm: '432px',
              },
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          />
        )}
        
        <Typography
          variant="h4"
          component="h2"
          className={headingClass}
          sx={{
            display: 'flex',
            marginLeft: '1.1em',
            color: headingColor,
            position: 'relative',
            zIndex: 1,
            marginTop: {
              xs: '0.4em',
            },
            marginBottom: {
              xs: '0.5em',
            },
          }}
        >
          {title}
        </Typography>
        
        <Box
          className="our-services-body"
          sx={{
            boxSizing: 'border-box',
            width: '100%',
            padding: {
              xs: '0.5em 1em 0.5em 1em',
              sm: '0.5em 1em 1.8em 1.8em',
            },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            className="our-services-blurb"
            sx={{
              marginTop: {
                xs: '0em',
              },
              marginBottom: {
                xs: '2em',
                sm: '4em',
              },
            }}
          >
            {blurb}
          </Typography>
          
          {services && (
            <List
              className="our-services-list"
              sx={{
                marginLeft: '-1.3em',
                marginBottom: '0em',
              }}
            >
              {services.map((service, index) => (
                <ListItem key={index}>{service}</ListItem>
              ))}
            </List>
          )}
          
          {children}
        </Box>
      </Card>
    </Box>
  );
};

export default ServiceCard;