import { Card, Chip, Grid, Container } from "@mui/material";
import { useState } from "react";
import { useFilters } from "src/use/useFilters/useFilters";
import { useFiltersType } from "../../types/useFiltersType";

interface ChipActionsProps {
  text: string;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChipActions({ text }: any) {
  const { updateFilter, getFilter } = useFilters();
  const [chipState, setChipState] = useState(getFilter(text));

  return (
    <Chip
      label={text}
      variant={!chipState ? "outlined" : "filled"}
      onDelete={() => {
        updateFilter(text);
        setChipState(!chipState);
      }}
      sx={{ width: "6rem" }}
    />
  );
}

export default function AppBarFilters() {
  const { updateFilter, getFilter } = useFilters();

  const [display, setDisplay] = useState(true);
  const [displayLamb, setDisplayLamb] = useState(true);
  const [displaySpicy, setDisplaySpicy] = useState(true);

  return (
    // <Container sx={{ width: "auto" }}>
    //   {/* // figure out how to gen via filters */}
    //   <Grid container spacing={2} sx={{ marginTop: 0, marginBottom: "0.5rem" }}>
    //     <Grid item>{getFilter("Indian") && <ChipActions text="Indian" />}</Grid>
    //     <Grid item>{getFilter("Lamb") && <ChipActions text="Lamb" />}</Grid>
    //     <Grid item>{getFilter("Spicy") && <ChipActions text="Spicy" />}</Grid>
    //   </Grid>
    // </Container>
    <Container sx={{ width: "auto" }}>
      {/* // figure out how to gen via filters */}
      <Grid container spacing={2} sx={{ marginTop: 0, marginBottom: "0.5rem" }}>
        <Grid item>{<ChipActions text="Indian" />}</Grid>
        <Grid item>{<ChipActions text="Lamb" />}</Grid>
        <Grid item>{<ChipActions text="Spicy" />}</Grid>
      </Grid>
    </Container>
  );
}
