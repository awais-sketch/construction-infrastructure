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
    problemExtra: "If the supplier has charged the wrong rate, the same wrong rate can appear on the invoice and purchase order, then pass through approval unnoticed.",
    guide: "Tendering already puts construction margins under pressure. We spent years inside finance teams finding these pricing gaps manually. That experience taught us where they hide, why approval controls miss them and what evidence finance teams need to act.",
    metrics: [["29%", "under budget on a national capital-works program"], ["70%", "faster supplier approval"], ["40%", "faster tender assessment"]],
    riskTitle: "The gap gets harder to explain",
    riskCopy: "Each retrospective purchase order, unchecked surcharge and unverified rate increase removes another piece of the original pricing evidence. By the time the difference appears in project margin or an audit, finance is reconstructing decisions across contracts, purchase orders and thousands of invoices.",
    riskPoints: ["Unchecked charges become part of normal processing", "The original pricing reference gets harder to prove", "Finance is left explaining the gap to the board or auditor"],
    checks: [
      ["Plant hire rates", "Hourly, daily and weekly charges matched to the signed rate card."],
      ["Fuel levies", "Every surcharge checked for agreement, timing and calculation."],
      ["PO timing", "Whether purchase orders are early enough to act as a real control."],
      ["Subcontractor charges", "Labour and trade rates traced to the commercial terms."],
      ["Repeated costs", "Duplicate fees, mobilisation and quiet price movements surfaced."],
    ],
    result: "A number you can stand behind",
    resultCopy: "Finance and procurement get evidence they can take to project leaders, auditors and the board.",
    resultPoints: ["Every gap named and quantified", "A written report that is yours to keep", "No software installed or systems changed"],
  },
  care: {
    label: "Healthcare & Aged Care",
    kicker: "AP Diagnostic for care finance teams",
    headline: "Find the contract leaks hiding in care services invoices.",
    sub: "Check linen, cleaning, food and facilities charges against agreed increases, rebates and service rates across every site.",
    agreed: ["Linen service", "$4.20", "Annual rise", "CPI", "Rebate", "3.0%"],
    charged: ["Linen service", "$4.76", "Annual rise", "7.0%", "Rebate", "Missing"],
    intro: "Linen, cleaning, food and pest control run on contracts negotiated centrally, often years before the goods arrive. Site teams approve the invoice without ever seeing that negotiation.",
    problemExtra: "Care labour gets reviewed line by line at the board table. The contracted half of the cost base rarely gets the same attention, even when annual increases and rebates move away from the signed terms.",
    guide: "Care margins are already thin. We spent years inside finance teams fixing supplier invoice problems by hand before building software to do it. That is how we know where to look and how to turn each gap into evidence the board can use.",
    metrics: [["8,000", "invoices per FTE, before"], ["23,000", "invoices per FTE, after"], ["60%", "less manual handling"]],
    riskTitle: "The gap does not close on its own",
    riskCopy: "Every month without a check, the same rates are rebilled, rebates go unclaimed and manual handling keeps absorbing AP time. Margins move while finance still lacks a clear answer for the board.",
    riskPoints: ["Overcharges compound quietly, invoice after invoice", "Manual handling keeps consuming AP hours", "The board asks about margin before finance has an answer"],
    checks: [
      ["Rate-card compliance", "What you agreed to pay compared with what you were charged."],
      ["Unapproved increases", "Price rises tested against the contract and approval trail."],
      ["Missed rebates", "Discounts and rebates identified, calculated and quantified."],
      ["Manual handling", "Invoices that need a person to move through the process."],
      ["True invoice cost", "The time and cost absorbed by AP before an invoice is ready."],
    ],
    result: "The number the board can act on",
    resultCopy: "Every overcharge, missed rebate and manual hour is named and quantified in one written report.",
    resultPoints: ["Every rate-card gap named and quantified", "A real number for the board, not a guess", "Nothing signed or installed"],
  },
};

function Logo() {
  return <a className="logo" href="https://spc3.com/" aria-label="SPC3 home"><img src="/logo-spc3.jpeg" alt="SPC3" /></a>;
}

export function SectorLanding({ initialSector = "construction", showSwitcher = true }: { initialSector?: Sector; showSwitcher?: boolean }) {
  const [sector, setSector] = useState<Sector>(initialSector);
  const c = content[sector];
  const talk = "https://book.spc3mail.com/mr_upadhyay";

  useEffect(() => {
    const elements = document.querySelectorAll(".problem .narrow, .comparison, .guide, .proof, .planIntro, .steps, .checksHead, .checkGrid article, .outcome, .risk, .offer");
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
        <div className="supplierVisual"><img src={sector === "healthcare" ? "/cash-deployment.png" : "/supplier-application.png"} alt={sector === "healthcare" ? "Cash deployment ranked by return with budget, projected savings and invoice opportunities" : "Supplier application progress showing registration, identity validation, procurement approval and ERP creation"} /></div>
      </section>

      <section className="problem">
        <div className="wrap narrow"><p className="sectionNo">01 / THE GAP</p><h2>You agreed on a price.<br />You should be charged that price.</h2><p>{c.intro}</p><p>{c.problemExtra}</p><div className="comparison"><RateBlock title="Contract agreed" rows={c.agreed}/><RateBlock title="Invoice charged" rows={c.charged} danger /></div><blockquote>Somewhere between the contract and the invoice, the agreed price stops being true.</blockquote></div>
      </section>

      <section className="guide wrap"><p className="sectionNo">02 / WHY SPC3</p><div><h2>Built from years inside finance teams.</h2><p>{c.guide}</p><blockquote>“We went from 8,000 to 23,000 invoices per FTE, each year.” <span>Finance Director, Australian enterprise</span></blockquote></div></section>

      <section className="proof wrap">
        {c.metrics.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        <p>Evidence from Australian enterprise deployments</p>
      </section>

      <section className="plan wrap">
        <div className="planIntro"><p className="sectionNo">02 / THE PLAN</p><h2>Four weeks.<br />One clear answer.</h2><p>The AP Diagnostic starts with the contracts and invoices you already have. No installation and no changes to your systems.</p></div>
        <div className="steps">
          <article><b>01</b><div><h3>Understand</h3><p>Spend 20 minutes with Nitin mapping how contracts, purchase orders and supplier invoices move through your business.</p></div></article>
          <article><b>02</b><div><h3>Trace</h3><p>We review selected invoice lines against contracts, rate cards and agreed commercial terms.</p></div></article>
          <article><b>03</b><div><h3>Measure</h3><p>We quantify mismatched rates, unexpected increases, missing rebates and manual handling.</p></div></article>
          <article><b>04</b><div><h3>Receive the findings</h3><p>You get a written report showing the value, cause and where control needs attention. It is yours to keep.</p></div></article>
        </div>
      </section>

      <section id="checks" className="checks"><div className="wrap"><p className="sectionNo">03 / WHAT WE CHECK</p><div className="checksHead"><h2>Five places<br />the gap hides.</h2><p>Supplier charges that are difficult to verify at speed and material when they go unchecked.</p></div><div className="checkGrid">{c.checks.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="outcome wrap"><div><p className="sectionNo">04 / THE RESULT</p><h2>{c.result}</h2><p>{c.resultCopy}</p></div><ul>{c.resultPoints.map(point => <li key={point}>{point}</li>)}</ul></section>

      <section className="risk"><div className="wrap"><div><p className="sectionNo">05 / IF NOTHING CHANGES</p><h2>{c.riskTitle}</h2><p>{c.riskCopy}</p></div><ul>{c.riskPoints.map(point => <li key={point}>{point}</li>)}</ul></div></section>

      <section className="offer wrap"><p className="sectionNo">06 / WHAT YOU RECEIVE</p><h2>A clear answer before any software conversation.</h2><div><article><b>01</b><h3>A written report</h3><p>See what the current AP process is costing and where the gaps originate.</p></article><article><b>02</b><h3>Evidence you can use</h3><p>Take quantified findings to procurement, executives, auditors and the board.</p></article><article><b>03</b><h3>No system change</h3><p>Start with the contracts and invoices you already have. Nothing installed.</p></article></div></section>

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
