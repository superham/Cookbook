import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import stepsMD from "../../../content/foods/roastedLamb/steps.md";
import { useEffect, useState } from "react";

interface StepProps {
  stepNum: number;
  instr: string;
}

interface InstrProps {
  instr: string;
}

export default function Steps() {
  const [steps, setSteps] = useState("");

  // Fetch md obj -> str
  useEffect(() => {
    fetch(stepsMD)
      .then((res) => res.text())
      .then((text) => setSteps(text));
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
          maxWidth: "100%",
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          display: "flex",
        }}
      >
        <ReactMarkdown children={steps} />
      </Paper>
    </Container>
  );
}
