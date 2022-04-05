import { useEffect } from "react";
import "../../styling/css/Biography.css";
import Typewriter from "typewriter-effect";
const Biography = () => {
  useEffect(() => {
    document.title = "Home | Andrew Ma";
  }, []);

  return (
    <div>
      <div className="typewriter-container">
        <div className = "wrap">
          <h2 className="gradient-text">Andrew Ma -&nbsp;</h2>
        </div>
        <Typewriter
          options={{
            cursorClassName: "Typewriter__cursor",
            delay: 75,
            deleteSpeed: 5,
            strings: [
              `<h2>an <span style="color: #27ae60;">engineering student</span>.</h2>`,
              '<h2>a <span style="color: #27ae60;">developer</span> and <span style="color: #27ae60;">designer</span>.</h2>',
              '<h2>a <span style="color: #27ae60;">problem solver</span>.</h2>',
              '<h2>an <span style="color: #27ae60;">avid gamer</span>.</h2>',
              '<h2>a <span style="color: #27ae60;">VR enthusiast</span>.</h2>',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <p>
        I'm a developer and designer striving to create experiences that empower
        people.
      </p>

      <p>
        I'm a <b>Mechanical Engineering</b> student at Ryerson University, and
        currently an engineering intern at <b>ABC Technologies.</b> I'm in love
        with all things React, and an avid enjoyer of Javascript.
      </p>
    </div>
  );
};

export default Biography;
