const PROJECTS = [
  {
    name: 'Pandus',
    url:  'https://github.com/Wardiusz/Pandus',
    description: (
      <>
        Bot made in <b>Java</b> using <b>JDA</b> for <b>Discord</b> which handles
        everything related to managing server and his members. Provides custom commands
        like playing music. Easy access to settings and information via{' '}
        <b><a href="#" target="_blank" rel="noreferrer">this website</a></b>
      </>
    ),
  },
  {
    name: 'Job Application Tracker',
    url:  'https://github.com/Wardiusz/JobApplicationTracker',
    description: (
      <>
        Full-stack web application written in <b>Java Spring Boot</b> to systematically track job applications.
        It uses <b>Spring Security</b> with stateless JWT authentication system and a secure OTP email verification 
        and <b>PostgreSQL</b> database with Flyway migrations using <b>Spring Data</b> JPA with <b>Hibernate</b>.
      </>
    ),
  },
  {
    name: 'Discord Quest Completer',
    url:  'https://github.com/Wardiusz/DCQuestCompleter',
    description: (
      <>
        Simple GUI application written in <b>C++</b> and <b>Qt</b> that allows you to
        complete quests on <b>Discord</b> without the need of installing the games.
      </>
    ),
  },
  {
    name: 'Battleships',
    url:  'https://github.com/Wardiusz/Battleships',
    description: (
      <>
        Game made in <b>Java</b> using <b>Spring</b>. Classic battle ships game —
        sink all of the opponents ships to win. Play VS. Player or Bot.{' '}
        Learn more <b><a href="https://en.wikipedia.org/wiki/Battleship_(game)" target="_blank" rel="noreferrer">here</a></b>.
      </>
    ),
  },
];

export default function ProjectsSlide() {
  return (
    <div className="slide" id="slide-projects">
      <div className="content">
        <h1>Projects</h1>
        <div className="block grid">
          {PROJECTS.map((project) => (
            <span key={project.name}>
              <a class="project-link" href={project.url} className="xl" target="_blank" rel="noreferrer">
                {project.name}
              </a>
              <hr></hr>
              <strong>{project.description}</strong>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
