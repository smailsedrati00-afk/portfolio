
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const API_URL =
    "https://6acea62cf338359cf1c39cb3.mockapi.io/v1ismail/contact";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      setLoading(true);
      setStatus("");

      await axios.post(API_URL, data);

      setStatus("Message envoyé avec succès !");
      form.reset();
    } catch (error) {
      console.error("Erreur :", error);
      setStatus("Erreur lors de l'envoi du message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-copy">
        <span className="section-label">
          <span>05.</span> CONTACT
        </span>

        <h2>
          Let's Work
          <br />
          <span className="orange">Together</span>
        </h2>

        <p>
          Have a project in mind, a question, or just want to say hi?
          I'm always open to new opportunities and exciting collaborations.
        </p>

        <div className="contact-details">
          <a href="mailto:smailsedrati00@gmail.com">
            <span className="contact-detail-icon">✉</span>
            <span><b>Email</b><small>smailsedrati00@gmail.com</small></span>
          </a>
          <div>
            <span className="contact-detail-icon">⌖</span>
            <span><b>Location</b><small>Rabat, Morocco</small></span>
          </div>
          <div className="contact-socials">
            <span className="contact-detail-icon">✳</span>
            <span>
              <b>Socials</b>
              <small>
                <a href="https://github.com/smailsedrati00-afk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/ismail-sedrati-01a0b6352/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </small>
            </span>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Your email
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          Subject
          <input
            name="subject"
            placeholder="Project or internship"
            required
          />
        </label>

        <label>
          Your message
          <textarea
            name="message"
            placeholder="Tell me about it..."
            rows="3"
            required
          />
        </label>

        <button
          type="submit"
          className="button button-orange"
          disabled={loading}
        >
          {loading ? "SENDING..." : "SEND MESSAGE ↗"}
        </button>

        {status && <p role="status">{status}</p>}
      </form>
    </section>
  );
}
