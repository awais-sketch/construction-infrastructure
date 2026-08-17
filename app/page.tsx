"use client";

import { useEffect, useState } from "react";

export type Sector = "construction" | "care";

const content = {
  construction: {
    label: "Construction & Infrastructure",
    kicker: "AP Diagnostic for construction finance teams",
    headline: "Stop supplier rate drift before it hits project margin.",
    sub: "Trace plant hire, materials and subcontractor charges back to the rates, levies and commercial terms your business actually signed.",
    agreed: ["Plant hire", "$185/hr", "Fuel levy", "Included", "Mobilisation", "Once"],
    charged: ["Plant hire", "$212/hr", "Fuel levy", "+8.5%", "Mobilisation", "Weekly"],
    intro: "Materials arrive, equipment is hired and the site has to keep moving. When a purchase order is raised after the invoice arrives, teams can end up copying the invoice price into the PO. The control has already failed.",
    checks: [
      ["Plant hire rates", "Hourly, daily and weekly charges matched to the signed rate card."],
      ["Fuel levies", "Every surcharge checked for agreement, timing and calculation."],
      ["PO timing", "Whether purchase orders are early enough to act as a real control."],
      ["Subcontractor charges", "Labour and trade rates traced to the commercial terms."],
      ["Repeated costs", "Duplicate fees, mobilisation and quiet price movements surfaced."],
    ],
    result: "A number you can stand behind",
    resultCopy: "Finance and procurement get evidence they can take to project leaders, auditors and the board.",
  },
  care: {
    label: "Healthcare & Aged Care",
    kicker: "AP Diagnostic for care finance teams",
    headline: "Find the contract leaks hiding in care services invoices.",
    sub: "Check linen, cleaning, food and facilities charges against agreed increases, rebates and service rates across every site.",
    agreed: ["Linen service", "$4.20", "Annual rise", "CPI", "Rebate", "3.0%"],
    charged: ["Linen service", "$4.76", "Annual rise", "7.0%", "Rebate", "Missing"],
    intro: "Linen, cleaning, food and pest control run on contracts negotiated centrally, often years before the goods arrive. Site teams approve the invoice without ever seeing that negotiation.",
    checks: [
      ["Rate-card compliance", "What you agreed to pay compared with what you were charged."],
      ["Unapproved increases", "Price rises tested against the contract and approval trail."],
      ["Missed rebates", "Discounts and rebates identified, calculated and quantified."],
      ["Manual handling", "Invoices that need a person to move through the process."],
      ["True invoice cost", "The time and cost absorbed by AP before an invoice is ready."],
    ],
    result: "The number the board can act on",
    resultCopy: "Every overcharge, missed rebate and manual hour is named and quantified in one written report.",
  },
};

function Logo() {
  return <a className="logo" href="https://spc3.com/" aria-label="SPC3 home"><img src="https://spc3.com/img/logo-spc3-new.jpeg" alt="SPC3" /></a>;
}

export function SectorLanding({ initialSector = "construction", showSwitcher = true }: { initialSector?: Sector; showSwitcher?: boolean }) {
  const [sector, setSector] = useState<Sector>(initialSector);
  const c = content[sector];
  const talk = "https://spc3.com/contact-us/";

  useEffect(() => {
    const elements = document.querySelectorAll(".problem .narrow, .proof, .planIntro, .steps, .checksHead, .checkGrid article, .outcome");
    elements.forEach((element, index) => { element.classList.add("reveal"); if (element.matches(".checkGrid article")) (element as HTMLElement).style.setProperty("--delay", `${(index % 5) * 70}ms`); });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [sector]);

  return (
    <main className={`site ${sector}`}>
      <header className="nav wrap">
        <Logo />
        <nav className="mainNav" aria-label="Main navigation">
          <a href="https://spc3.com/products">Products</a><a href="https://spc3.com/case-studies">Customers</a><a href="https://spc3.com/blogs">Blog</a><a href="https://spc3.com/partners">Partners</a><a href="https://spc3.com/aboutus">About</a>
        </nav>
        {showSwitcher && <div className="switcher" aria-label="Choose industry">
          <button className={sector === "construction" ? "active" : ""} onClick={() => setSector("construction")}>Construction</button>
          <button className={sector === "care" ? "active" : ""} onClick={() => setSector("care")}>Healthcare & aged care</button>
        </div>}
        <a className="navCta" href={talk}>Talk to Nitin <span>↗</span></a>
      </header>

      <section className="hero wrap">
        <div className="heroCopy">
          <p className="eyebrow"><i /> {c.kicker}</p>
          <h1>{c.headline}</h1>
          <p className="lead">{c.sub}</p>
          <div className="actions"><a className="primary" href={talk}>Talk to Nitin <span>↗</span></a><a className="textLink" href="#checks">See what we check ↓</a></div>
          <p className="reassure">20 minutes. No software pitch. Just your process.</p>
        </div>
        <div className="invoiceCard" aria-label="Contract and invoice rate comparison">
          <div className="cardTop"><div><small>RATE CHECK</small><strong>{c.label}</strong></div><span className="alert">Variance found</span></div>
          <RateBlock title="Contract agreed" rows={c.agreed} />
          <div className="connector"><span>compared line by line</span></div>
          <RateBlock title="Invoice charged" rows={c.charged} danger />
          <div className="variance"><span>Pricing control</span><b>Review required</b></div>
        </div>
      </section>

      <section className="problem">
        <div className="wrap narrow"><p className="sectionNo">01 / THE GAP</p><h2>You agreed on a price.<br />You should be charged that price.</h2><p>{c.intro}</p><blockquote>Somewhere between the contract and the invoice, the agreed price stops being true.</blockquote></div>
      </section>

      <section className="proof wrap">
        <div><strong>8,000</strong><span>invoices per FTE, before</span></div><div className="arrow">→</div><div><strong>23,000</strong><span>invoices per FTE, after</span></div><div><strong>60%</strong><span>less manual handling</span></div>
        <p>Reference deployment: high-volume Australian enterprise using Oracle Fusion Cloud ERP</p>
      </section>

      <section className="plan wrap">
        <div className="planIntro"><p className="sectionNo">02 / THE PLAN</p><h2>Four weeks.<br />One clear answer.</h2><p>The AP Diagnostic starts with the contracts and invoices you already have. No installation and no changes to your systems.</p></div>
        <div className="steps">
          <article><b>01</b><div><h3>Talk</h3><p>Spend 20 minutes with Nitin mapping how supplier invoices move through your business.</p></div></article>
          <article><b>02</b><div><h3>Test</h3><p>We trace selected invoice lines back to contracts, rate cards and commercial terms.</p></div></article>
          <article><b>03</b><div><h3>Know</h3><p>You receive a written report showing the value, the cause and where control needs attention.</p></div></article>
        </div>
      </section>

      <section id="checks" className="checks"><div className="wrap"><p className="sectionNo">03 / WHAT WE CHECK</p><div className="checksHead"><h2>Five places<br />the gap hides.</h2><p>Supplier charges that are difficult to verify at speed and material when they go unchecked.</p></div><div className="checkGrid">{c.checks.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="outcome wrap"><div className="outcomeMark">✓</div><div><p className="sectionNo">04 / THE RESULT</p><h2>{c.result}</h2><p>{c.resultCopy}</p></div><ul><li>Every gap named and quantified</li><li>A written report that is yours to keep</li><li>No software installed</li></ul></section>

      <section className="finalCta"><div className="wrap"><p className="eyebrow light"><i /> Start with the invoices you have</p><h2>Find out what your AP process is really costing you.</h2><p>One conversation to see whether the four-week AP Diagnostic is worth running in your organisation.</p><a className="primary pale" href={talk}>Talk to Nitin <span>↗</span></a></div></section>
      <footer className="wrap"><Logo /><p>Accounts payable and procurement automation for enterprise teams.</p><a href="https://spc3.com/">spc3.com ↗</a></footer>
    </main>
  );
}

export default function Home() {
  return <SectorLanding initialSector="construction" showSwitcher={false} />;
}

function RateBlock({ title, rows, danger = false }: { title: string; rows: string[]; danger?: boolean }) {
  return <div className={`rateBlock ${danger ? "danger" : ""}`}><p><span>{danger ? "●" : "✓"}</span>{title}</p>{[0, 2, 4].map(i => <div className="rateRow" key={rows[i]}><span>{rows[i]}</span><b>{rows[i + 1]}</b></div>)}</div>;
}
