import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface CardPreviewProps {
  title: string;
  desc: string;
  pic: string;
  route: string;
  key: string;
  cuis?: string;
  ing?: string;
  flavor?: string; // use these
}

export default function CardPreview({
  title,
  desc,
  pic,
  route,
  key,
}: CardPreviewProps) {
  return (
    <Grid item key={key} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={pic}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{desc}</Typography>
        </CardContent>
        <CardActions>
          <Link to={route}>
            <Button
              size="small"
              onClick={() => {
                console.log("clicked");
              }}
            >
              View more
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
