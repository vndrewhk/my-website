import { Typography } from "@mui/material";
import ProjCard from "../../UI/ProjCard";
import "../../../styling/css/Projects.css";

import pomodoro from "../../../assets/images/pomodoro.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <Typography variant="h4" component="h2">
          Projects
        </Typography>
      </div>
      <div className="projects-shelf">
        <ProjCard
          url="https://pomodoreact-f0pwsl6bu-vndrewhk.vercel.app/"
          cardImage={{
            imageUrl: pomodoro,
            imageAlt: "Pomodoreact Image",
          }}
          cardTitle={"Pomodoreact"}
          cardText={
            "A general purpose pomodoro application to track and display studying habits."
          }
        ></ProjCard>
        <ProjCard
          cardImage={{
            imageUrl: pomodoro,
            imageAlt: "Pomodoreact Image",
          }}
          cardTitle={"Pomodoreact"}
          cardText={
            "A general purpose pomodoro application to track and display studying habits."
          }
        ></ProjCard>
        <ProjCard
          cardImage={{
            imageUrl: pomodoro,
            imageAlt: "Pomodoreact Image",
          }}
          cardTitle={"Pomodoreact"}
          cardText={
            "A general purpose pomodoro application to track and display studying habits."
          }
        ></ProjCard>
      </div>
    </div>
  );
};

export default Projects;
