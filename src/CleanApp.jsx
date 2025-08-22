import { useEffect, useState } from "react";

const profile = {
  name: "Hardik Dhawan",
  headlineTop: "Shaping",
  headlineRest: "Code into Real Projects that Deliver Results",
  sub: "Hi, I’m Hardik, a developer based in India with a passion for code.",
  email: "dhawanhardik180@gmail.com",
  github: "https://github.com/Hardikdhawan2904",
  linkedin: "https://linkedin.com/in/hardik-dhawan-451b73239",
};

function Starfield() {
  useEffect(() => {
    const canvas = document.getElementById("starfield");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, raf;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const STAR_COUNT = 180;
    const stars = [];

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const init = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 0.7 + 0.3,
          r: Math.random() * 1.2 + 0.15,
          vx: (Math.random() * 0.35 + 0.05) * (Math.random() < 0.5 ? 1 : -1),
          vy: Math.random() * 0.18 + 0.02,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.x += s.vx * s.z;
        s.y += s.vy * s.z;
        if (s.x < -5) s.x = w + 5;
        if (s.x > w + 5) s.x = -5;
        if (s.y > h + 5) s.y = -5;
        ctx.globalAlpha = 0.55 * s.z + 0.25;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => { resize(); init(); };
    resize(); init(); draw();
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas id="starfield" className="starfield" aria-hidden="true" />;
}

function Squares() {
  const items = Array.from({ length: 18 });
  return (
    <div className="squares" aria-hidden="true">
      {items.map((_, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.25}s` }} />
      ))}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <header className="nav">
      <div className="container nav__row">
        <a href="#hero" className="brand">{profile.name}</a>

        <nav className="nav__links">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <a href="#contact" className="btn btn--pill">Contact me</a>

        <button className="nav__burger" onClick={() => setOpen(s => !s)} aria-label="menu">☰</button>
        {open && (
          <div className="nav__mobile">
            {links.map(l => <a key={l.href} onClick={()=>setOpen(false)} href={l.href}>{l.label}</a>)}
            <a onClick={()=>setOpen(false)} href="#contact" className="btn btn--pill">Contact me</a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const [imgOk, setImgOk] = useState(false);
  return (
    <section id="hero" className="hero container">
      <Squares />
      <div className="hero__left">
        <h1 className="hero__title">
          <span className="hero__highlight">{profile.headlineTop}</span>{" "}
          <span className="hero__code">{"</>"} </span>
          {profile.headlineRest}
        </h1>
        <p className="hero__sub">{profile.sub}</p>

        <div className="hero__actions">
          <a className="btn" href="#work">See my work</a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="hero__right">
        <img
          src="/desk.png"
          alt="workspace"
          className={`hero__img ${imgOk ? "hero__img--show" : ""}`}
          onLoad={() => setImgOk(true)}
          onError={() => setImgOk(false)}
        />
        {!imgOk && <div className="hero__img--fallback" />}
      </div>
    </section>
  );
}

function Section({ id, title }) {
  return (
    <section id={id} className="section container">
      <h2 className="section__title">{title}</h2>
      <p className="muted">Content coming soon…</p>
    </section>
  );
}

export default function CleanApp() {
  return (
    <div className="app">
      <Starfield />
      <Nav />
      <Hero />
      <Section id="work" title="Work" />
      <Section id="experience" title="Experience" />
      <Section id="skills" title="Skills" />
      <Section id="testimonials" title="Testimonials" />
      <Section id="contact" title="Contact" />
      <footer className="footer">
        <div className="container muted">
          © {new Date().getFullYear()} {profile.name}. Built with React.
        </div>
      </footer>
    </div>
  );
}
