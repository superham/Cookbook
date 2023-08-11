import { Box, Container, Grid, Paper, Typography } from "@mui/material";

interface IngProps {
  ing: string;
  amt: string;
  units: string;
}
function Ing({ ing, amt, units }: IngProps) {
  return (
    <Typography variant="h4" textAlign={"center"}>
      {ing}: {amt} {units}
    </Typography>
  );
}

export default function Ingredients() {
  return (
    <Container
      maxWidth="md"
      sx={{
        borderRadius: "4px",
        marginTop: ".5rem",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: "100%",
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          display: "flex",
        }}
      >
        <Typography variant="h4" textAlign={"center"}>
          Lamb
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "100%",
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          display: "flex",
        }}
      >
        {/* Steps of the recipe */}
        <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
          <Ing ing="lamb" amt="half rack" units="" />
          <Ing ing="lemon" amt="1" units="Large Lemon" />
          <Ing ing="Carrots" amt="3" units="whole carrots" />
        </Box>
      </Paper>
    </Container>
  );
}
