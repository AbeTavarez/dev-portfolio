import { createMuiTheme } from "@material-ui/core/styles";

const abeBlue = "#0B72B9";
const abePurple = "#5f6caf";
const abeOrange = "#f77754";
const abeDarkBlue = "#0f4c75";
const abeBlack = "#1b262c";
const abeLightBlue = "#3282b8";
const abeBabyBlue = "#bbe1fa";
const abeWhite = '#ffff';

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
    },
    primary: {
      main: `${abeBlue}`,
    },
    secondary: {
      main: `${abeBlue}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Bebas Neue",
      fontWeight: 550,
      fontSize: "1.5rem",
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
