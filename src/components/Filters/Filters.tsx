import {
  Card,
  Container,
  Chip,
  Stack,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useFilters } from "../../use/useFilters/useFilters";

interface variants {
  outlined: "outlined";
  filled: "filled";
}

interface ChipActionsProps {
  text: string;
}

interface handleClickProps {
  text: string;
  filter: boolean | undefined;
}

function FilterGroup() {
  const handleClick = ({ text, filter, filterMap }: any) => {
    console.info(`You clicked the ${text} chip`);
    console.info(`State is ${filter}`);
    console.info("----------------");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const getVarient = (varient: boolean | undefined) => {
    if (varient) {
      return "outlined";
    }

    return "filled";
  };

  function ChipActions(text: ChipActionsProps) {
    const filterMap = useFilters();
    const varient = filterMap.filterMap.get(text.text);
    console.log(varient);

    return (
      <Chip
        label={text.text}
        onClick={() => {
          console.info(`You clicked the ${text.text} chip`);
          console.info(`State is ${varient}`);
          console.info("----------------");

          const updatedMap = filterMap.setFilterMap(text.text, !varient);
          filterMap.setFilterMap();
        }}
        variant={getVarient(varient)}
        // onDelete={handleDelete}
        sx={{ width: "5rem" }}
      />
    );
  }

  // TODO: chips lose state when out of view....
  return (
    <Container
      maxWidth="md"
      sx={{
        paddingTop: "1rem",
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
          sx={{ maxWidth: "25%", marginRight: "0.5rem", marginLeft: "0.5rem" }}
        >
          <Typography variant="h5" textAlign={"center"}>
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
              <ChipActions text="Italian" />
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
          sx={{ maxWidth: "25%", marginRight: "0.5rem", marginLeft: "0.5rem" }}
        >
          <Typography variant="h5" textAlign={"center"}>
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
          sx={{ maxWidth: "25%", marginRight: "0.5rem", marginLeft: "0.5rem" }}
        >
          <Typography variant="h5" textAlign={"center"}>
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
