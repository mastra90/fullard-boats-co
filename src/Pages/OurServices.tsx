import { Card, Box } from '@mui/material';
import OurServicesCard from '../Components/OurServicesCard';
import FaqCard from '../Components/FaqCard';

const cards = [
  {
    content: <OurServicesCard />,
    width: 400
  },
  {
    content: <FaqCard />,
    width: 800
  }
];

const OurServicesPage = () => {
  return (
    <Box
      sx={{
        m: 2,
        gap: 2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' }
      }}
    >
      {cards.map((cards, key) => (
        <Card
          key={key}
          sx={{
            p: 2,
            height: 800,
            bgcolor: 'grey',
            width: { xs: '100%', md: cards.width },
          }}>
          {cards.content}
        </Card>
      ))}
    </Box>
  );
};

export default OurServicesPage;