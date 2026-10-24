import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowUp, ArrowUpRight, BrainCircuit, CircleDot, Code2, Cpu,
  ExternalLink, Github, Globe2, Linkedin, Mail, Menu, Rocket, Satellite, Sparkles,
  Target, Terminal, X, Zap,
} from 'lucide-react';
import { codingProfiles, profile, projects, skills } from '@/data/portfolio';

const navItems = [
  { label: 'About', id: 'about' }, { label: 'Mission', id: 'mission' },
  { label: 'Skills', id: 'skills' }, { label: 'Projects', id: 'projects' },
  { label: 'Coding profiles', id: 'profiles' }, { label: 'Contact', id: 'contact' },
];

const roles = ['Aspiring Software Engineer', 'Web Developer', 'C++ & DSA Learner', 'Vibe Coding Enthusiast', 'Technology Explorer'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const roleTimer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2600);
    const scrollListener = () => setShowTop(window.scrollY > 620);
    window.addEventListener('scroll', scrollListener);
    return () => { window.clearInterval(roleTimer); window.removeEventListener('scroll', scrollListener); };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="navbar-wrap">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark"><span>SK</span></span><span>saubhagya<span className="brand-dot">.</span></span></a>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            {navItems.map((item) => <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}
            <a className="nav-cta" href={`mailto:${profile.email}`} onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow reveal"><span className="pulse-dot" /> Available for learning, building & collaboration</div>
            <p className="hero-kicker reveal delay-1">Hello, I'm</p>
            <h1 className="reveal delay-1">Saubhagya <span>Kumar</span><i>.</i></h1>
            <div className="role-line reveal delay-2"><span className="role-label">Currently</span><strong key={roles[roleIndex]}>{roles[roleIndex]}</strong></div>
            <p className="hero-description reveal delay-2">Turning ideas into code, and code into <em>meaningful experiences.</em></p>
            <div className="hero-actions reveal delay-3"><a className="button button-primary" href="#projects">Explore my projects <ArrowDown size={17} /></a><a className="button button-ghost" href="#contact">Contact me <ArrowUpRight size={17} /></a></div>
            <div className="hero-meta reveal delay-3"><span>Learning</span><CircleDot size={10} /><span>Building</span><CircleDot size={10} /><span>Improving</span><span className="meta-divider" /><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a></div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="photo-frame"><img src={profile.photo} alt="Portrait of Saubhagya Kumar" /><div className="photo-caption"><span className="caption-line" /><span>CSIT / 03</span></div></div>
            <div className="float-card float-card-top"><span className="float-icon cyan"><Code2 size={17} /></span><span><b>Building</b><small>one project at a time</small></span></div>
            <div className="float-card float-card-bottom"><span className="float-icon amber"><Target size={17} /></span><span><b>Future goal</b><small>Software Engineer @ DRDO</small></span></div>
            <span className="visual-label">01 <span>/</span> 05</span>
          </div>
        </section>

        <section id="about" className="section container about-section">
          <div className="section-heading"><p className="section-index">01 — About me</p><h2>A curious mind,<br /><span>always in motion.</span></h2></div>
          <div className="about-grid"><div className="about-copy"><p className="lead">Hey, I'm Saubhagya — a B.Tech student pursuing Computer Science and Information Technology at GL Bajaj Institute of Technology and Management, Greater Noida.</p><p>Currently in my third semester, I'm strengthening my programming fundamentals and exploring software development through hands-on projects. I enjoy creating websites, experimenting with AI-powered vibe coding tools, practising Data Structures and Algorithms, and turning ideas into functional applications.</p><p>My long-term ambition is to become a Software Engineer at DRDO, where I hope to contribute to meaningful technological research and development.</p><div className="quote-line"><Sparkles size={18} /><span>Curiosity is my favourite development tool.</span></div></div><div className="info-card"><div className="info-card-head"><span>PROFILE_DATA</span><span className="live-chip"><span /> live</span></div><div className="info-list"><InfoRow label="Name" value={profile.name} /><InfoRow label="College" value={profile.college} /><InfoRow label="Location" value={profile.location} /><InfoRow label="Degree" value={`${profile.degree} · ${profile.branch}`} /><InfoRow label="Semester" value={profile.semester} /><InfoRow label="Email" value={profile.email} href={`mailto:${profile.email}`} /></div></div></div>
        </section>

        <section id="mission" className="mission-section"><div className="container mission-inner"><div className="mission-copy"><p className="section-index">02 — Career ambition</p><h2>Engineering<br /><span>for impact.</span></h2><p>I'm working toward becoming a software engineer who can solve complex technical problems and contribute to impactful technology. My current focus is strengthening my programming fundamentals, improving my DSA skills, and developing practical projects that help me grow as a developer.</p><div className="mission-badge"><Satellite size={18} /><span>Long-term direction</span><strong>DRDO / Software Engineering</strong></div></div><div className="roadmap"><div className="roadmap-head"><span>THE ROAD AHEAD</span><span>01 — 05</span></div>{['Strengthen C++ and programming fundamentals.', 'Improve Data Structures and Algorithms problem-solving.', 'Build useful software projects and applications.', 'Develop strong computer science and software engineering fundamentals.', 'Explore internships, research opportunities, and relevant future DRDO career pathways.'].map((step, index) => <div className="roadmap-step" key={step}><span className={`step-num ${index === 0 ? 'active' : ''}`}>0{index + 1}</span><span>{step}</span>{index === 0 && <Zap size={15} />}</div>)}</div></div></section>

        <section id="skills" className="section container"><div className="section-heading split-heading"><div><p className="section-index">03 — Capabilities</p><h2>Tools for the<br /><span>journey ahead.</span></h2></div><p className="heading-note">The toolkit is growing. Every project adds another layer to the way I think, build, and solve.</p></div><div className="skills-grid">{skills.map((skill, index) => <div className={`skill-card ${skill.accent}`} key={skill.label}><div className="skill-top"><span className="skill-number">0{index + 1}</span><span className="skill-icon">{index === 0 ? <Terminal size={20} /> : index === 1 ? <Globe2 size={20} /> : index === 2 ? <BrainCircuit size={20} /> : <Cpu size={20} />}</span></div><h3>{skill.label}</h3><div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div><p>{index < 2 ? 'Practised' : 'Learning & exploring'}</p></div>)}</div></section>

        <section id="projects" className="section container projects-section"><div className="section-heading split-heading"><div><p className="section-index">04 — Selected work</p><h2>Things I've<br /><span>built so far.</span></h2></div><p className="heading-note">A small collection of experiments, assignments, and ideas brought to life on the web.</p></div><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div></section>

        <section id="profiles" className="section container profiles-section"><div className="profile-intro"><div><p className="section-index">05 — Keep practising</p><h2>Sharpening my<br /><span>problem-solving skills.</span></h2></div><p>Progress is built one problem at a time. These are the spaces where I practise, learn, and keep showing up.</p></div><div className="profiles-grid">{codingProfiles.map((codingProfile, index) => <a className="profile-card" href={codingProfile.url} target={codingProfile.url.startsWith('http') ? '_blank' : undefined} rel={codingProfile.url.startsWith('http') ? 'noreferrer' : undefined} key={codingProfile.name} onClick={(event) => { if (codingProfile.url === '#') event.preventDefault(); }}><span className="profile-logo">{index === 0 ? 'LC' : index === 1 ? 'C360' : index === 2 ? 'GfG' : 'HR'}</span><span className="profile-card-body"><strong>{codingProfile.name}</strong><small>{codingProfile.description}</small></span><ArrowUpRight size={18} /></a>)}</div><div className="source-bar"><div><span className="section-index">Built in public</span><p>Explore the source behind this portfolio and follow the journey as it grows.</p></div><a className="source-link" href={profile.portfolioRepository} target="_blank" rel="noreferrer"><Github size={17} /> View portfolio repository <ArrowUpRight size={15} /></a></div></section>

        <section className="interests-section"><div className="container"><div className="section-heading"><p className="section-index">06 — Beyond the code</p><h2>What keeps me<br /><span>curious.</span></h2></div><div className="interest-grid"><Interest icon={<Sparkles size={20} />} title="Vibe Coding" text="Experimenting with AI-powered development tools to transform ideas into working applications while learning about the code behind them." /><Interest icon={<Globe2 size={20} />} title="App & Web Development" text="Designing and building digital experiences, exploring new ideas, and learning through practical projects." /><Interest icon={<BrainCircuit size={20} />} title="Problem Solving" text="Practising C++ and DSA to improve logical thinking and develop stronger programming skills." /><Interest icon={<Rocket size={20} />} title="Space & Technology" text="Exploring astronomy, asteroid-related technology, and software in scientific fields." /></div></div></section>

        <section id="contact" className="contact-section"><div className="container contact-inner"><div><p className="section-index">07 — Let's connect</p><h2>Have an idea?<br /><span>Let's talk.</span></h2></div><div className="contact-right"><p>I'm always interested in learning, exploring new ideas, and building useful things. Whether it's a project collaboration, a technical discussion, or an opportunity to grow, feel free to connect.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={20} /></a><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={`mailto:${profile.email}`}><Mail size={17} /> Email me</a></div></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark"><span>SK</span></span><span>saubhagya<span className="brand-dot">.</span></span></a><p>Learning. Building. Improving.</p><span>© {new Date().getFullYear()} Saubhagya Kumar</span></div></footer>
      {showTop && <button className="back-top" onClick={scrollToTop} aria-label="Back to top"><ArrowUp size={17} /></button>}
    </div>
  );
}

function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) { return <div className="info-row"><span>{label}</span>{href ? <a href={href}>{value}</a> : <strong>{value}</strong>}</div>; }
function Interest({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <article className="interest-card"><div className="interest-icon">{icon}</div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="interest-arrow" size={17} /></article>; }
function ProjectCard({ project }: { project: (typeof projects)[number] }) { return <article className="project-card"><div className={`project-art ${project.theme}`}><span className="project-art-number">{project.number}</span><div className="project-art-lines" /><div className="project-art-mark">{project.mark}</div><span className="project-art-label">{project.theme === 'space' ? 'ORBITAL / DATA' : project.theme === 'cricket' ? 'PLAY / CREATE' : project.theme === 'books' ? 'READ / DISCOVER' : 'PLAN / GROW'}</span></div><div className="project-content"><div className="project-meta"><span>{project.eyebrow}</span><span className={project.status === 'Concept Stage' ? 'concept-status' : ''}><span className="status-dot" /> {project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><div className="tech-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><a className="project-link" href={project.url} target={project.url.startsWith('http') ? '_blank' : undefined} rel={project.url.startsWith('http') ? 'noreferrer' : undefined}>{project.status === 'Concept Stage' ? 'View concept' : 'View live project'} <ExternalLink size={14} /></a></div></div></article>; }

export default App;
