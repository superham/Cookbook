import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Card,
  Container,
  CssBaseline,
  Grid,
  Typography,
  createTheme,
} from "@mui/material";
import lambPic from "../../foodPics/lamb.jpg";
import { CardMedia } from "@mui/material";
import Ingredients from "./Ingredients/Ingredients";
import { Details } from "@mui/icons-material";
import { Summary } from "./Summary/Summary";
import Steps from "./Steps/Steps";

const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Cormorant Garamond", "serif"].join(","),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function FullPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Grid
        container
        spacing={2}
        flexGrow={1}
        columns={2}
        padding={"0.5rem"}
        alignItems={"center"}
        sx={{ textAlign: "center" }}
      >
        <Grid item sx={{ flexGrow: 1 }}>
          <Ingredients />
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <Summary pic={lambPic} prepTime={30} cookTime={45} foodYield={2} />
          <Steps />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
