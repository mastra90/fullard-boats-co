import { useState } from 'react';
import {
  Card,
  Box,
  Typography,
  Button,
  useTheme,
  InputBase,
  styled
} from '@mui/material';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

// Custom styled input to match the original design
const StyledInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    margin: '1em 1em 1em 0.9em',
    width: '85.55%',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderBottom: `solid ${theme.palette.background.default}`,
    borderBottomWidth: '0.2em',
    padding: '0.4em 0.4em 0.4em 0em',
    transition: 'border-bottom-color 0.3s',
    '&:hover': {
      borderBottom: `solid ${theme.palette.background.paper}`,
      borderBottomColor: '#2c2d2e',
      borderBottomWidth: '0.2em',
    },
    '&::placeholder': {
      color: '#2c2d2e',
    },
  },
}));

// Custom styled textarea
const StyledTextarea = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    margin: '1em 1em 1em 0.9em',
    width: '85.55%',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderBottom: `solid ${theme.palette.background.default}`,
    borderBottomWidth: '0.2em',
    padding: '0.4em 0.4em 0.4em 0em',
    transition: 'border-bottom-color 0.3s',
    fontFamily: "'IBM Plex Sans', sans-serif",
    minHeight: '200px',
    resize: 'vertical',
    '&:hover': {
      borderBottom: `solid ${theme.palette.background.paper}`,
      borderBottomColor: '#2c2d2e',
      borderBottomWidth: '0.2em',
    },
    '&::placeholder': {
      color: '#2c2d2e',
    },
  },
}));

const ContactFormCard = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // In a real application, this would be your API endpoint
      // const response = await fetch(process.env.REACT_APP_API_ENDPOINT, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Simulate success for now
      setSuccessMessage('Thank you for contacting us!');
      setErrorMessage('');

      // Clear form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
      });
    } catch (error) {
      console.error('Error sending email', error);
      setErrorMessage('Error sending email');
      setSuccessMessage('');
    }
  };

  return (
    <Box className="card-container" id="contact-form-card">
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
        {successMessage ? (
          <Typography
            variant="h4"
            component="h2"
            className="success-message"
            sx={{
              marginLeft: '1.1em',
              color: theme.palette.secondary.main,
              paddingTop: '1em',
            }}
          >
            {successMessage}
          </Typography>
        ) : errorMessage ? (
          <Typography
            variant="h4"
            component="h2"
            className="error-message"
            sx={{
              marginLeft: '1.1em',
              color: theme.palette.error.main,
              paddingTop: '1em',
            }}
          >
            {errorMessage}
          </Typography>
        ) : (
          <Typography
            variant="h4"
            component="h2"
            className="contact-us-heading"
            sx={{
              marginLeft: {
                xs: '0.4em',
                sm: '1.1em',
              },
              marginTop: {
                xs: '0.5em',
              },
              color: theme.palette.secondary.main,
            }}
          >
            CONTACT US
          </Typography>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            padding: {
              xs: '0em',
              sm: '1em',
            },
            paddingTop: {
              xs: '0em',
            },
          }}
        >
          <Typography component="label" sx={{ padding: '0.66em', display: 'block' }}>
            Name*
          </Typography>
          <StyledInput
            placeholder="Your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />

          <Typography component="label" sx={{ padding: '0.66em', display: 'block' }}>
            Email*
          </Typography>
          <StyledInput
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />

          <Typography component="label" sx={{ padding: '0.66em', display: 'block' }}>
            Phone
          </Typography>
          <StyledInput
            type="tel"
            placeholder="Your contact number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />

          <Typography component="label" sx={{ padding: '0.66em', display: 'block' }}>
            Subject*
          </Typography>
          <StyledTextarea
            placeholder="Your message"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            multiline
            fullWidth
          />

          <Button
            type="submit"
            className="submit-btn"
            sx={{
              display: 'flex',
              width: 'auto',
              backgroundColor: 'background.default',
              border: 'none',
              cursor: 'pointer',
              color: 'text.primary',
              borderRadius: '4px',
              boxShadow: 'none',
              padding: '0.8em',
              justifyContent: 'center',
              textAlign: 'center',
              margin: '1em 1em 1em 0.9em',
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                color: 'background.default',
                border: 'none',
              }
            }}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ContactFormCard;