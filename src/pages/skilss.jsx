
import css3Icon from "../assets/css3.svg";

export default function Skilss() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP",
    "React",
    "Laravel",
    "MySQL",
    "Git",
  ];

  const icons = {
    HTML5: "html5",
    CSS3: "css3",
    JavaScript: "javascript",
    PHP: "php",
    React: "react",
    Laravel: "laravel",
    MySQL: "mysql",
    Git: "git",
  };

  return (
    <section className="skills section" id="skills">
      <div className="skills-intro">
        <span className="section-label">
          <span>03.</span> SKILLS
        </span>
        <h2>
          My <span className="orange">Toolbox</span>
        </h2>
        <p>
          I work with modern technologies and tools to build efficient,
          scalable, and visually appealing web applications.
        </p>
        <div className="skills-note">
          <span className="orange">◎</span>
          <span>Always learning.<br />Always improving.</span>
          <span className="orange">↗</span>
        </div>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={skill}>
            <span className={`skill-icon skill-${index}`}>
              <img
                src={
                  skill === "CSS3"
                    ? css3Icon
                    : `https://cdn.simpleicons.org/${icons[skill]}`
                }
                alt={skill}
              />
            </span>

            <span className="skill-name">{skill}</span>
            <span className="skill-progress" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
