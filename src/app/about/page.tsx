import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `About · ${site.name}`,
  description:
    "What ClarityAccess is, the problems it solves, and how we help teams ship accessible, risk-aware websites with client-ready reports.",
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      {/* Hero */}
      <header className="mb-10 grid items-center gap-8 md:mb-16 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            What is {site.name}?
          </h1>
          <p className="text-muted-foreground mt-4 text-lg md:text-xl">
            {site.name} scans any public page and produces a clear, prioritized
            accessibility report aligned to WCAG—so you can fix issues faster,
            protect your business, and deliver a better experience for everyone.
          </p>
          <div className="mt-6 flex gap-3">
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
        </div>

        {/* Hero image */}
        <figure className="rounded-2xl border p-2 md:p-3">
          <Image
            src="/about/hero-scan.png"
            width={1200}
            height={800}
            alt="ClarityAccess scanning a website and summarizing issues by severity"
            className="rounded-xl"
            priority
            sizes="(min-width: 768px) 560px, 100vw"
          />
          <figcaption className="text-muted-foreground mt-2 text-center text-xs">
            Example scan summary with prioritized findings.
          </figcaption>
        </figure>
      </header>

      {/* Problem → Impact with visual */}
      <section className="grid gap-6 md:grid-cols-2 md:gap-8">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">The problem</h2>
          <p className="text-muted-foreground mt-3">
            Accessibility issues—missing alt text, poor keyboard navigation, low
            color contrast, unlabeled inputs—block real users. They also raise
            legal risk (ADA), hurt SEO, and reduce conversions.
          </p>
          <figure className="mt-5">
            <Image
              src="/about/contrast-check.png"
              width={900}
              height={600}
              alt="Contrast check highlighting insufficient text/background contrast"
              className="rounded-lg border"
              sizes="(min-width: 768px) 480px, 100vw"
            />
            <figcaption className="text-muted-foreground mt-2 text-xs">
              Contrast checks help ensure readable text for everyone.
            </figcaption>
          </figure>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">The impact</h2>
          <ul className="text-muted-foreground mt-3 list-inside list-disc">
            <li>Lower ADA/WCAG risk with objective checks and evidence.</li>
            <li>Ship fixes faster with developer-friendly guidance.</li>
            <li>Win more clients with clean, branded PDF reports.</li>
          </ul>
          <figure className="mt-5">
            <Image
              src="/about/report-pdf.png"
              width={900}
              height={600}
              alt="Exported PDF report preview showcasing issues and remediation steps"
              className="rounded-lg border"
              sizes="(min-width: 768px) 480px, 100vw"
            />
            <figcaption className="text-muted-foreground mt-2 text-xs">
              Client-ready reports: export findings with clear remediation
              steps.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Step
            number="1"
            title="Enter a URL"
            body="Paste any public URL. We fetch and analyze DOM structure, roles, labels, and styles."
          />
          <Step
            number="2"
            title="Automated checks"
            body="Rules map to WCAG: images, forms, landmarks, ARIA, contrast, headings, keyboard."
          />
          <Step
            number="3"
            title="Fix with guidance"
            body="Prioritized list with plain-English explanations, code hints, and references. Export as PDF."
          />
        </div>
      </section>

      {/* What we check (with small visuals) */}
      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">What we check</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <IllustratedCheck
            title="Keyboard support"
            alt="Focus outline moving through interactive elements via keyboard"
            src="/about/keyboard-nav.png"
          >
            Focus order, focus visibility, and keyboard reachability for
            interactive controls.
          </IllustratedCheck>

          <IllustratedCheck
            title="Headings, landmarks & ARIA"
            alt="Document landmarks and ARIA roles labeled for assistive tech"
            src="/about/aria-roles.png"
          >
            Proper outline and regions for screen reader navigation; valid
            roles, properties, and states.
          </IllustratedCheck>
        </div>
        <p className="text-muted-foreground mt-4 text-sm">
          Automated tests catch many—though not all—issues. Manual checks are
          still recommended for captions, logical reading order, and complex
          interactions.
        </p>
      </section>

      {/* Why ClarityAccess */}
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
            Export polished PDFs for proposals, audits, and exec stakeholders.
          </Benefit>
          <Benefit title="Simple pricing">
            Free daily scans to try it out. Paid plans unlock unlimited scans
            and downloads.
          </Benefit>
        </ul>
      </section>

      {/* CTA */}
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

      {/* FAQ */}
      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 space-y-5">
          <Faq
            q="Does this make my site 100% ADA compliant?"
            a="Automated checks significantly reduce risk, but full compliance still requires some manual verification."
          />
          <Faq
            q="Will this hurt site performance?"
            a="No—the scan is external. We fetch and analyze your public page; your site’s code remains unchanged."
          />
          <Faq
            q="Can I share results with clients?"
            a="Yes. Paid plans include clean, branded PDF export for proposals and deliverables."
          />
        </div>
      </section>
    </section>
  )
}

/* ----------------------- Local components ----------------------- */

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

function IllustratedCheck(props: {
  title: string
  alt: string
  src: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-4 rounded-xl border p-5 md:grid-cols-2">
      <div>
        <h3 className="text-base font-semibold">{props.title}</h3>
        <p className="text-muted-foreground mt-2 text-sm">{props.children}</p>
      </div>
      <figure className="order-first md:order-last">
        <Image
          src={props.src}
          width={900}
          height={600}
          alt={props.alt}
          className="rounded-lg border"
          sizes="(min-width: 768px) 420px, 100vw"
        />
        <figcaption className="text-muted-foreground sr-only mt-2 text-xs">
          {props.alt}
        </figcaption>
      </figure>
    </div>
  )
}
