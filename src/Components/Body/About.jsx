import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | Andrew Ma";
  }, []);
  return (
    <div>
      ABOUT
      <p>
        I'm a developer and designer striving to create experiences that empower
        people.
      </p>
    </div>
  );
};

export default About;
