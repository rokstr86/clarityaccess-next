import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `Pricing · ${site.name}`,
  description:
    "Simple, transparent pricing for accessibility scanning and client-ready reports.",
}

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <header className="mb-10 text-center md:mb-14">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          Pricing
        </h1>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
          Start free. Upgrade when you need unlimited scans, history, and
          client-ready PDF reports.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Free */}
        <PlanCard
          name="Free"
          price="$0"
          period="/mo"
          ctaLabel="Get Started"
          ctaHref="/signup"
          highlight={false}
          features={[
            "5 scans / day",
            "Core WCAG checks",
            "Plain-English guidance",
            "Shareable results link",
          ]}
          limits={[
            "No PDF export",
            "Limited history (24h)",
            "Community support",
          ]}
        />

        {/* Pro */}
        <PlanCard
          name="Pro"
          price="$29.99"
          period="/mo"
          ctaLabel="Upgrade to Pro"
          ctaHref="/signup?plan=pro"
          highlight
          badge="Most Popular"
          features={[
            "Unlimited scans",
            "PDF export (branded)",
            "Issue history & trends",
            "Priority checks & hints",
          ]}
          limits={["Email support", "Single user"]}
        />

        {/* Business */}
        <PlanCard
          name="Business"
          price="$109.99"
          period="/mo"
          ctaLabel="Choose Business"
          ctaHref="/signup?plan=business"
          highlight={false}
          features={[
            "Unlimited scans & projects",
            "Team seats (up to 10)",
            "Shared workspaces",
            "Report templates & branding",
          ]}
          limits={["Priority email support", "SLA available"]}
        />
      </div>

      {/* FAQ */}
      <section className="mt-14 md:mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Faq
            q="Can I try it before paying?"
            a="Yes — Free gives you daily scans to evaluate fit. You can upgrade anytime."
          />
          <Faq
            q="What’s included in Pro vs Business?"
            a="Pro unlocks unlimited scans and PDF export for individuals. Business adds team seats, shared workspaces, and brandable templates."
          />
          <Faq
            q="Do you offer refunds?"
            a="Monthly plans are billed in advance and cancellable anytime; your plan stays active through the current billing period."
          />
          <Faq
            q="Is there an annual discount?"
            a="Yes — if you’d like annual billing, contact us and we’ll enable it on your account."
          />
        </div>
      </section>
    </section>
  )
}

/* ----------------------- Components ----------------------- */

function PlanCard(props: {
  name: string
  price: string
  period: string
  ctaLabel: string
  ctaHref: string
  features: string[]
  limits?: string[]
  highlight?: boolean
  badge?: string
}) {
  return (
    <div
      className={
        "relative flex flex-col rounded-2xl border p-6 " +
        (props.highlight ? "ring-foreground ring-2" : "")
      }
    >
      {props.badge ? (
        <div className="bg-background absolute -top-3 right-4 rounded-full border px-3 py-1 text-xs font-semibold">
          {props.badge}
        </div>
      ) : null}

      <h3 className="text-xl font-semibold">{props.name}</h3>

      <div className="mt-2 flex items-end gap-1">
        <span className="text-4xl font-bold">{props.price}</span>
        <span className="text-muted-foreground pb-1 text-sm">
          {props.period}
        </span>
      </div>

      <Link
        href={props.ctaHref}
        className={
          "mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium " +
          (props.highlight
            ? "bg-foreground text-background hover:opacity-90"
            : "hover:bg-background border")
        }
        aria-label={`${props.ctaLabel} – ${props.name}`}
      >
        {props.ctaLabel}
      </Link>

      <div className="mt-6 space-y-2">
        <h4 className="text-sm font-semibold">What’s included</h4>
        <ul className="space-y-2">
          {props.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <span
                aria-hidden="true"
                className="mt-1 inline-block select-none"
              >
                ✓
              </span>
              <span className="text-muted-foreground">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {props.limits && props.limits.length > 0 ? (
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-semibold">Notes</h4>
          <ul className="space-y-2">
            {props.limits.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block select-none"
                >
                  •
                </span>
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-auto" />
    </div>
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
