export default function ContactSlide() {
  return (
    <div className="slide" id="slide-contact">
      <div className="content">
        <h1>Contact</h1>
        <div className="block contact-block">
          <span>
            <a href="https://www.linkedin.com/in/luqasward" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin" /> LinkedIn
            </a>
          </span>
          <span>
            <a href="https://github.com/Wardiusz" target="_blank" rel="noreferrer">
              <i className="fa fa-github" /> Github
            </a>
          </span>
          <span>
            <a href="mailto:luqasward@protonmail.com" target="_blank" rel="noreferrer">
              <i className="fa fa-envelope" /> Mail
            </a>
          </span>
          <span>
            <a
              href="https://discord.com/users/307942044855304193"
              target="_blank"
              rel="noreferrer"
              className="dc"
            >
              <i className="fa-brands fa-discord" />
              <span>Discord&nbsp;</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
