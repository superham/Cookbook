import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Card,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
  createTheme,
} from "@mui/material";
import lambPic from "../../foodPics/lamb.jpg";
import { CardMedia } from "@mui/material";
import { Ingredients, VirtualizedList } from "./Ingredients/Ingredients";
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
      <Container
        sx={{
          paddingTop: "4rem",
          paddingBottom: "2rem",
          borderRadius: "4px",
          marginTop: ".5rem",
          display: "flex",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: "30%",
            marginRight: "0.5rem",
            marginLeft: "0.5rem",
            minWidth: "200px",
          }}
        >
          <Ingredients />
          <VirtualizedList />
        </Paper>
        <Paper
          elevation={3}
          sx={{
            maxWidth: "70%",
            marginRight: "0.5rem",
            marginLeft: "0.5rem",
            minWidth: "200px",
          }}
        >
          <Summary pic={lambPic} prepTime={30} cookTime={45} foodYield={2} />
          <Steps />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
