import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    drawer?: string;
    nav?: string;
  }
  interface TypeText {
    blue?: string;
    green?: string;
    pink?: string;
    dark?: string;
  }
}

const palette = {
  background: {
    default: "#0e2132",
    secondary: "#061828",
    buttons: "#ff6b6b",
  },
  text: {
    primary: "#fef6ef",
    dark: "#0b0c0d",
    blue: "#90CAF3", // Will's color
    green: "#77e7c0", // Kelly's color
    pink: "#ef86c9", // Aiden's color
  },
};

const theme = createTheme({
  palette,
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    h1: { fontWeight: 400 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: {},
    body2: {},
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: { color: palette.background.buttons },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 8, backgroundColor: palette.background.default },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: "space-between",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: palette.text.primary,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: palette.text.primary,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          // Underline styles
          "&:before": {
            borderBottom: "1px solid #2c2d2e",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "1px solid #333333",
          },
          "&:after": {
            borderBottom: `1px solid ${palette.text.green}`,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& input::placeholder, & textarea::placeholder": {
            color: "#333333",
            opacity: 1,
          },
          "& input:focus::placeholder, & textarea:focus::placeholder": {
            color: "#555555",
            opacity: 1,
          },
          "& input:hover::placeholder, & textarea:hover::placeholder": {
            color: "#555555",
            opacity: 1,
          },
        },
      },
    },
  },
});

export default theme;
