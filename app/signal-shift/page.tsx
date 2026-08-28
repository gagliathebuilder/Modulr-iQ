import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Signal Shift — Modulr IQ', description: 'Field notes on the structural changes reshaping how content is valued, discovered, and monetized in a machine-driven market.', alternates: { canonical: '/signal-shift' }, openGraph: { images: [] }, twitter: { images: [] } };

const issues = [
 ['006','THE PROTOCOL LAYER','Something happened this summer and almost nobody stopped to name it.','/visuals/SignalShift_006_Hero.png'],
 ['005','THE QUESTIONS CHANGED','The surprise isn’t that it can. It’s how quickly we stopped being surprised.','/visuals/SignalShift_005_Hero.png'],
 ['004','THE CONNECTION WAS ALWAYS THERE. THE SIGNAL WAS MISSED.','The conversations were happening. The infrastructure couldn’t see any of it.','/visuals/SignalShift_004_Hero.png'],
 ['003','THE EXECUTION LAYER GOT SMARTER. THE SIGNAL LAYER DIDN’T.','Autonomous buying is scaling. The signal layer hasn’t followed.',''],
 ['002','WHAT A SIGNAL ACTUALLY IS','Most systems today don’t understand content. They approximate it.',''],
 ['001','THE SYSTEM IS CHANGING','From human-led workflows to machine-driven decisioning.',''],
];

export default function SignalShift(){return <main className="shiftPage">
  <nav className="v2Nav"><a className="iqLogo" href="/"><b>MODULR</b><span>IQ</span></a><div className="v2NavLinks"><a href="/">SYSTEM</a><a href="/learn">LEARN</a><a href="/signal-shift">SIGNAL SHIFT</a></div><a className="navCta" href="mailto:hello@modulrsignal.com?subject=Modulr%20Pilot">ENTER PILOT <span>↗</span></a></nav>
  <header className="shiftHero"><div className="signalOrb"><span>SIGNAL</span><b>SHIFT</b><i>006 / ACTIVE</i></div><div><span>FIELD NOTES FROM THE EDGE</span><h1>THE MARKET<br/>IS MOVING.<br/><em>PAY ATTENTION.</em></h1><p>A series on the structural changes reshaping how content is valued, discovered, and monetized in a machine-driven market.</p></div></header>
  <section className="featuredIssue"><div className="issueImage"><img src="/visuals/SignalShift_006_Hero.png" alt="The Protocol Layer"/></div><div><span>FEATURED / 006</span><h2>THE<br/>PROTOCOL<br/>LAYER</h2><p>Four separate groups. Four separate rooms. Somehow they all started rhyming.</p><a href="https://www.modulrsignal.com/signal-shift/006">READ ISSUE 006 ↗</a></div></section>
  <section className="issueArchive"><div className="sectionTag light"><b>06</b> THE ARCHIVE <span>NEWEST / FIRST</span></div>{issues.slice(1).map(([n,t,d,img])=><a key={n} href={`https://www.modulrsignal.com/signal-shift/${n}`}><small>{n}</small><div>{img&&<img src={img} alt=""/>}</div><h2>{t}</h2><p>{d}</p><span>↗</span></a>)}</section>
  <section className="signalManifest"><span>SIGNAL_REGISTRY / PUBLIC</span><code>{`{\n  "series": "Signal Shift",\n  "status": "active",\n  "signals_published": 6,\n  "position": "upstream",\n  "participates_in_auction": false\n}`}</code><p>SUPPLY PREPARED UPSTREAM.<br/>READY FOR MACHINE CONSUMPTION.</p></section>
  <footer className="v2Footer"><div className="iqLogo"><b>MODULR</b><span>IQ</span></div><p>FIELD NOTES FROM THE SIGNAL SHIFT.</p><div><a href="/">SYSTEM</a><a href="/learn">LEARN</a><a href="mailto:hello@modulrsignal.com">CONTACT</a></div><small>ISSUE 006 / ACTIVE / PUBLIC</small></footer>
  </main>}
