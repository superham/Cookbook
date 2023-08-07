import { Card, Chip, Grid, Container } from "@mui/material";
import { useState } from "react";
import { useFilters } from "src/use/useFilters/useFilters";
import { useFiltersType } from "../../types/useFiltersType";

interface ChipActionsProps {
  text: string;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChipActions({ text, filterMap }: any) {
  const [state, setState] = useState(false);

  return (
    <Chip
      label={text}
      variant={!state ? "outlined" : "filled"}
      onDelete={() => {
        filterMap.updateFilters(text);
        setState(filterMap.filterMap.get(text) || false);
      }}
      sx={{ width: "6rem" }}
    />
  );
}

export default function AppBarFilters() {
  const [display, setDisplay] = useState(true);
  const [displayLamb, setDisplayLamb] = useState(true);
  const [displaySpicy, setDisplaySpicy] = useState(true);

  return (
    <Container sx={{ width: "auto" }}>
      <Grid container spacing={2} sx={{ marginTop: 0, marginBottom: "0.5rem" }}>
        {/* <Grid item>
          {display && (
            <ChipActions
              text="Indian"
              filterMap={filterMap}
              setDisplay={setDisplay}
            />
          )}
        </Grid>
        <Grid item>
          {displayLamb && (
            <ChipActions
              text="Lamb"
              filterMap={filterMap}
              setDisplay={setDisplayLamb}
            />
          )}
        </Grid>
        <Grid item>
          {displaySpicy && (
            <ChipActions
              text="Spicy"
              filterMap={filterMap}
              setDisplay={setDisplaySpicy}
            />
          )}
        </Grid> */}
      </Grid>
    </Container>
  );
}
