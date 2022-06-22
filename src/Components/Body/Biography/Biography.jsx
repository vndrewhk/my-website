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
    <>
      <div className="biography-container">
        <NameTypewriter></NameTypewriter>
        <div className="biography">
          <Typography variant="h6" component="h6">
            I'm a developer and designer striving to create experiences that
            empower people.
          </Typography>

          <Typography variant="body1" component="p">
            I'm a <b>Frontend Developer</b> with experience in{" "}
            <b>Mechanical Engineering</b> from{" "}
            <b>Toronto Metropolitan University</b>, currently working at{" "}
            <b>ABC Technologies</b> in engineering and program management. I'm
            in love with all things React, and an avid enjoyer of Javascript.
          </Typography>
        </div>
        <div className="contact-section">
          <ContactButtons></ContactButtons>
        </div>
      </div>
      <Projects></Projects>
    </>
  );
};

export default Biography;
