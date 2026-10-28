
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects({ limit = 3 }) {
  const sectionRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6acea62cf338359cf1c39cb3.mockapi.io/v1ismail/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useGSAP(
    () => {
      if (!projects.length) return;

      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".project-card", {
          y: 35,
          autoAlpha: 0,
          scale: 0.96,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects",
            start: "top 85%",
            once: true,
          },
        });
      });

      return () => motion.revert();
    },
    {
      scope: sectionRef,
      dependencies: [projects],
      revertOnUpdate: true,
    }
  );

  const limitedProjects = projects.slice(0, limit);

  return (
    <section
      className="projects section"
      id="projects"
      ref={sectionRef}
    >
      <div className="section-heading">
        <div>
          <span className="section-label">
            <span>04.</span> Projects
          </span>

          <h2>
            Selected <span className="orange">Work.</span>
          </h2>
        </div>

        <a href="#contact" className="text-link">
          HAVE A PROJECT? <span>↗</span>
        </a>
      </div>

      <div className="project-grid">
        {limitedProjects.map((project, index) => (
          <article
            className="project-card"
            key={project.id}
            style={{ "--card-index": index }}
          >
            <div className="project-preview">
              <div className="project-preview-glow" />

              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {project.image ? (
                <img
                  className="project-image"
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              ) : (
                <div className="mock-window">
                  <div className="mock-window-top">
                    <div className="mock-dots">
                      <i />
                      <i />
                      <i />
                    </div>
                    <span>PROJECT_PREVIEW</span>
                  </div>

                  <div className="mock-window-content">
                    <div className="mock-line mock-line-title" />
                    <div className="mock-block" />
                    <div className="mock-lines">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="mock-mini-cards">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              )}

              <span className="project-open">↗</span>
            </div>

            <div className="project-info">
              <div className="project-info-text">
                <span className="project-index">
                  PROJECT_{String(index + 1).padStart(2, "0")}
                </span>

                <h3>{project.title}</h3>
                <p>{project.type}</p>
              </div>

              <a
                className="project-link"
                href={project.link_web || "#projects"}
                target={project.link_web ? "_blank" : undefined}
                rel={
                  project.link_web
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={`View ${project.title}`}
                onClick={
                  !project.link_web
                    ? (event) => event.preventDefault()
                    : undefined
                }
              >
                <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {loading && (
        <p className="projects-loading">Loading projects...</p>
      )}

      {!loading && limitedProjects.length === 0 && (
        <p className="projects-loading">
          No projects found.
        </p>
      )}
    </section>
  );
}
