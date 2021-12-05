import { createMuiTheme } from "@material-ui/core/styles";

const abeBlue = "#0B72B9";
const abePurple = "#5f6caf";
const abeOrange = "#f77754";
const abeDarkBlue = "#0f4c75";
const abeBlack = "#1b262c";
const abeLightBlue = "#3282b8";
const abeBabyBlue = "#bbe1fa";
const abeReact = '#282c34';
const abeWhite = '#fff';
const midnightBlue = '#073980';
const reactBlack = 'rgb(40,44, 52)';
const reactDarkBlue = 'rgb(48, 56, 70)';
const js = `#f0db4f`;

export default createMuiTheme({
  palette: {
    common: {
      blue: `${abeBlue}`,
      purple: `${abePurple}`,
      orange: `${abeOrange}`,
      darkBlue: `${abeDarkBlue}`,
      black: `${abeBlack}`,
      lightBlue: `${abeLightBlue}`,
      babyBlue: `${abeBabyBlue}`,
      reactBlack: `${reactBlack}`,
      midnightBlue: `${midnightBlue}`
    },
    primary: {
      main: `${reactBlack}`,
    },
    secondary: {
      main: `${reactDarkBlue}`,
    },
    js: {
      main: `${js}`,
    }
  },
  typography: {
    tab: {
      fontFamily: "Bebas Neue",
      fontWeight: 550,
      fontSize: "1.2rem",
      texttrasform: "none",
    },
    estimate: {
      fontFamily: "Monserrat",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
