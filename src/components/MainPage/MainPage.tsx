import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SearchAppBar } from "../SearchAppBar/SearchAppBar";
import Filters from "../Filters/Filters";
import chickenPic from "../../foodPics/chicken.jpg";
import lambPic from "../../foodPics/lamb.jpg";
import salmonPic from "../../foodPics/salmon.jpg";
import CardPreview from "../CardPreview/CardPreview";
import { FilterProvider } from "../../context/filterContext";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Cormorant Garamond", "serif"].join(","),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function MainPage() {
  return (
    <FilterProvider>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <SearchAppBar />
        <Filters />

        <main>
          {/* Hero unit */}
          <Box>
            <Container
              maxWidth="sm"
              // sx={{ paddingTop: "1rem" }}
              style={{ borderBottom: "1px solid #393939" }}
            >
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                A collection of things that turned out well
              </Typography>
            </Container>
          </Box>
          <Container sx={{ py: 4 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={5}>
              <CardPreview
                title="Roasted Rack of Lamb"
                desc="with Carrots and Lemon Quinoa"
                pic={lambPic}
                route="/recipes/roasted-lamb"
                key="lamb"
              />

              <CardPreview
                title="Smoked Paprika Chicken"
                desc="with yellow rice and bread"
                pic={chickenPic}
                route="/recipes/paprika-chicken"
                key="papChicken"
              />

              <CardPreview
                title="Lemon Salmon filet"
                desc="with Garlic Mashed Potatoes, steamed Asparagus"
                pic={salmonPic}
                route="/recipes/lemon-salmon"
                key="lemonSalmon"
              />
              <CardPreview
                title="Roasted Rack of Lamb"
                desc="with Carrots and Lemon Quinoa"
                pic={lambPic}
                route="/recipes/roasted-lamb"
                key="lamb"
              />

              <CardPreview
                title="Smoked Paprika Chicken"
                desc="with yellow rice and bread"
                pic={chickenPic}
                route="/recipes/paprika-chicken"
                key="papChicken"
              />

              <CardPreview
                title="Lemon Salmon filet"
                desc="with Garlic Mashed Potatoes, steamed Asparagus"
                pic={salmonPic}
                route="/recipes/lemon-salmon"
                key="lemonSalmon"
              />
              <CardPreview
                title="Roasted Rack of Lamb"
                desc="with Carrots and Lemon Quinoa"
                pic={lambPic}
                route="/recipes/roasted-lamb"
                key="lamb"
              />

              <CardPreview
                title="Smoked Paprika Chicken"
                desc="with yellow rice and bread"
                pic={chickenPic}
                route="/recipes/paprika-chicken"
                key="papChicken"
              />

              <CardPreview
                title="Lemon Salmon filet"
                desc="with Garlic Mashed Potatoes, steamed Asparagus"
                pic={salmonPic}
                route="/recipes/lemon-salmon"
                key="lemonSalmon"
              />
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </FilterProvider>
  );
}
