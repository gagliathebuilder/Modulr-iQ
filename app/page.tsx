export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Modulr home">
          <span className="brandMark" aria-hidden="true"><i /><i /><i /></span>
          MODULR
        </a>
        <div className="navLinks">
          <a href="#platform">Platform</a><a href="#publishers">Publishers</a><a href="#why-now">Why now</a>
        </div>
        <a className="button buttonSmall" href="mailto:hello@modulrsignal.com?subject=Modulr%20Pilot">Request a pilot <span>↗</span></a>
      </nav>
      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Supply intelligence for agentic advertising</div>
        <h1>Make your media<br /><em>discoverable to AI.</em></h1>
        <p className="heroCopy">Modulr turns podcast, CTV, and streaming content into machine-readable supply intelligence—so buying agents can understand what your media means before they spend.</p>
        <div className="heroActions">
          <a className="button" href="mailto:hello@modulrsignal.com?subject=Modulr%20Pilot">Prepare your supply <span>↗</span></a>
          <a className="textLink" href="#platform">See how it works <span>↓</span></a>
        </div>
        <div className="signalStage" aria-label="Example of content transformed into machine-readable signals">
          <div className="sourceCard card">
            <div className="cardLabel">PUBLISHER CONTENT</div>
            <div className="audioTop"><span className="play">▶</span><div><b>Building the next<br />great American brand</b><small>FOUNDERS IN FOCUS · EP 48</small></div></div>
            <div className="wave" aria-hidden="true">{[7,13,9,21,27,14,33,19,27,11,22,35,17,24,9,29,16,20,8,25,13,31,17,11].map((h,i)=><i key={i} style={{height:h}} />)}</div>
            <div className="quote">“...we had to rethink how we reached buyers at the moment they were ready to grow.”</div>
          </div>
          <div className="transform"><span>MODULR</span><i>→</i><small>SEMANTIC<br />ANALYSIS</small></div>
          <div className="descriptorCard card">
            <div className="cardLabel"><span>●</span> SUPPLY DESCRIPTOR <b>VERIFIED</b></div>
            <code><small>INTENT</small>{'\n'}<strong>[</strong> <mark>business_growth</mark>, <mark>brand_strategy</mark> <strong>]</strong>{'\n\n'}<small>COMMERCIAL READINESS</small>{'\n'}<strong>0.91</strong>  <span className="meter">█████████░</span>{'\n\n'}<small>TONE</small>        <small>SUITABILITY</small>{'\n'}educational  <span className="safe">verified_safe</span></code>
            <div className="machineReady">MACHINE-READY <span>●</span></div>
          </div>
        </div>
      </section>

      <section className="proofStrip">
        <div className="shell proofInner"><span>BUILT FOR THE OPEN AGENTIC ECOSYSTEM</span><b>AdCP</b><b>Prebid</b><b>MCP</b><b>A2A</b><em>PROTOCOL-AGNOSTIC</em></div>
      </section>

      <section className="problem shell" id="why-now">
        <div className="sectionNumber">01 / THE PROBLEM</div>
        <div className="problemGrid">
          <h2>Your content is rich.<br /><em>The market sees a label.</em></h2>
          <div className="bodyCopy"><p>A 60-minute conversation can reveal motivations, problems, purchases, and life moments. Yet most advertising systems receive little more than <strong>“Business”</strong> or <strong>“Entertainment.”</strong></p><p>That gap forces machines to spend their way to understanding. Modulr moves intelligence upstream—before the bid, before the auction, before value is lost.</p></div>
        </div>
        <div className="comparison">
          <div className="comparisonCard old"><small>WHAT THE MARKET SEES TODAY</small><code>content_category: <b>"Business"</b>{'\n'}audience: <b>"Unknown"</b>{'\n'}commercial_intent: <b>null</b></code><span>Low signal · High inference</span></div>
          <div className="vs">VS.</div>
          <div className="comparisonCard new"><small>WHAT AN AGENT SEES WITH MODULR</small><code>intent: <b>"infrastructure_investment"</b>{'\n'}readiness: <b>0.91</b>{'\n'}suitability: <b>"verified_safe"</b></code><span>Clear meaning · Confident discovery</span></div>
        </div>
      </section>

      <section className="darkSection" id="platform">
        <div className="shell">
          <div className="sectionNumber light">02 / THE PLATFORM</div>
          <div className="platformIntro"><h2>From raw media to<br /><em>trusted supply intelligence.</em></h2><p>Modulr analyzes publisher-owned content and produces deterministic, versioned descriptors that machines can query without changing how media is sold.</p></div>
          <div className="steps">
            {[['01','INGEST','Connect podcast feeds, CTV schedules, transcripts, and publisher metadata.'],['02','UNDERSTAND','Analyze topics, entities, intent, tone, suitability, and commercial readiness.'],['03','STRUCTURE','Normalize meaning into governed, portable, machine-readable descriptors.'],['04','DISCOVER','Expose inventory to agents, SSPs, DSPs, and planning systems through open rails.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <div className="boundary"><span className="boundaryLabel">THE MODULR BOUNDARY</span><div><b>WE DO</b><p>Analyze · Structure · Version · Govern</p></div><div><b>WE DON’T</b><p>Bid · Transact · Track users · Own demand</p></div></div>
        </div>
      </section>

      <section className="audience shell" id="publishers">
        <div className="sectionNumber">03 / WHO IT'S FOR</div>
        <div className="audienceHead"><h2>One intelligence layer.<br /><em>Value across the stack.</em></h2><p>Modulr makes media supply easier to discover, evaluate, and trust—without competing with the systems that execute.</p></div>
        <div className="audienceCards">
          <article><span>01</span><h3>Publishers</h3><p>Protect the discoverability and value of podcast, CTV, and streaming inventory as buying shifts from interfaces to agents.</p><ul><li>Make content machine-legible</li><li>Create new intent-led packages</li><li>Stay in control of your supply</li></ul><a href="mailto:hello@modulrsignal.com?subject=Publisher%20Pilot">Explore publisher pilots ↗</a></article>
          <article><span>02</span><h3>Platforms</h3><p>Add deeper supply understanding to SSPs, DSPs, seller agents, and curation platforms without rebuilding semantic infrastructure.</p><ul><li>Improve supply discovery</li><li>Reduce costly inference</li><li>Integrate through open protocols</li></ul><a href="mailto:hello@modulrsignal.com?subject=Platform%20Integration">Discuss an integration ↗</a></article>
          <article><span>03</span><h3>Buying agents</h3><p>Query inventory using intent, meaning, suitability, and confidence—not blunt categories or audience proxies.</p><ul><li>Evaluate before spend</li><li>Make explainable decisions</li><li>Find overlooked supply</li></ul><a href="mailto:hello@modulrsignal.com?subject=Buying%20Agent%20Access">Request descriptor access ↗</a></article>
        </div>
      </section>

      <section className="shift">
        <div className="shell shiftGrid"><div><div className="sectionNumber">04 / SIGNAL SHIFT</div><h2>The next interface<br />isn’t an interface.</h2></div><div><p>It’s a protocol. A query. A machine asking what inventory means—and deciding where media flows.</p><blockquote>“Execution systems move media. Discovery systems determine where media flows.”</blockquote><p className="shiftSmall">Signal Shift is Modulr’s field guide to AI-native advertising: clear thinking on supply intelligence, agentic protocols, and the market taking shape.</p><a className="button" href="https://www.modulrsignal.com/signal-shift">Read Signal Shift <span>↗</span></a></div></div>
      </section>

      <section className="faq shell">
        <div className="sectionNumber">05 / QUESTIONS, ANSWERED</div>
        <h2>Before the first conversation.</h2>
        <div className="faqList">
          {[['Is Modulr a DSP or SSP?','No. Modulr is an upstream supply intelligence layer. We do not bid, transact, own demand, or alter auction mechanics.'],['What is a supply descriptor?','A governed, machine-readable object that describes media using semantic signals such as intent, topics, tone, suitability, provenance, and confidence.'],['Which media formats does Modulr support?','The initial focus is podcast, CTV, and FAST—formats with rich, long-form context and high-value commercial signals.'],['How does Modulr work with agentic advertising?','Modulr prepares supply for discovery by buying agents and AI planning systems, while remaining compatible with transaction rails such as AdCP, Prebid, MCP, and A2A.']].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
        </div>
      </section>

      <section className="cta">
        <div className="shell ctaInner"><div><span>LIMITED PILOT · PODCAST + CTV</span><h2>Your media already has meaning.<br /><em>Make it visible.</em></h2></div><div><p>Join a small group of publishers and platforms shaping how supply is discovered in an AI-native market.</p><a className="button limeButton" href="mailto:hello@modulrsignal.com?subject=Modulr%20Pilot%20Inquiry">Request a pilot <span>↗</span></a></div></div>
      </section>

      <footer className="footer"><div className="shell"><div className="footerTop"><a className="brand" href="#top"><span className="brandMark"><i/><i/><i/></span> MODULR</a><p>The supply intelligence layer<br />for agentic advertising.</p><div><a href="#platform">Platform</a><a href="#publishers">Publishers</a><a href="https://www.modulrsignal.com/signal-shift">Signal Shift</a></div><div><a href="mailto:hello@modulrsignal.com">Contact</a><a href="https://www.linkedin.com/company/modulrai">LinkedIn</a><a href="https://www.modulrsignal.com/privacy">Privacy</a></div></div><div className="footerBottom"><span>© 2026 MODULR</span><span>BUILT FOR THE SIGNAL SHIFT.</span><span>MEANING → MACHINES</span></div></div></footer>
    </main>
  );
}
