import { createTheme } from '@mui/material/styles';

// Define the color palette based on the original site
const palette = {
  primary: {
    main: '#343C42',
    light: '#4F5B63',
    dark: '#1D2124',
    contrastText: '#f2f2f2',
  },
  secondary: {
    main: '#6be2bb', // Kelly's color
    light: '#90EE90',
    dark: '#3CB371',
    contrastText: '#191a1c',
  },
  info: {
    main: '#90CAF3', // Will's color
    light: '#B6DCFA',
    dark: '#6B9EC9',
    contrastText: '#191a1c',
  },
  error: {
    main: '#EF86C9', // Aiden's color
    light: '#F5ADD7',
    dark: '#CB5DA6',
    contrastText: '#191a1c',
  },
  background: {
    default: '#191a1c',
    paper: '#0b0c0d',
  },
  text: {
    primary: '#f2f2f2',
    secondary: '#d0d0d0',
    disabled: '#656565',
  },
};

// Create the theme
const theme = createTheme({
  palette,
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      '@media (max-width:960px)': {
        fontSize: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      '@media (max-width:960px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.9rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          padding: '8px 16px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0b0c0d',
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#2c2d2e',
            },
            '&:hover fieldset': {
              borderColor: '#4a4b4c',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6be2bb',
            },
          },
        },
      },
    },
  },
});

export default theme;