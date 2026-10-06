import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { profile } from "../data/portfolioData";

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Your name is required.";
  if (!form.email.trim()) {
    errors.email = "Your email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.message.trim()) {
    errors.message = "Add a short message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setServerMessage("");
    try {
      const { data } = await axios.post("/api/contact", form);
      setStatus("success");
      setServerMessage(
        data?.message || "Message sent. I will get back to you soon.",
      );
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setServerMessage(
        err?.response?.data?.message ||
          "Something went wrong. Please try again in a moment.",
      );
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        contact.js
      </motion.p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Let's build something.
      </motion.h2>

      <div className="grid lg:grid-cols-5 gap-10">
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-ink-muted leading-relaxed">
            Have a project in mind, an opening on your team, or just want to
            talk shop about the MERN stack? My inbox is open.
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-ink-muted hover:text-amber transition-colors focus-ring rounded"
            >
              <FiMail /> {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ink-muted hover:text-teal transition-colors focus-ring rounded"
            >
              <FiGithub /> {profile.github}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ink-muted hover:text-teal transition-colors focus-ring rounded"
            >
              <FiLinkedin /> {profile.linkedin}
            </a>
          </div>

          <div className="card-surface p-4 font-mono text-xs text-ink-faint">
            <span className="text-teal">status</span>: available for full-time
            roles
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-3 card-surface p-6 sm:p-8 space-y-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs text-ink-muted mb-1.5"
              >
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={`w-full bg-base-panel border rounded-lg px-4 py-2.5 text-ink placeholder:text-ink-faint focus-ring outline-none transition-colors ${
                  errors.name
                    ? "border-red-500"
                    : "border-base-line focus:border-amber/60"
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-xs mt-1.5">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs text-ink-muted mb-1.5"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className={`w-full bg-base-panel border rounded-lg px-4 py-2.5 text-ink placeholder:text-ink-faint focus-ring outline-none transition-colors ${
                  errors.email
                    ? "border-red-500"
                    : "border-base-line focus:border-amber/60"
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-xs mt-1.5">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block font-mono text-xs text-ink-muted mb-1.5"
            >
              Subject <span className="text-ink-faint">(optional)</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Let's collaborate on a project"
              className="w-full bg-base-panel border border-base-line rounded-lg px-4 py-2.5 text-ink placeholder:text-ink-faint focus-ring outline-none focus:border-amber/60 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs text-ink-muted mb-1.5"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about what you're building..."
              className={`w-full bg-base-panel border rounded-lg px-4 py-2.5 text-ink placeholder:text-ink-faint focus-ring outline-none resize-none transition-colors ${
                errors.message
                  ? "border-red-500"
                  : "border-base-line focus:border-amber/60"
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-red-400 text-xs mt-1.5">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:hover:shadow-none"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-teal text-sm"
              role="status"
            >
              <FiCheckCircle /> {serverMessage}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-400 text-sm"
              role="alert"
            >
              <FiAlertCircle /> {serverMessage}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
