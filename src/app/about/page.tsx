import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `About · ${site.name}`,
  description:
    "Learn what ClarityAccess does, why ADA & WCAG compliance matters, and how our automated scanner helps you ship accessible, risk-aware websites with professional client-ready reports.",
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <header className="mb-10 md:mb-14">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          What is {site.name}?
        </h1>
        <p className="text-muted-foreground mt-4 text-lg md:text-xl">
          {site.name} is a web app that scans any public website and produces a
          clear, prioritized accessibility report aligned to WCAG guidelines—so
          you can fix issues faster, protect your business, and deliver a better
          experience for everyone.
        </p>
      </header>

      <div className="grid gap-6 rounded-2xl border p-6 md:grid-cols-2 md:gap-8 md:p-8">
        <div>
          <h2 className="text-xl font-semibold">The problem</h2>
          <p className="text-muted-foreground mt-3">
            Accessibility problems—like missing alt text, poor keyboard
            navigation, low color contrast, and unlabeled form controls—block
            real people from using your site. They also increase legal risk
            (ADA) and can hurt SEO, usability, and conversions.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">The impact</h2>
          <ul className="text-muted-foreground mt-3 list-inside list-disc">
            <li>Mitigate ADA/WCAG risk with objective checks and evidence.</li>
            <li>
              Ship fixes faster with prioritized, developer-friendly items.
            </li>
            <li>
              Win more clients: export clean PDF reports for proposals & audits.
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Step
            number="1"
            title="Enter a URL"
            body="Paste any public URL. ClarityAccess fetches and analyzes the page, including DOM structure, roles, labels, and styles."
          />
          <Step
            number="2"
            title="Automated checks"
            body="We run accessibility rules mapped to WCAG success criteria (e.g., images, forms, landmarks, ARIA, contrast, headings)."
          />
          <Step
            number="3"
            title="Fix with guidance"
            body="Get a prioritized list of issues with plain-English explanations, code-level hints, and links to official references. Export as PDF."
          />
        </div>
      </section>

      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">What we check</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <CheckItem title="Text alternatives">
            Missing or empty{" "}
            <code className="bg-muted rounded px-1 py-0.5">alt</code> on images,
            decorative images marked correctly.
          </CheckItem>
          <CheckItem title="Headings & landmarks">
            Proper document outline, roles, and regions for screen reader
            navigation.
          </CheckItem>
          <CheckItem title="Forms & labels">
            Inputs associated with labels, fieldsets, errors, and descriptions.
          </CheckItem>
          <CheckItem title="Keyboard support">
            Focus order, focus visibility, and interactive controls reachable by
            keyboard.
          </CheckItem>
          <CheckItem title="Color contrast">
            Text/background contrast targets for normal and large text based on
            WCAG.
          </CheckItem>
          <CheckItem title="ARIA usage">
            Valid roles, properties, states; no ARIA-hidden focusable traps.
          </CheckItem>
        </div>
        <p className="text-muted-foreground mt-4 text-sm">
          Note: Automated tests catch many—but not all—issues. Manual checks are
          still recommended for things like video captions, logical reading
          order, and dynamic interaction patterns.
        </p>
      </section>

      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Who is it for?
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card
            title="Agencies & freelancers"
            body="Run pre-sales audits, prove ROI with before/after reports, and include remediation scope with confidence."
          />
          <Card
            title="Product & engineering"
            body="Bake accessibility into your CI process. Triage issues quickly and track progress over time."
          />
          <Card
            title="Site owners"
            body="Spot critical issues fast, reduce legal exposure, and improve conversions with a more usable site."
          />
        </div>
      </section>

      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Why {site.name}?
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          <Benefit title="Actionable, not academic">
            Each issue includes a plain explanation, impact, and concrete fix
            tips.
          </Benefit>
          <Benefit title="Prioritized results">
            Focus on the highest-impact problems first (critical → minor).
          </Benefit>
          <Benefit title="Client-ready reporting">
            Export polished PDFs for proposals, audits, and executive
            stakeholders.
          </Benefit>
          <Benefit title="Simple pricing">
            Free daily scans to try it out. Paid plans unlock unlimited scans
            and downloads.
          </Benefit>
        </ul>
      </section>

      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Standards & mapping
        </h2>
        <div className="mt-4 rounded-lg border p-5">
          <p className="text-muted-foreground">
            Findings are mapped to common accessibility standards and best
            practices:
          </p>
          <ul className="text-muted-foreground mt-3 list-inside list-disc">
            <li>WCAG 2.1 / 2.2 success criteria (A/AA where applicable)</li>
            <li>ARIA Authoring Practices (roles, states, properties)</li>
            <li>Keyboard & focus management expectations</li>
          </ul>
        </div>
      </section>

      <section className="bg-muted/30 mt-12 rounded-2xl border p-8 text-center">
        <h3 className="text-xl font-semibold">
          Ready to see your accessibility score?
        </h3>
        <p className="text-muted-foreground mt-2">
          Run a free scan now—no account required. Upgrade to unlock unlimited
          scans and PDF exports.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="hover:bg-background inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
          >
            Go to Home
          </Link>
          <Link
            href="/pricing"
            className="bg-foreground text-background inline-flex items-center rounded-md px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            View Pricing
          </Link>
        </div>
      </section>

      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 space-y-5">
          <Faq
            q="Does this make my site 100% ADA compliant?"
            a="Automated checks significantly reduce risk, but full compliance requires some manual verification (e.g., video captions, complex widgets, logical reading order). Use the report as your prioritized starting point."
          />
          <Faq
            q="Will this hurt site performance?"
            a="No—the scan is external. We fetch and analyze your public page; your site’s code remains unchanged."
          />
          <Faq
            q="Can I share results with clients?"
            a="Yes. Paid plans include clean, branded PDF export you can attach to proposals or deliverables."
          />
        </div>
      </section>
    </section>
  )
}

/* ----------------------- Small, local components ----------------------- */

function Step(props: { number: string; title: string; body: string }) {
  return (
    <div className="rounded-xl border p-5">
      <div className="flex size-8 items-center justify-center rounded-full border text-sm font-semibold">
        {props.number}
      </div>
      <h3 className="mt-3 text-base font-semibold">{props.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{props.body}</p>
    </div>
  )
}

function Card(props: { title: string; body: string }) {
  return (
    <div className="rounded-xl border p-5">
      <h3 className="text-base font-semibold">{props.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{props.body}</p>
    </div>
  )
}

function CheckItem(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border p-5">
      <h3 className="text-base font-semibold">{props.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{props.children}</p>
    </div>
  )
}

function Benefit(props: { title: string; children: React.ReactNode }) {
  return (
    <li className="rounded-xl border p-5">
      <h3 className="text-base font-semibold">{props.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{props.children}</p>
    </li>
  )
}

function Faq(props: { q: string; a: string }) {
  return (
    <div className="rounded-xl border p-5">
      <h3 className="text-base font-semibold">{props.q}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{props.a}</p>
    </div>
  )
}
