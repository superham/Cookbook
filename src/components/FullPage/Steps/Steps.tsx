import { Box, Container, Grid, Paper, Typography } from "@mui/material";

interface StepProps {
  stepNum: number;
  instr: string;
}

interface InstrProps {
  instr: string;
}

function Step({ stepNum, instr }: StepProps) {
  return (
    <Grid item sx={{ flexGrow: 1 }}>
      <Typography variant="h4" textAlign={"center"}>
        1. xys
      </Typography>
    </Grid>
  );
}

function Inst({ instr }: InstrProps) {
  return (
    <Typography variant="h4" textAlign={"center"}>
      {instr}
    </Typography>
  );
}

export default function Steps() {
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
        {/* Steps of the recipe */}
        <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
          <Inst instr="cook it" />
          <Inst instr="watch it" />
          <Inst instr="stir it" />
          <Inst instr="let it rest" />
        </Box>
      </Paper>
    </Container>
  );
}
