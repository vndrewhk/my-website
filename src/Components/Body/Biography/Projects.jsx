import { Typography } from "@mui/material";
import ProjCard from "../../UI/ProjCard";
import "../../../styling/css/Projects.css";
import pomodoro from "../../../assets/images/pomodoro.png";
import tftracker from "../../../assets/images/TFTracker.png";
import youmightlike from "../../../assets/images/youmightlike.jpg";
import twitter from "../../../assets/images/twitter.webp";
import waldo from "../../../assets/images/LeagueWaldo.jpeg";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <Fade bottom>
      <div className="projects-container">
        <div className="projects-header">
          <Typography variant="h4" component="h2">
            Projects
          </Typography>
        </div>
        <div className="projects-shelf">
          <ProjCard
            url="https://blabber-amber.vercel.app/"
            cardImage={{
              imageUrl: twitter,
              imageAlt: "Blabber Image",
            }}
            cardTitle={"Blabber"}
            cardText={
              "A Twitter clone made from scratch, using NextJS for the frontend and backend, & Firebase for data management."
            }
            skills={[
              "Frontend Development",
              "NextJS",
              "ReactJS",
              "Firebase",
              "Tailwind CSS",
              "HTML",
            ]}
          ></ProjCard>
          <ProjCard
            url="https://youmightlike.vercel.app/"
            cardImage={{
              imageUrl: youmightlike,
              imageAlt: "You Might Like Image",
            }}
            cardTitle={"You Might Like"}
            cardText={
              "A web application meant to help users discover artists they may like based off of related artists and genres."
            }
            skills={[
              "Frontend Development",
              "NextJS",
              "ReactJS",
              "JavaScript",
              "CSS3",
              "SCSS",
              "HTML",
            ]}
          ></ProjCard>
          <ProjCard
            url="https://where-am-i-ashy.vercel.app/"
            cardImage={{
              imageUrl: waldo,
              imageAlt: "Where Am I?",
            }}
            cardTitle={"Where Am I?"}
            cardText={
              "Where's Waldo mini-game using React and Firebase as a BaaS"
            }
            skills={[
              "Frontend Development",
              "ReactJS",
              "JavaScript",
              "Firebase",
              "TailwindCSS",
              "HTML",
            ]}
          ></ProjCard>
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
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
