import { createMuiTheme } from "@material-ui/core/styles";

const abeBlue = "#0B72B9";
const abeOrange = "#5f6caf";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${abeBlue}`,
      orange: `${abeOrange}`,
    },
    primary: {
      main: `${abeBlue}`,
    },
    secondary: {
      main: `${abeOrange}`,
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
