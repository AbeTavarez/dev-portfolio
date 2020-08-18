import { createMuiTheme } from "@material-ui/core/styles";

const abeBlue = "#0B72B9";
const abePurple = "#5f6caf";
const abeOrange = "#f77754";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${abeBlue}`,
      purple: `${abePurple}`,
      orange: `${abeOrange}`,
    },
    primary: {
      main: `${abeBlue}`,
    },
    secondary: {
      main: `${abePurple}`,
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
