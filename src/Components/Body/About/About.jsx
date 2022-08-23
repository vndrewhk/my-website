import { Typography } from "@mui/material";
import { useEffect } from "react";
import "../../../scss/About.css";
import Kangaroo from "../../../assets/images/kangaroo.jpeg";

const About = () => {
  useEffect(() => {
    document.title = "About | Andrew Ma";
  }, []);
  return (
    <div className="about-container">
      <div className="text-container">
        <Typography variant="h3" component="h3">
          Hi! I'm Andrew.
        </Typography>
        <div className="text-excerpt">
          <Typography
            variant="h6"
            component="h6"
            sx={{ lineHeight: "normal", m: 1 }}
          >
            I'm an Ex-Mechanical Engineer, turned Frontend Developer from
            Toronto Metropolitan University.
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{ lineHeight: "normal", m: 1 }}
          >
            I switched careers because I was tired of the monotony and slow
            corporate lifestyle of the manufacturing and automotive industry.
          </Typography>
        </div>
        <Typography
          component="p"
          varianat="p"
          sx={{ lineHeight: 1.5, m: 1, paddingTop: "1em" }}
        >
          I solve problems using my building blocks of design and development to
          make the world a better place. To me, learning is a lifelong journey
          and it never stops.
        </Typography>
      </div>
      <div className="image-container">
        <img className="image" src={Kangaroo}></img>
        <Typography variant="p" component="p">
          This is me with a baby kangaroo! Isn't he cute?
        </Typography>
      </div>
    </div>
  );
};

export default About;
