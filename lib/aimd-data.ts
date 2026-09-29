export const projects = [
  { title: "Clinical Signals", summary: "A student-led exploration of machine learning workflows for clinical data interpretation.", status: "In progress", category: "Healthcare AI", image: "/brutalist-website-design-dark-theme.jpg", tags: ["Python", "ML", "Research"] },
  { title: "Vision Lab", summary: "Hands-on experiments in medical imaging, computer vision, and responsible evaluation.", status: "Recruiting", category: "Medical imaging", image: "/abstract-motion-graphics-orange-shapes.jpg", tags: ["Computer vision", "PyTorch"] },
  { title: "AIMD Studio", summary: "A collaborative space for prototyping useful AI applications across disciplines.", status: "In progress", category: "Applied AI", image: "/ecommerce-website-modern-dark-design.jpg", tags: ["Full-stack", "AI tools"] },
]

export const officers = [
  { name: "AIMD Executive Team", role: "Student-led organization", bio: "Current officer profiles will be published here as the 2026 team is confirmed.", image: "/creative-director-headshot.png" },
]

export const upcomingEvent = { title: "AIMD events are coming soon", type: "Community update", date: "Stay tuned", details: "Workshops, research discussions, and build sessions will be announced on the AIMD community channels." }

export const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/events" },
  { label: "Officers", href: "/officers" },
  { label: "About", href: "/about" },
]

export const joinHref = "https://aimdutd.org/"

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="intro-copy">{children}</div></section>
}

import type React from "react"
import Link from "next/link"
export function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return <article className="project-card"><div className="project-image"><img src={project.image} alt="" /><span className="status">{project.status}</span></div><div className="project-info"><div><p className="eyebrow">{String(index + 1).padStart(2, "0")} / {project.category}</p><h3>{project.title}</h3><p>{project.summary}</p></div><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>
}
export function Footer() { return <footer><div><p className="eyebrow">AIMD · UT DALLAS</p><h2>Your next idea<br /><em>starts here.</em></h2></div><a className="button button-light" href={joinHref} target="_blank" rel="noreferrer">Join AIMD ↗</a><p className="footer-note">Artificial Intelligence in Medicine & Diagnostics<br />Richardson, Texas · 2026</p></footer> }
export function ButtonLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) { return <Link href={href} className={`button ${light ? "button-light" : ""}`}>{children}</Link> }
export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) { return <div className="section-label"><span>{number}</span><span>{children}</span></div> }
export { Link }
