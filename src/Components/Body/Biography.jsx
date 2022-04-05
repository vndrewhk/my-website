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
        <h2>Andrew Ma -&nbsp;</h2>
        <Typewriter
          options={{
            delay: 75,
            deleteSpeed: 5,
            strings: [
              `<h2>an <span style="color: #27ae60;">engineering student</span>.</h2>`,
              // '<h2>an <span style="color: #27ae60;">engineering student</span>.</h2>',
              '<h2>a <span style="color: #27ae60;">developer</span> and <span style="color: #27ae60;">designer</span>.</h2>',
              '<h2>a <span style="color: #27ae60;">problem solver</span>.</h2>',

              // '<h2>a <span style="color: #27ae60;">designer</span>.</h2>',
              '<h2>an <span style="color: #27ae60;">avid gamer</span>.</h2>',
              '<h2>a <span style="color: #27ae60;">VR enthusiast</span>.</h2>',

              // "an engineering student.",
              // "a developer.",
              // "a designer.",
              // "an avid gamer.",
              // "a VR enthusiast.",
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
    </div>
  );
};

export default Biography;
