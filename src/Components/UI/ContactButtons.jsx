import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import "../../styling/css/UI.css";
const ContactButtons = () => {
  return (
    <div className="socials-container">
      <a
        className="contact-button"
        href="https://www.linkedin.com/in/andrew-m-394714136/"
      >
        <LinkedIn fontSize="large" />
      </a>
      <a className="contact-button" href="https://github.com/vndrewhk/">
        <GitHubIcon fontSize="large" />
      </a>
      <a className="contact-button" href="mailto:andrewhkma@gmail.com">
        <EmailIcon fontSize="large" />
      </a>

      {/* <IconButton
        className="contact-button"
        aria-label="Linkedin.com"
        // onClick={() =>
        //   window.open("https://www.linkedin.com/in/andrew-m-394714136/")
        // }
      >
        <LinkedIn fontSize="large" />
      </IconButton>
      <IconButton
        className="contact-button"
        aria-label="Github.com"
        onClick={() => window.open("https://github.com/vndrewhk/")}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton
        className="contact-button"
        aria-label="Github.com"
        onClick={() => window.open("mailto:andrewhkma@gmail.com")}
      >
        <EmailIcon fontSize="large" />
      </IconButton> */}
    </div>
  );
};

export default ContactButtons;
