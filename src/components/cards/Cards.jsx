import "./Cards.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Counter from "../CounterWithCustomHook/Count";

const Cards = ({ auto }) => {
  return (
    <Card className="cardForm">
      <CardActionArea className="cardArea">
        <CardMedia component="img" image={auto.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {auto.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {auto.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`$${auto.price}`}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* BOTON COUNT */}

      <CardActions className="center">
        <Counter />
      </CardActions>
    </Card>
  );
};

export default Cards;
