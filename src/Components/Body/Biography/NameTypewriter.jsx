import "../../../styling/css/Biography.css";
import Typewriter from "typewriter-effect";
import { Typography } from "@mui/material";

const NameTypewriter = () => {
  return (
    <div className="typewriter-container">
      <div className="wrap">
        <Typography className="gradient-text" variant="h2" component="h2">
          Andrew Ma
        </Typography>
        <Typography variant="h2" component="h2">
          &nbsp;-&nbsp;
        </Typography>
      </div>
      <Typewriter
        options={{
          cursorClassName: "Typewriter__cursor",
          delay: 75,
          deleteSpeed: 5,
          strings: [
            '<h2>a <span style="color: #27ae60;">developer</span> and <span style="color: #27ae60;">designer</span>.</h2>',
            `<h2><span style="color: #27ae60;">engineering @ TMU</span>.</h2>`,
            '<h2>a <span style="color: #27ae60;">problem solver</span>.</h2>',
            '<h2>an <span style="color: #27ae60;">avid gamer</span>.</h2>',
            '<h2>a <span style="color: #27ae60;">VR enthusiast</span>.</h2>',
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default NameTypewriter;
