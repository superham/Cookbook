import { ThemeProvider } from "@emotion/react";
import { Box, Card, CssBaseline, Typography, createTheme } from "@mui/material";
import lambPic from "../../foodPics/lamb.jpg";
import { CardMedia } from "@mui/material";
import Ingredients from "./Ingredients/Ingredients";

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
      <main>
        {/* Main page container */}
        <Box
          sx={{
            bgcolor: "background.paper",
            py: 4,
            display: "flex",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              py: 4,
            }}
          >
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              A collection of things that turned out well
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              py: 4,
            }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: "56.25%",
                width: "60%",
                height: "60%",
              }}
              image={lambPic}
            />
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              A collection of things that turned out well
            </Typography>
          </Box>
        </Box>
      </main>
    </ThemeProvider>
  );
}
