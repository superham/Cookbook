import { Card, Chip, Grid, Container } from "@mui/material";
import { useState, useContext } from "react";
import { useFilters } from "src/use/useFilters/useFilters";
import { useFiltersType } from "../../types/useFiltersType";
import { FilterContext } from "src/context/filterContext";

interface ChipActionsProps {
  text: string;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChipActions({ text }: any) {
  const { updateFilter, getFilter, setWarning } = useFilters();
  const [chipState, setChipState] = useState(getFilter(text));

  return (
    <Chip
      key="i"
      label={text}
      variant={!chipState ? "outlined" : "filled"}
      onDelete={() => {
        setWarning(text, false);
        updateFilter(text);
        setChipState(!chipState);
      }}
      sx={{
        width: "8rem",
        fontSize: "18px",
        fontWeight: 400,
      }}
      // color="error"
    />
  );
}

export default function AppBarFilters() {
  const { returnCuisFilter, returnIngFilter, returnFlavorFilter } =
    useFilters();
  //@ts-ignore
  const { cuisFilterActive, ingFilterActive, flavorFilterActive } =
    useContext(FilterContext);

  console.log("cuisFilter: ");
  console.log(returnCuisFilter());
  return (
    <Container sx={{ width: "auto" }}>
      {/* // figure out how to gen via filters */}
      <Grid container spacing={2} sx={{ marginTop: 0, marginBottom: "0.5rem" }}>
        {cuisFilterActive && (
          <Grid item>{<ChipActions text={returnCuisFilter()} />}</Grid>
        )}
        {ingFilterActive && (
          <Grid item>{<ChipActions text={returnIngFilter()} />}</Grid>
        )}
        {flavorFilterActive && (
          <Grid item>{<ChipActions text={returnFlavorFilter()} />}</Grid>
        )}
      </Grid>
    </Container>
  );
}
