import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import listMD from "../../../content/foods/roastedLamb/list.md";
import content from "../../../content/foods/roastedLamb/content.json";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";

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
export function Ingredients() {
  const [list, setList] = useState("");

  // Fetch md obj -> str
  useEffect(() => {
    fetch(listMD)
      .then((res) => res.text())
      .then((text) => setList(text));
  });

  return (
    <Container
      sx={{
        borderRadius: "4px",
        marginTop: ".5rem",
        marginBottom: ".5rem",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
        }}
      >
        <Typography variant="h4" textAlign={"center"}>
          {content.title}
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          textAlign: "justify",
        }}
      >
        <ReactMarkdown children={list} remarkPlugins={[remarkGfm]} />
      </Paper>
    </Container>
  );
}

// function ConsumeContent() {
//   console.log(typeof content);
//   const ing = content.ingredients.list;

//   // //@ts-ignore
//   // const listItems = ing.map(
//   //   //@ts-ignore
//   //   (i) => <ListItem key={i} primary="yes" component="div" disablePadding /> // how to generate many lines now lol{
//   // );

//   // return <div>{listItems}</div>;

//   for (let i = 0; i < ing.length; i++) {
//     console.log(ing[i]);
//     return <ListItem key={i} component="div" disablePadding />; // how to generate many lines now lol
//   }
// }

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;
  const ing = content.ingredients.list;

  return (
    <>
      {ing.map((text) => (
        <ListItem
          style={style}
          key={`index-${text}`}
          component="div"
          disablePadding
        >
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </>
  );
}

export function VirtualizedList() {
  const ing = content.ingredients.list;

  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={1} // change to 3
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
