import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import listMD from "../../../content/foods/roastedLamb/list.md";
import desc from "../../../content/foods/roastedLamb/desc.json";

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
  const [list, setList] = useState("");

  // Fetch md obj -> str
  useEffect(() => {
    fetch(listMD)
      .then((res) => res.text())
      .then((text) => setList(text));
  });

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
          maxWidth: "30%",
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          display: "flex",
        }}
      >
        <Typography variant="h4" textAlign={"center"}>
          {desc.title}
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "30%",
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          display: "flex",
        }}
      >
        <ReactMarkdown children={list} remarkPlugins={[remarkGfm]} />
      </Paper>
    </Container>
  );
}
