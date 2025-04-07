import { Card, CardContent, Box, Typography, useTheme } from '@mui/material';

interface TeamMembersCardProps {
  name: string;
  color: 'will' | 'kelly' | 'aiden';
  headshot: string;
  bio: string;
}

const TeamMembersCard = ({ name, color, headshot, bio }: TeamMembersCardProps) => {
  const theme = useTheme();
  
  // Map color names to theme colors
  const colorMap = {
    will: theme.palette.info.main, // Blue
    kelly: theme.palette.secondary.main, // Green
    aiden: theme.palette.error.main, // Pink
  };

  return (
    <Box className="card-container" id="our-services-card">
      <Box
        component="img"
        src={headshot}
        alt={`${name} headshot`}
        className="headshot"
        sx={{
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          width: {
            xs: '90%',
            md: 'auto',
          },
          margin: {
            xs: 'auto',
            md: '4em auto 0 auto',
          },
          display: {
            xs: 'flex',
            md: 'block',
          },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      
      <Card
        sx={{
          width: {
            xs: '90%',
            md: '25em',
          },
          height: {
            xs: 'auto',
            md: '13em',
          },
          margin: 'auto',
          backgroundColor: 'background.paper',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
        className={color === 'aiden' ? 'about-us-contents-aiden' : 'about-us-contents'}
      >
        <CardContent>
          <Typography 
            variant="h4" 
            component="h2"
            sx={{ 
              color: colorMap[color],
              marginBottom: '0.3em',
              marginLeft: '0.5em',
            }}
            className={`${color}-heading`}
          >
            {name}
          </Typography>
          
          <Box
            className="about-us-body"
            sx={{
              width: '100%',
              padding: '0.5em 0em 0em 1.8em',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Typography
              className="about-us-blurb-card"
              sx={{
                marginBottom: {
                  xs: '0.5em',
                  md: '4em',
                },
                paddingRight: {
                  xs: '1em',
                },
              }}
            >
              {bio}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TeamMembersCard;