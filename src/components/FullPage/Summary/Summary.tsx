// food pic with time it takes (prep active), servings,

import {
  Container,
  CardMedia,
  Card,
  Paper,
  Typography,
  Grid,
} from "@mui/material";

interface SummaryProps {
  pic: string;
  prepTime: number; // minutes
  cookTime: number; // minutes
  foodYield: number; // number of people it feeds
}

export function Summary({ pic, prepTime, cookTime, foodYield }: SummaryProps) {
  return (
    <Container
      maxWidth="md"
      sx={{
        borderRadius: "4px",
        marginTop: ".5rem",
      }}
    >
      <CardMedia
        component="div"
        image={pic}
        sx={{
          // 16:9
          pt: "56.25%",
        }}
      />
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      ></Card>
      <Paper>
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
            <Typography variant="h4" textAlign={"center"}>
              Prep Time: {prepTime} min
            </Typography>
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            <Typography variant="h4" textAlign={"center"}>
              Cooking Time: {cookTime} min
            </Typography>
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            <Typography variant="h4" textAlign={"center"}>
              Prep Time: {prepTime} min
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
