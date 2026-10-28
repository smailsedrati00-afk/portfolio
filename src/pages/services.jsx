

export default function Services() {
  const services = [
    { icon: "</>", title: "Web Development", text: "Modern, responsive websites and web applications." },
    { icon: "◎", title: "UI / UX Design", text: "Clear, user-focused interfaces with thoughtful layouts." },
    { icon: "⚙", title: "Backend Development", text: "Server-side features built with Laravel and PHP." },
    { icon: "▣", title: "Responsive Design", text: "Experiences that adapt smoothly to every screen." },
    { icon: "◉", title: "Database Management", text: "Structured data and database integration with MySQL." },
    { icon: "↗", title: "API Integration", text: "Connecting web applications with useful services and APIs." },
  ];

  return (
    <section className="services section" id="services">
      <div className="services-intro">
        <span className="section-label"><span>02.</span> SERVICES</span>
        <h2>What <span className="orange">I Do</span></h2>
        <p>
          I provide modern and effective solutions for your digital needs.
          From web development to clean interfaces, I help turn ideas into
          useful experiences.
        </p>
        <a href="#contact" className="text-link">LET'S TALK ↗</a>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <span className="card-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
