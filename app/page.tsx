const cells = [
  ['CONTENT','raw / owned'],['MEANING','resolved'],['EVIDENCE','traceable'],['INTENT','ready'],
  ['PROVENANCE','verified'],['SUPPLY','legible'],['AGENTS','discover'],['MEDIA','moves'],
];

export default function Home() {
  return <main className="v2" id="top">
    <nav className="v2Nav">
      <a className="iqLogo" href="#top" aria-label="Modulr IQ home"><b>MODULR</b><span>IQ</span><i>IDENTITY STUDY / 01</i></a>
      <div className="v2NavLinks"><a href="#system">SYSTEM</a><a href="/learn">LEARN</a><a href="/signal-shift">SIGNAL SHIFT</a></div>
      <a className="navCta" href="mailto:hello@modulrsignal.com?subject=Modulr%20Pilot">ENTER PILOT <span>↗</span></a>
    </nav>

    <section className="v2Hero">
      <div className="heroNoise" aria-hidden="true" />
      <div className="heroMeta"><span>SUPPLY INTELLIGENCE FOR AGENTIC ADVERTISING</span><span>MODULR / IQ <b>EXPLORATION</b></span></div>
      <div className="heroStatement">
        <p>INTELLIGENCE, BEFORE EXECUTION.</p>
        <h1>BRINGING MEANING<br/><em>TO MEDIA.</em></h1>
      </div>
      <div className="heroBottom">
        <div className="heroCanonical"><strong>Modulr is the supply intelligence layer for agentic advertising.</strong><p>We bring meaning to media so machines can transact with intent, not guesswork.</p><div><a href="#system">Discover how</a><a href="mailto:hello@modulrsignal.com?subject=Modulr%20Pilot">Request pilot access ↗</a></div></div>
        <div className="intelligenceGrid" aria-label="Modulr intelligence transformation">
          {cells.map(([a,b],i)=><div key={a} className={`cell c${i}`}><small>0{i+1}</small><b>{a}</b><span>{b}</span></div>)}
          <div className="gridCore"><span>MODULR</span><b>IQ</b><i>MEANING<br/>ENGINE</i></div>
        </div>
      </div>
      <div className="ticker"><div>BRINGING MEANING TO MEDIA <i>✦</i> PUBLISHER-ALIGNED <i>✦</i> EXECUTION-NEUTRAL <i>✦</i> PROTOCOL-AGNOSTIC <i>✦</i> AGENT-READY <i>✦</i> BRINGING MEANING TO MEDIA <i>✦</i></div></div>
    </section>

    <section className="truth" id="system">
      <div className="sectionTag"><b>01</b> THE INTELLIGENCE GAP <span>SCROLL / EXPAND</span></div>
      <div className="truthHeadline"><span>THE EXECUTION LAYER</span><h2>Moves<br/>faster.</h2><i>01</i></div>
      <div className="truthHeadline inverse"><span>THE INTELLIGENCE LAYER</span><h2>Sees<br/>deeper.</h2><i>02</i></div>
      <div className="truthPayoff"><p>Buying systems changed.<br/><strong>Supply descriptions didn’t.</strong></p><div><span>THE OLD WORLD</span><code>category: "business"<br/>audience: "unknown"<br/>meaning: null</code></div><div className="acid"><span>WITH MODULR</span><code>intent: "business_growth"<br/>evidence: "traceable"<br/>confidence: 0.91</code></div></div>
    </section>

    <section className="iqSystem">
      <div className="sectionTag light"><b>02</b> MODULR / IQ <span>WORKING IDENTITY SYSTEM</span></div>
      <div className="iqIntro"><div className="giantIQ">IQ</div><div><h2>Meaning, made<br/><em>machine-readable.</em></h2><p>Modulr transforms publisher content into machine-readable supply descriptors that can be consumed by buyer agents, SSPs, DSPs, and seller agents.</p><a href="mailto:hello@modulrsignal.com?subject=Modulr%20IQ%20Pilot">EXPLORE THE PILOT ↗</a></div></div>
      <div className="pipeline">
        {[
          ['01','SOURCE','Publisher-owned podcast, CTV, and streaming content'],
          ['02','RESOLVE','Intent, topics, suitability, provenance, evidence'],
          ['03','GOVERN','Deterministic, versioned, explainable descriptors'],
          ['04','EXPOSE','Agent-ready intelligence across open protocols']
        ].map(([n,t,d])=><article key={n}><small>{n}</small><div className="pulse"/><h3>{t}</h3><p>{d}</p></article>)}
      </div>
      <div className="guardrail"><span>THE GUARDRAIL</span><p>Modulr does not run auctions, buy media, track users, or execute campaigns.</p><b>NEUTRAL BY DESIGN.</b></div>
    </section>

    <section className="proof">
      <div className="proofWord">EVIDENCE<br/><i>OVER</i><br/>ASSERTION.</div>
      <div className="proofContent"><span>INTELLIGENCE YOU CAN TRUST</span><h2>Every decision should<br/>have a reason.</h2><p>Modulr makes every descriptor traceable to publisher-owned evidence and a governed evaluation contract—so machines can understand not only what to choose, but why.</p><div className="proofChecks"><b>✓ EVIDENCE-BACKED</b><b>✓ REPRODUCIBLE</b><b>✓ EXPLAINABLE</b><b>✓ PORTABLE</b></div></div>
    </section>

    <section className="contentEngine">
      <div className="sectionTag"><b>03</b> THE INTELLIGENCE DESK <span>LEARN / SIGNAL SHIFT</span></div>
      <div className="contentIntro"><h2>A NEW MARKET NEEDS<br/><em>A SHARED LANGUAGE.</em></h2><p>Learn makes the category legible. Signal Shift makes sense of where it is going.</p></div>
      <div className="contentDoors">
        <a className="learnDoor" href="/learn"><div className="doorMeta"><span>STRUCTURED KNOWLEDGE BASE</span><b>12 MODULES / 5 PROTOCOLS</b></div><h3>LEARN<span>→</span></h3><p>AI-native advertising without the conference-panel fog. Foundations, protocols, glossary, and role-based paths.</p><div className="miniStack"><i>FOUNDATIONS</i><i>PROTOCOLS</i><i>GLOSSARY</i><i>PATHS</i></div></a>
        <a className="shiftDoor" href="/signal-shift"><div className="doorMeta"><span>FIELD NOTES FROM THE EDGE</span><b>ISSUE 006 / LIVE</b></div><h3>SIGNAL<br/>SHIFT<span>↗</span></h3><p>A series on the structural changes reshaping how content is valued, discovered, and monetized in a machine-driven market.</p><blockquote>“Four separate groups. Four separate rooms. Somehow they all started rhyming.”</blockquote></a>
      </div>
    </section>

    <section className="audiences">
      <div className="sectionTag light"><b>04</b> WHO GETS THE SIGNAL <span>ONE LAYER / MANY CONSUMERS</span></div>
      {[
        ['PUBLISHERS','Make content machine-legible while keeping control of supply.','01'],
        ['BUYER AGENTS','Discover intent-ready inventory without spending to learn.','02'],
        ['SSPs + DSPs','Consume reusable supply intelligence without rebuilding it.','03'],
        ['SELLER AGENTS','Represent supply with evidence, provenance, and confidence.','04']
      ].map(([t,d,n])=><article key={t}><small>{n}</small><h3>{t}</h3><p>{d}</p><span>↗</span></article>)}
    </section>

    <section className="finalCta">
      <div className="finalGlyph">M<span>IQ</span></div>
      <div><span>LIMITED PILOT / PODCAST + CTV</span><h2>BRING<br/><em>MEANING</em><br/>TO MEDIA.</h2><p>Prepare your supply for the systems already coming to find it.</p><a href="mailto:hello@modulrsignal.com?subject=Modulr%20Pilot%20Access">REQUEST PILOT ACCESS ↗</a></div>
    </section>

    <footer className="v2Footer"><div className="iqLogo"><b>MODULR</b><span>IQ</span></div><p>SUPPLY INTELLIGENCE FOR AGENTIC ADVERTISING.</p><div><a href="/learn">LEARN</a><a href="/signal-shift">SIGNAL SHIFT</a><a href="https://www.linkedin.com/company/modulrai">LINKEDIN</a><a href="mailto:hello@modulrsignal.com">CONTACT</a></div><small>© 2026 / EXECUTION-NEUTRAL</small></footer>
  </main>;
}
