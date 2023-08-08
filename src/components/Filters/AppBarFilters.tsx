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
      key="i"
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
  const {
    updateFilter,
    getFilter,
    returnCuisFilter,
    returnIngFilter,
    returnFlavorFilter,
  } = useFilters();

  const [cuisFilterActive, setCuisFilterActive] = useState(
    Boolean(returnCuisFilter())
  );

  const [ingFilterActive, setIngFilterActive] = useState(
    Boolean(returnCuisFilter())
  );

  const [flavorFilterActive, setFlavorFilterActive] = useState(
    Boolean(returnCuisFilter())
  );

  console.log("cuisFilter: ");
  console.log(returnCuisFilter());
  return (
    <Container sx={{ width: "auto" }}>
      {/* // figure out how to gen via filters */}
      <Grid container spacing={2} sx={{ marginTop: 0, marginBottom: "0.5rem" }}>
        {cuisFilterActive && (
          <Grid item>{<ChipActions text={returnCuisFilter} />}</Grid>
        )}
        {ingFilterActive && (
          <Grid item>{<ChipActions text={returnIngFilter} />}</Grid>
        )}
        {flavorFilterActive && (
          <Grid item>{<ChipActions text={returnFlavorFilter} />}</Grid>
        )}
      </Grid>
    </Container>
  );
}
