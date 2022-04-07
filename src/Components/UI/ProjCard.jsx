import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "../../styling/css/ProjCard.css";
import { useState } from "react";

// import "../../assets/images/pomodoro.png";

const ProjCard = (props) => {
  const chipMap = props.skills.map((skill) => (
    <Chip
      className="chip"
      key={`${skill}_${props.cardTitle}`}
      label={skill}
      color="primary"
    />
  ));

  // prbably will have to map out the ids for chips

  return (
    <div className="card-container">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <Card
          className="project-card"
          sx={{
            maxWidth: 400,
            borderRadius: 4,
            boxShadow: 3,
            "&:hover": {
              boxShadow: 3,
            },
          }}
        >
          <CardMedia
            className="card-media"
            component="img"
            height="300"
            image={props.cardImage.imageUrl}
            alt={props.cardImage.imageAlt}
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              {props.cardTitle}
            </Typography>
            <Typography variant="body2">{props.cardText}</Typography>
          </CardContent>
          <CardActions className="chips">
            {/* <Chip label="primary" color="primary" />
            <Chip label="primary" color="primary" /> */}
            {chipMap}
          </CardActions>
        </Card>
      </a>
    </div>
  );
};
export default ProjCard;
