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
  }
}

const palette = {
  primary: {
    main: "#f2f2f2",
  },
  background: {
    nav: "#343C42",
    paper: "#0b0c0d",
  },
  text: {
    primary: "#f2f2f2",
    blue: "#90CAF3", // Will's color
    green: "#77e7c0", // Kelly's color
    pink: "#EF86C9", // Aiden's color
  },
};

const theme = createTheme({
  palette,
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: { fontWeight: 600 },
    h6: {},
    body1: {},
    body2: {},
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: { color: palette.primary.main },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: "space-between",
          backgroundColor: palette.background.nav,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: palette.primary.main,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: palette.primary.main,
        },
      },
    },
  },
});

export default theme;
