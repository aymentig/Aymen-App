'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink, Music2, Code2 } from 'lucide-react';

type Project = { title: string; blurb: string; tags: string[]; href: string; };

export default function HomePage() {
  const [dark, setDark] = useState(true);
  const projects: Project[] = useMemo(() => [
    { title: 'WeeklyBuddy (AI meeting prep bot)', blurb: 'Slack-based AI assistant that gathers weekly updates, flags blockers, and suggests meetings. Python • Slack Bolt • OpenAI API', tags: ['Python','Slack','OpenAI','SaaS'], href: '#' },
    { title: 'Cute Bunny Game (for my partner)', blurb: 'Cozy mini-game experiment exploring 3D/2D hybrid vibes and lightweight questing.', tags: ['JS','Game Dev','React'], href: '#' },
    { title: 'Data Quality Toolkit @ Rapid7 (intern)', blurb: 'Fuzzy matching and hygiene checks to improve lead/account integrity.', tags: ['Data','SFDC','FuzzyMatch'], href: '#' },
    { title: 'Algorithms Cheatcards (DS 320/CS 440)', blurb: 'Compact study notes + visualizations for divide & conquer, DP, graphs, and flow.', tags: ['Algorithms','Study','LaTeX'], href: '#' },
  ], []);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className='min-h-screen transition-colors duration-300'>
        <header className='sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-zinc-800'>
          <div className='container py-3 flex items-center justify-between'>
            <a href='#home' className='font-semibold tracking-tight text-xl'>Aymen Tiguite</a>
            <nav className='hidden md:flex gap-6 text-sm'>
              <a href='#about' className='hover:opacity-80'>About</a>
              <a href='#case-studies' className='hover:opacity-80'>Case Studies</a>
              <a href='#projects' className='hover:opacity-80'>Projects</a>
              <Link href='/blog' className='hover:opacity-80'>Blog</Link>
              <a href='#contact' className='hover:opacity-80'>Contact</a>
            </nav>
            <button onClick={() => setDark(d => !d)} className='btn'>
              {dark ? <span className='inline-flex items-center gap-2'><Sun size={16}/> Light</span> : <span className='inline-flex items-center gap-2'><Moon size={16}/> Dark</span>}
            </button>
          </div>
        </header>

        <section id='home' className='container pt-16 pb-10'>
          <div className='rounded-3xl p-8 md:p-12 border border-zinc-800 bg-gradient-to-br from-zinc-900 to-transparent'>
            <p className='text-xs uppercase tracking-[0.2em] text-zinc-400'>Portfolio</p>
            <h1 className='mt-2 text-4xl md:text-6xl font-black leading-tight'>
              Hi, I’m <span className='bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-300'>Aymen</span>.
            </h1>
            <p className='mt-4 max-w-2xl text-zinc-300'>
              Data Science @ Boston University • Hack.Diversity intern • aspiring AI engineer. I also make dark, emotional tracks as <span className='font-semibold'>k1lltr4sh</span>.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <a href='/resume.pdf' className='btn btn-primary inline-flex items-center gap-2'><Code2 size={16}/> Download Resume</a>
              <a href='mailto:aymentig@bu.edu' className='btn btn-ghost inline-flex items-center gap-2'><Mail size={16}/> Email Me</a>
              <a href='https://github.com/aymentig' target='_blank' rel='noreferrer' className='btn btn-ghost inline-flex items-center gap-2'><Github size={16}/> GitHub</a>
              <a href='https://www.linkedin.com/in/aymen-tiguite/' target='_blank' rel='noreferrer' className='btn btn-ghost inline-flex items-center gap-2'><Linkedin size={16}/> LinkedIn</a>
            </div>
          </div>
        </section>

        <section id='about' className='container py-14'>
          <div className='grid md:grid-cols-3 gap-8 items-start'>
            <div className='md:col-span-2'>
              <h2 className='text-2xl md:text-3xl font-bold'>About me</h2>
              <p className='mt-4 leading-relaxed text-zinc-300'>
                I’m a senior Data Science major at Boston University building practical AI tools and clean data pipelines.
                I care about systems that make teams faster: from auto‑summarizing weekly updates to smart meeting prep.
                Outside work, I write and produce music that blends love, obsession, and horrorcore energy.
              </p>
              <p className='mt-4 leading-relaxed text-zinc-300'>
                I’m currently exploring:<br/> — agentic workflows, retrieval, and evals<br/> — containerized dev (Podman/Docker)<br/> — efficient study patterns for algorithms & math
              </p>
            </div>
            <aside className='card'>
              <h3 className='font-semibold'>Quick facts</h3>
              <ul className='mt-3 space-y-2 text-sm text-zinc-300'>
                <li>📍 Boston, MA</li>
                <li>🎓 BU ’26 — Data Science</li>
                <li>🧪 Hack.Diversity alum</li>
                <li>🎧 Artist name: k1lltr4sh</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id='case-studies' className='container py-14'>
          <h2 className='text-2xl md:text-3xl font-bold'>Case studies</h2>
          <p className='mt-2 text-sm text-zinc-400'>Short, quantified stories of impact. Replace the brackets with your numbers.</p>
          <div className='mt-6 grid gap-6 md:grid-cols-2'>
            <article className='card'>
              <h3 className='text-lg font-semibold'>WeeklyBuddy — AI meeting prep bot</h3>
              <p className='mt-2 text-sm text-zinc-300'>Automates weekly updates and suggests meetings from Slack activity.</p>
              <ul className='mt-3 list-disc pl-5 text-sm text-zinc-300 space-y-1'>
                <li><span className='font-medium'>Outcome:</span> Cut prep time by [..]% for [N] teammates; raised meeting effectiveness score by [..] pts.</li>
                <li><span className='font-medium'>Stack:</span> Python, Slack Bolt, FastAPI, OpenAI, SQLite/Postgres, Docker</li>
                <li><span className='font-medium'>Links:</span> <a className='underline' href='#'>demo</a> · <a className='underline' href='#'>repo</a> · <Link className='underline' href='/blog'>writeup</Link></li>
              </ul>
            </article>
            <article className='card'>
              <h3 className='text-lg font-semibold'>Data Quality Toolkit — dedupe & fuzzy match</h3>
              <p className='mt-2 text-sm text-zinc-300'>CLI + library to auto-detect dupes/mismatches between SFDC and vendor data.</p>
              <ul className='mt-3 list-disc pl-5 text-sm text-zinc-300 space-y-1'>
                <li><span className='font-medium'>Outcome:</span> Boosted match precision to [..]% and recall to [..]% on [N]-record benchmark.</li>
                <li><span className='font-medium'>Stack:</span> Python, pandas, rapidfuzz, DuckDB, Typer, pytest</li>
                <li><span className='font-medium'>Links:</span> <a className='underline' href='#'>demo</a> · <a className='underline' href='#'>repo</a> · <a className='underline' href='#'>benchmark</a></li>
              </ul>
            </article>
            <article className='card md:col-span-2'>
              <h3 className='text-lg font-semibold'>A* Stealth Agent — pathfinding with vision cones</h3>
              <p className='mt-2 text-sm text-zinc-300'>Extends A* to avoid enemy line-of-sight; visualizes plans over time.</p>
              <ul className='mt-3 list-disc pl-5 text-sm text-zinc-300 space-y-1'>
                <li><span className='font-medium'>Outcome:</span> Reduced detection events by [..]% vs. baseline; path cost within [±..]% of optimal.</li>
                <li><span className='font-medium'>Stack:</span> Java, React canvas/TS, vite</li>
                <li><span className='font-medium'>Links:</span> <a className='underline' href='#'>demo</a> · <a className='underline' href='#'>repo</a> · <Link className='underline' href='/blog'>writeup</Link></li>
              </ul>
            </article>
          </div>
        </section>

        <section id='projects' className='container py-14'>
          <div className='flex items-end justify-between'>
            <h2 className='text-2xl md:text-3xl font-bold'>Projects</h2>
            <a href='https://github.com/aymentig' target='_blank' rel='noreferrer' className='text-sm inline-flex items-center gap-1 opacity-80 hover:opacity-100'>
              View all <ExternalLink size={14}/>
            </a>
          </div>
          <div className='mt-6 grid gap-6 md:grid-cols-2'>
            {projects.map((p) => (
              <article key={p.title} className='card'>
                <h3 className='text-lg font-semibold'>{p.title}</h3>
                <p className='mt-2 text-sm text-zinc-300'>{p.blurb}</p>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {p.tags.map((t) => (
                    <span key={t} className='rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-300'>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id='music' className='container py-14'>
          <h2 className='text-2xl md:text-3xl font-bold'>Music</h2>
          <div className='mt-6 grid gap-6 md:grid-cols-2'>
            <div className='card'>
              <div className='flex items-center gap-2 text-sm opacity-80'>
                <Music2 size={16}/> Latest drop
              </div>
              <h3 className='mt-2 text-lg font-semibold'>“Play Pretend” — k1lltr4sh</h3>
              <p className='mt-2 text-sm text-zinc-300'>Dark club energy with obsessive lyrics. Stream soon.</p>
              <div className='mt-4 flex gap-3'>
                <a href='#' className='btn'>SoundCloud</a>
                <a href='#' className='btn'>YouTube</a>
                <a href='#' className='btn'>Spotify</a>
              </div>
            </div>
            <div className='card'>
              <h3 className='text-lg font-semibold'>Show visuals</h3>
              <p className='mt-2 text-sm text-zinc-300'>Drop cover art, a short bio, and links to sets/live clips here.</p>
              <ul className='mt-3 list-disc pl-5 text-sm text-zinc-300'>
                <li>Embed a music player or Canvas‑style loop</li>
                <li>Link tree for collabs, beats, booking</li>
                <li>Fanmail / newsletter signup</li>
              </ul>
            </div>
          </div>
        </section>

        <section id='contact' className='container py-14'>
          <div className='rounded-3xl border border-zinc-800 p-8 md:p-10 bg-gradient-to-tr from-transparent to-zinc-900'>
            <h2 className='text-2xl md:text-3xl font-bold'>Let’s build something</h2>
            <p className='mt-2 text-zinc-300 max-w-2xl'>I’m open to internships, part‑time engineering gigs, and collabs. The fastest way to reach me is email.</p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <a href='mailto:aymentig@bu.edu' className='btn inline-flex items-center gap-2'><Mail size={16}/> aymentig@bu.edu</a>
              <a href='https://github.com/aymentig' target='_blank' rel='noreferrer' className='btn inline-flex items-center gap-2'><Github size={16}/> @aymentig</a>
              <a href='https://www.linkedin.com/in/aymen-tiguite/' target='_blank' rel='noreferrer' className='btn inline-flex items-center gap-2'><Linkedin size={16}/> LinkedIn</a>
            </div>
          </div>
        </section>

        <footer className='container py-10 text-xs text-zinc-500'>
          © {new Date().getFullYear()} Aymen Tiguite — built with ♥️ and caffeine.
        </footer>
      </div>
    </div>
  );
}
