import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Learn — Modulr IQ', description: 'The AI-native advertising knowledge base: supply intelligence, agents, protocols, and machine-readable media.', alternates: { canonical: '/learn' }, openGraph: { images: [] }, twitter: { images: [] } };

const foundations = [
  ['01','The Shift to Machine-Driven Buying','How advertising moved from human-negotiated deals to automated auctions—and why AI changes the rules again.'],
  ['02','What Is AI-Native Advertising?','AI-assisted and AI-native are different architectural categories. Learn why the distinction matters.'],
  ['03','Buyer Agents and Seller Agents','What autonomous advertising agents do, who they represent, and how they communicate.'],
  ['04','Machine-Readable Supply','Why HTML and blunt categories are not enough for systems that reason about meaning.'],
  ['05','Supply Descriptors','The canonical unit of machine-readable inventory and what a trustworthy descriptor contains.'],
  ['06','Supply Intelligence','How raw descriptors become scored, decision-ready signals without becoming execution.'],
  ['07','Provenance and Trust','Why every machine-mediated decision needs a verifiable chain of origin.'],
  ['08','The Protocol Landscape','How AdCP, MCP, and A2A operate at different layers of the emerging stack.'],
];
const protocols = [['MCP','MODEL CONTEXT PROTOCOL'],['ARTF','AGENTIC REAL-TIME FRAMEWORK'],['AAMP','AGENT IDENTITY + GOVERNANCE'],['A2A','AGENT-TO-AGENT'],['AdCP','AD CONTEXT PROTOCOL']];

export default function Learn(){return <main className="learnPage">
  <nav className="v2Nav"><a className="iqLogo" href="/"><b>MODULR</b><span>IQ</span></a><div className="v2NavLinks"><a href="/">SYSTEM</a><a href="/learn">LEARN</a><a href="/signal-shift">SIGNAL SHIFT</a></div><a className="navCta" href="mailto:hello@modulrsignal.com?subject=Modulr%20Pilot">ENTER PILOT <span>↗</span></a></nav>
  <header className="learnHero"><div className="learnIndex">KNOWLEDGE_BASE / INDEX <b>v1.0</b></div><h1>DON’T JUST<br/>FOLLOW THE SHIFT.<br/><em>UNDERSTAND IT.</em></h1><p>Structured education covering supply intelligence, buyer and seller agents, open protocols, and machine-readable media—built for practitioners navigating agentic decisioning.</p><a href="#foundations">START WITH THE FOUNDATIONS ↓</a></header>
  <section className="learnStats"><div><b>08</b><span>FOUNDATION UNITS</span></div><div><b>05</b><span>PROTOCOL GUIDES</span></div><div><b>04</b><span>PRACTITIONER PATHS</span></div><div><b>00</b><span>PAYWALLS</span></div></section>
  <section className="curriculum" id="foundations"><div className="sectionTag"><b>01</b> FOUNDATIONS <span>READ IN ORDER / OR DON'T</span></div>{foundations.map(([n,t,d])=><article key={n}><small>{n}</small><h2>{t}</h2><p>{d}</p><span>READ ↗</span></article>)}</section>
  <section className="protocolLab"><div><span>02 / PROTOCOL LAB</span><h2>THE RAILS ARE<br/>NOT THE PRODUCT.</h2><p>Protocols transport intelligence. Learn where each one fits without mistaking interoperability for meaning.</p></div><div>{protocols.map(([a,b])=><article key={a}><b>{a}</b><span>{b}</span><i>↗</i></article>)}</div></section>
  <section className="learnPaths"><div className="sectionTag light"><b>03</b> CHOOSE YOUR PATH <span>ROLE-BASED / NO FLUFF</span></div>{['PUBLISHER','ADVERTISER','AGENCY','BUILDER'].map((x,i)=><a key={x} href={`mailto:hello@modulrsignal.com?subject=${x}%20Learning%20Path`}><small>0{i+1}</small><h3>{x}</h3><span>ENTER PATH →</span></a>)}</section>
  <footer className="v2Footer"><div className="iqLogo"><b>MODULR</b><span>IQ</span></div><p>THE AI-NATIVE ADVERTISING KNOWLEDGE BASE.</p><div><a href="/">SYSTEM</a><a href="/signal-shift">SIGNAL SHIFT</a><a href="mailto:hello@modulrsignal.com">CONTACT</a></div><small>OPEN KNOWLEDGE / BUILT FOR PRACTITIONERS</small></footer>
  </main>}
