import { Typography } from "@mui/material";
import ProjCard from "../../UI/ProjCard";
import "../../../styling/css/Projects.css";

import pomodoro from "../../../assets/images/pomodoro.png";
import tftracker from "../../../assets/images/TFTracker.png";

const Experience = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <Typography variant="h4" component="h2">
          Experience
        </Typography>
      </div>
      <div className="projects-shelf">
        <ProjCard
          url="https://www.ryerson.ca/programs/undergraduate/mechanical-engineering/"
          cardImage={{
            imageUrl: pomodoro,
            imageAlt: "Ryerson University",
          }}
          cardTitle={"Ryerson University"}
          cardText={
            "4 Year B.Eng in Mechanical Engineering with Co-op Experience."
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

export default Experience;
