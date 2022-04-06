import { Typography } from "@mui/material";
import ProjCard from "../../UI/ProjCard";
import "../../../styling/css/Projects.css";

import pomodoro from "../../../assets/images/pomodoro.png";
import tftracker from "../../../assets/images/TFTracker.png";

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
          skills={[
            "Frontend Development",
            "ReactJS",
            "JavaScript",
            "CSS",
            "HTML",
          ]}
        ></ProjCard>
        <ProjCard
          url="https://tft-tracker.vercel.app/"
          cardImage={{
            imageUrl: tftracker,
            imageAlt: "TFTracker Image",
          }}
          cardTitle={"TFTracker"}
          cardText={
            "A tool to view stats and previous games played in Teamfight Tactics, a game by Riot Games."
          }
          skills={[
            "Frontend Development",
            "ReactJS",
            "NextJS",
            "JavaScript",
            "CSS",
            "HTML",
            "Firebase",
          ]}
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
          skills={[
            "Frontend Development",
            "ReactJS",
            "JavaScript",
            "CSS",
            "HTML",
          ]}
        ></ProjCard>
      </div>
    </div>
  );
};

export default Projects;
