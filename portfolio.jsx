import { useState, useEffect } from "react";
import me from "./images/me.jpg";
import BeU from "./images/BeU.png";
import AI_Image_Generator from "./images/AI-Image-Generator.png";

const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Contact"];

// --- Social links ---
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Eyob-bit",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    bg: "#1a1a1a",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eyob-behailu-79aa1837b/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    bg: "#0A66C2",
  },
  {
    name: "X",
    url: "https://x.com/eyobed40",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.633 5.903-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    bg: "#1a1a1a",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mr._.job/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@zy-phora",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    bg: "#FF0000",
  },
  {
    name: "Telegram",
    url: "https://t.me/eyobed40",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    bg: "#26A5E4",
  },
  {
    name: "Email",
    url: "mailto:eyobbehailu33@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    bg: "#e07c2e",
  },
];

// --- Decorative shapes ---
function Diamond({ size = 60, filled = true, style = {} }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: "rotate(45deg)",
        background: filled ? "var(--accent)" : "transparent",
        border: filled ? "none" : "2.5px solid var(--accent)",
        borderRadius: 4,
        opacity: filled ? 1 : 0.7,
        ...style,
      }}
    />
  );
}

function Circle({ size = 80, filled = true, style = {} }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: filled ? "var(--accent-soft)" : "transparent",
        border: filled ? "none" : "2.5px solid var(--accent)",
        ...style,
      }}
    />
  );
}

// --- Navbar ---
function Navbar({ dark, toggleDark }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: 64,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s",
      }}
    >
      <a
        href="#home"
        style={{ textDecoration: "none" }}
      >
        <span style={{ fontWeight: 800, fontSize: 22, color: "var(--text)", letterSpacing: -0.5, cursor: "pointer" }}>
          Eyob<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </a>
      <div style={{ display: "flex", gap: 6, background: "var(--pill-bg)", borderRadius: 50, padding: "6px 12px" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              padding: "6px 14px",
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text)",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "var(--hover)")}
            onMouseLeave={(e) => (e.target.style.background = "transparent")}
          >
            {link}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a
          href="/Eyob_Behailu_CV1.pdf"
          download="Eyob_CV.pdf"
          className="glow-btn"
          style={{
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            borderRadius: 50,
            padding: "10px 20px",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Download CV
        </a>
        <a
          href="https://jami.bio/eyobed40/tip"
          target="_blank"
          rel="noopener noreferrer"
          className="shine-btn glow-btn"
          style={{
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            borderRadius: 50,
            padding: "10px 20px",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            position: "relative",
            overflow: "hidden",
            textDecoration: "none",
          }}
        >
          ☕ Buy me a coffee
        </a>
        <button
          onClick={toggleDark}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
            color: "var(--text)",
            padding: 4,
          }}
          title="Toggle dark mode"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

// --- Hero Section ---
function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 80px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 80, left: 20 }}>
        <Diamond size={72} filled />
      </div>
      <div style={{ position: "absolute", bottom: 60, left: 80 }}>
        <Diamond size={72} filled={false} />
      </div>
      <div style={{ position: "absolute", bottom: 40, right: 60 }}>
        <Circle size={110} filled />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1100, width: "100%", gap: 32 }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
            Welcome to my Portfolio
          </p>
          <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 800, lineHeight: 1.1, color: "var(--text)", margin: "0 0 20px" }}>
            I'm a <span style={{ color: "var(--accent)" }}>Software</span> Developer
          </h1>
          <p style={{ fontSize: 16, color: "var(--subtext)", lineHeight: 1.7, maxWidth: 420, marginBottom: 36 }}>
            Full-Stack Web Developer and Computer Science student at Haramaya University.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <a
              href="#contact"
              className="glow-btn"
              style={{
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: 50,
                padding: "14px 32px",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Let's Connect
            </a>
            <a
              href="/Eyob_Behailu_CV1.pdf"
              download="Eyob_CV.pdf"
              className="glow-btn-outline"
              style={{
                background: "transparent",
                color: "var(--text)",
                border: "2px solid var(--border-strong)",
                borderRadius: 50,
                padding: "14px 32px",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Download CV
            </a>
          </div>
        </div>

        <div style={{ position: "relative", width: 400, height: 440, flexShrink: 0 }}>
          <div style={{ position: "absolute", top: -10, right: -20 }}>
            <Circle size={90} filled />
          </div>
          <div style={{ position: "absolute", bottom: 10, left: -30 }}>
            <Circle size={64} filled={false} style={{ border: "2.5px solid var(--accent)" }} />
          </div>
          <div
            style={{
              width: 340,
              height: 370,
              borderRadius: "50%",
              border: "3px solid var(--border-strong)",
              overflow: "hidden",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "var(--img-bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={me}
              alt="Profile"
              className="profile-photo"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)", transition: "filter 0.4s ease" }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span style={{ fontSize: 80, opacity: 0.4, display: "none" }}>👤</span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 26,
            height: 42,
            border: "2px solid var(--border-strong)",
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          <div
            style={{
              width: 4,
              height: 10,
              background: "var(--text)",
              borderRadius: 10,
              animation: "scrollBounce 1.4s infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

// --- About Section ---
function About() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "5+", label: "Projects Done" },
    { value: "Soon", label: "Happy Clients" },
  ];
  return (
    <section id="about" style={{ padding: "100px 80px", background: "var(--section-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 80, alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>About Me</p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>
            Passionate about crafting great software
          </h2>
          <p style={{ color: "var(--subtext)", lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
            I’m a Full-Stack Developer dedicated to building clean, scalable web applications that deliver great user experiences. Specializing in React, Node.js, and Laravel, I bridge the gap between intuitive front-end design and robust, secure back-end architecture.
          </p>
          <p style={{ color: "var(--subtext)", lineHeight: 1.8, fontSize: 15, marginBottom: 36 }}>
            I approach development with an analytical mindset, focusing on writing optimized code and creating efficient database structures that solve real-world problems.
          </p>
          <a
            href="/Eyob_Behailu_CV1.pdf"
            download="Eyob_CV.pdf"
            className="glow-btn"
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              borderRadius: 50,
              padding: "14px 32px",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Download CV
          </a>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "24px 28px",
                borderRadius: 16,
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: 40, fontWeight: 800, color: "var(--accent)" }}>{s.value}</span>
              <span style={{ fontSize: 16, color: "var(--text)", fontWeight: 600 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Services Section ---
function Services() {
  const services = [
    { icon: "🌐", title: "Web Applications", desc: "I build complete web applications from scratch, combining interactive React front-ends with powerful Node.js/Laravel back-ends." },
    { icon: "💾", title: "Database Optimization", desc: "I structure clean, secure databases that safeguard user information and keep your application running fast under heavy traffic." },
    { icon: "🔌", title: "API Integration", desc: "Seamless third-party integrations, REST APIs, and microservices architecture." },
  ];
  return (
    <section id="services" style={{ padding: "100px 80px", background: "var(--section-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>What I Offer</p>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "var(--text)", marginBottom: 56 }}>Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                padding: "36px 32px",
                borderRadius: 20,
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: "var(--subtext)", lineHeight: 1.7, fontSize: 15, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Portfolio Section ---
function Portfolio() {
  const projects = [
  {
    title: "BeU Delivery - Food Delivery Platform",
    tech: "HTML · CSS · JavaScript · PHP · MySql",
    desc: "Full-stack PHP/MySQL food delivery app featuring multi-role access control.",
    github: "https://github.com/Eyob-bit/BeU",
    live: "#",
    image: BeU,
  },
  {
    title: "AI-Image-Generator",
    tech: "HTML · CSS · JavaScript",
    desc: "Responsive AI Image Generator UI.",
    github: "https://github.com/Eyob-bit/AI-Image-Generator",
    live: "https://ai-image-generator-seven-mu.vercel.app/",
    image: AI_Image_Generator,
  },
];
  return (
    <section id="portfolio" style={{ padding: "100px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>My Work</p>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "var(--text)", marginBottom: 56 }}>Portfolio</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {projects.map((p) => (
            <div
              key={p.title}
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
  style={{
    height: 220,
    overflow: "hidden",
  }}
>
  <img
    src={p.image}
    alt={p.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    }}
  />
</div>
              <div style={{ padding: "24px" }}>
                <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{p.tech}</p>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: "var(--subtext)", lineHeight: 1.6, fontSize: 14, marginBottom: 20 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 12 }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-btn"
                    style={{
                      background: "var(--accent)",
                      color: "#fff",
                      border: "none",
                      borderRadius: 50,
                      padding: "9px 22px",
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-btn-outline"
                    style={{
                      background: "transparent",
                      color: "var(--text)",
                      border: "2px solid var(--border-strong)",
                      borderRadius: 50,
                      padding: "9px 22px",
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact Section (redesigned like screenshot) ---
function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 80px", background: "var(--section-alt)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "var(--text)", marginBottom: 16 }}>
          Let's Work Together
        </h2>
        <p style={{ color: "var(--subtext)", fontSize: 16, lineHeight: 1.7, marginBottom: 56 }}>
          Feel free to contact me for any project or collaboration
        </p>

        {/* Social icons grid */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 64 }}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              <div
                className="social-icon-btn"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: s.bg,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.1)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(224,124,46,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {s.icon}
              </div>
              <span style={{ color: "var(--subtext)", fontSize: 12, fontWeight: 500 }}>{s.name}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 36 }}>
          <p style={{ color: "var(--subtext)", fontSize: 14 }}>© 2026 Eyob Behailu. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer
      style={{
        padding: "48px 80px 32px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        background: "var(--bg)",
      }}
    >
      <a href="#home" style={{ textDecoration: "none" }}>
        <span style={{ fontWeight: 800, fontSize: 28, color: "var(--text)", letterSpacing: -0.5 }}>
          Eyob<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--subtext)", fontSize: 14 }}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ opacity: 0.6 }}>
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        eyobbehailu33@gmail.com
      </div>
    </footer>
  );
}

// --- Main App ---
export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Set favicon to profile photo
    const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.type = "image/jpeg";
    link.rel = "icon";
    link.href = "../images/me.jpg";
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);

  const theme = dark
    ? {
        "--bg": "#111111",
        "--section-alt": "#1a1a1a",
        "--card-bg": "#1e1e1e",
        "--text": "#f5f5f5",
        "--subtext": "#a0a0a0",
        "--accent": "#e07c2e",
        "--accent-soft": "rgba(224,124,46,0.18)",
        "--border": "#2a2a2a",
        "--border-strong": "#555",
        "--pill-bg": "rgba(255,255,255,0.05)",
        "--hover": "rgba(255,255,255,0.08)",
        "--img-bg": "#2a2a2a",
      }
    : {
        "--bg": "#fafafa",
        "--section-alt": "#f4f1ed",
        "--card-bg": "#ffffff",
        "--text": "#1a1a2e",
        "--subtext": "#555",
        "--accent": "#e07c2e",
        "--accent-soft": "rgba(224,124,46,0.12)",
        "--border": "#e5e5e5",
        "--border-strong": "#ccc",
        "--pill-bg": "rgba(0,0,0,0.04)",
        "--hover": "rgba(0,0,0,0.06)",
        "--img-bg": "#e8e8e8",
      };

  return (
    <div
      style={{
        ...theme,
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        background: "var(--bg)",
        color: "var(--text)",
        transition: "background 0.3s, color 0.3s",
        minHeight: "100vh",
      }}
    >
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.4; }
        }
        @keyframes shine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }
        .shine-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: skewX(-20deg);
          animation: shine 4s infinite ease-in-out;
        }
        .glow-btn {
          transition: box-shadow 0.25s, transform 0.2s !important;
        }
        .glow-btn:hover {
          box-shadow: 0 0 18px 4px rgba(224, 124, 46, 0.55), 0 4px 16px rgba(224,124,46,0.3) !important;
          transform: translateY(-2px) !important;
        }
        .glow-btn-outline {
          transition: box-shadow 0.25s, transform 0.2s, border-color 0.2s, color 0.2s !important;
        }
        .glow-btn-outline:hover {
          box-shadow: 0 0 14px 3px rgba(224, 124, 46, 0.35) !important;
          border-color: var(--accent) !important;
          color: var(--accent) !important;
          transform: translateY(-2px) !important;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 10px; }
      `}</style>
      <Navbar dark={dark} toggleDark={() => setDark(!dark)} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      {/* Floating coffee button */}
      <a
        href="https://jami.bio/eyobed40/tip"
        target="_blank"
        rel="noopener noreferrer"
        className="shine-btn glow-btn"
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          borderRadius: 50,
          padding: "14px 22px",
          fontWeight: 700,
          fontSize: 14,
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(224,124,46,0.4)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 200,
          overflow: "hidden",
          textDecoration: "none",
        }}
      >
        ☕ Buy me a coffee
      </a>
    </div>
  );
}