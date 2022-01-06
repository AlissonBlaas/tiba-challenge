import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const themeOptions = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          outline: 0,
          boxSizing: 0,
          textAlign: 'center',
          height: '100vh',
        },
        button: {
          height: 56,
          borderRadius: 10,
          fontWeight: 'bold',
          textTransform: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#2C97D1',
    },
    secondary: {
      main: '#5f6368',
    },
  },
  typography: {
    button: {
      fontWeight: 600,
      textTransform: 'none',
      textAlign: 'start',
    },
    fontFamily: "'Montserrat', sans-serif",
    overline: {
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.125rem',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

const theme = responsiveFontSizes(themeOptions);

export default theme;
