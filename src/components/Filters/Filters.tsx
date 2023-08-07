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

interface ChipActionsProps {
  text: string;
}

function FilterGroup() {
  function ChipActions(text: ChipActionsProps) {
    console.log(text);

    const { updateFilter, getFilter } = useFilters();
    const [chipState, setChipState] = useState(getFilter(text.text));

    <SvgIcon sx={{ display: "flex", height: "100%", width: "100%" }}>
      <svg
      // sx={{ textAlign: "center" }}
      />
    </SvgIcon>;

    // const FlagIcon = createSvgIcon(
    //   <svg
    //     xmlns="../../../content/images/germany.png"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //     strokeWidth={1.5}
    //     stroke="currentColor"
    //     fontSize="small"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       d="M12 4.5v15m7.5-7.5h-15"
    //     />
    //   </svg>,
    //   "Flag"
    // );

    // const FlagIcon = createSvgIcon(
    //   <img src="flags/it.svg" width="96" />,
    //   "Flag"
    // );

    const FlagIcon = (
      <Icon>
        <img src="flags/it.svg" alt="Flag of Italy" />
      </Icon>
    );

    return (
      <Chip
        label={text.text}
        onClick={() => {
          updateFilter(text.text);
          setChipState(!chipState);
        }}
        variant={!chipState ? "outlined" : "filled"}
        sx={{ width: "6rem" }}
        icon={<FlagIcon />}
      />
    );
  }

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
          sx={{ maxWidth: "30%", marginRight: "0.5rem", marginLeft: "0.5rem" }}
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
          sx={{ maxWidth: "30%", marginRight: "0.5rem", marginLeft: "0.5rem" }}
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
