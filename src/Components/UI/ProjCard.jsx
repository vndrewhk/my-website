import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../styling/css/ProjCard.css";

// import "../../assets/images/pomodoro.png";
const ProjCard = (props) => {
  return (
    <div className="card-container">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 400, borderRadius: 4 }} className="project-card">
          <CardMedia
            component="img"
            height="300"
            //   image={pomodoro}
            image={props.cardImage.imageUrl}
            // image={"../../assets/images/pomodoro.png"}
            //   src="../../assets/images/pomodoro.png"
            alt={props.cardImage.imageAlt}
            className="card-media"
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              {props.cardTitle}
            </Typography>
            <Typography variant="body2">{props.cardText}</Typography>
          </CardContent>
          <CardActions className="card-actions">
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </a>
    </div>
  );
};
export default ProjCard;
