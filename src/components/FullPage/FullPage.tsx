import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Cormorant Garamond", "serif"].join(","),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function FullPage() {
  return <div>Hello</div>;
}
