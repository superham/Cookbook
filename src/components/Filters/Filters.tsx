import {
  Card,
  Container,
  Chip,
  Stack,
  Grid,
  Paper,
  Typography,
  createSvgIcon,
} from "@mui/material";
import { useState } from "react";
import { useFilters } from "../../use/useFilters/useFilters";
import { SvgIcon, Icon } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import * as italyFlag from "../../content/flags/it.svg";
import {
  italyFlag,
  mexicanFlag,
  usFlag,
  germanFlag,
  chineseFlag,
  indiaFlag,
} from "../flags/flags";

interface ChipActionsProps {
  text: string;
}

const iconMapper = new Map<string, any>([
  ["Italian", italyFlag],
  ["American", usFlag],
  ["Mexican", mexicanFlag],
  ["German", germanFlag],
  ["Chinese", chineseFlag],
  ["Indian", indiaFlag],
  ["Beef", false],
  ["Salmon", false],
  ["Lamb", false],
  ["Chicken", false],
  ["Tofu", false],
  ["Noodles", false],
  ["Salty", false],
  ["Umami", false],
  ["Sweet", false],
  ["Spicy", false],
  ["Bitter", false],
  ["Sour", false],
]);

function FilterGroup() {
  function ChipActions(text: ChipActionsProps) {
    const { updateFilter, getFilter } = useFilters();
    const [chipState, setChipState] = useState(getFilter(text.text));
    const img = iconMapper.get(text.text);

    return (
      <Chip
        label={text.text}
        onClick={() => {
          updateFilter(text.text);
          setChipState(!chipState);
        }}
        variant={!chipState ? "outlined" : "filled"}
        sx={{ width: "7rem" }}
        icon={img}
      />
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        paddingTop: "4rem",
        borderRadius: "4px",
        marginTop: "1rem",
      }}
    >
      <Grid
        container
        spacing={2}
        maxWidth="md"
        columns={3}
        justifyContent={"center"}
      >
        {/* Only 1 selecable at a time */}
        {/* Cuisines */}
        <Paper
          elevation={3}
          sx={{ maxWidth: "30%", marginRight: "0.5rem", marginLeft: "0.5rem" }}
        >
          <Typography variant="h4" textAlign={"center"}>
            Cuisines
          </Typography>
          <Grid
            container
            spacing={2}
            flexGrow={1}
            columns={2}
            padding={"0.5rem"}
            alignItems={"center"}
          >
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text={"Italian"} />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="American" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Mexican" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Indian" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="German" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Chinese" />
            </Grid>
          </Grid>
        </Paper>

        {/* Ingredients */}
        <Paper
          elevation={3}
          sx={{ maxWidth: "30%", marginRight: "0.5rem", marginLeft: "0.5rem" }}
        >
          <Typography variant="h4" textAlign={"center"}>
            Ingredients
          </Typography>
          <Grid
            container
            spacing={2}
            flexGrow={1}
            columns={2}
            padding={"0.5rem"}
            alignItems={"center"}
          >
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Beef" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Salmon" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Noodles" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Lamb" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Tofu" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Chicken" />
            </Grid>
          </Grid>
        </Paper>

        {/* Flavors */}
        <Paper
          elevation={3}
          sx={{ maxWidth: "30%", marginRight: "0.5rem", marginLeft: "0.5rem" }}
        >
          <Typography variant="h4" textAlign={"center"}>
            Flavors
          </Typography>
          <Grid
            container
            spacing={2}
            flexGrow={1}
            columns={2}
            padding={"0.5rem"}
            alignItems={"center"}
          >
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Salty" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Umami" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Sweet" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Spicy" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Bitter" />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <ChipActions text="Sour" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
}

export default function Filters() {
  return <FilterGroup />;
}
