import { useEffect } from "react";
import "../../../styling/css/About.css";

const About = () => {
  useEffect(() => {
    document.title = "About | Andrew Ma";
  }, []);
  return (
    <div className="about-container">
      ABOUT
      <p>
        I'm a developer and designer from Toronto Metropolitan University,
        striving to create experiences that empower people.
      </p>
    </div>
  );
};

export default About;
