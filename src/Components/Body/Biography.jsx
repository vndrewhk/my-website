import { useEffect } from "react";

const Biography = () => {
  useEffect(() => {
    document.title = "Home | Andrew Ma";
  }, []);
  return (
    <div>
      <p>
        I'm a developer and designer striving to create experiences that empower
        people.
      </p>
    </div>
  );
};

export default Biography;
