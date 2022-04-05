import { useEffect } from "react";
import "../../../styling/css/Biography.css";
import Projects from "./Projects";
import { Typography } from "@mui/material";

import NameTypewriter from "./NameTypewriter";
import ContactButtons from "../../UI/ContactButtons";

const Biography = () => {
  useEffect(() => {
    document.title = "Home | Andrew Ma";
  }, []);
  return (
    <div className="biography-container">
      <NameTypewriter></NameTypewriter>
      <div>
        <Typography variant="h6" component="h6">
          I'm a developer and designer striving to create experiences that
          empower people.
        </Typography>

        <Typography variant="body1" component="body1">
          I'm a <b>Mechanical Engineering</b> student at Ryerson University, and
          currently an engineering intern at <b>ABC Technologies.</b> I'm in
          love with all things React, and an avid enjoyer of Javascript.
        </Typography>
      </div>
      <ContactButtons></ContactButtons>
      <Projects></Projects>
    </div>
  );
};

export default Biography;
