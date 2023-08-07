import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SearchAppBar } from "../SearchAppBar/SearchAppBar";
import Filters from "../Filters/Filters";
import chickenPic from "../../foodPics/chicken.jpg";
import lambPic from "../../foodPics/lamb.jpg";
import salmonPic from "../../foodPics/salmon.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
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
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <SearchAppBar />
      <Filters />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
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
          <Grid container spacing={4}>
            {/* {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))} */}
            <Grid item key={"lamb"} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={lambPic}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Roasted Rack of Lamb
                  </Typography>
                  <Typography>with Carrots and Lemon Quinoa</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={"chicken"} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={chickenPic}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Smoked Paprika Chicken{" "}
                  </Typography>
                  <Typography>with yellow rice and bread</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={"salmon"} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={salmonPic}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Herb Crusted Grilled Chicken Breast
                  </Typography>
                  <Typography>
                    with Vegetable Medley and Corn on the Cob
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
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
  );
}
