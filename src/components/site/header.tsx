"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          ClarityAccess
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "hover:text-foreground text-sm transition-colors " +
                  (active
                    ? "text-foreground font-medium"
                    : "text-muted-foreground")
                }
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle Menu"
          className="inline-flex items-center justify-center rounded-md border px-2 py-1 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={18} />
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={
                    "rounded-md px-3 py-2 text-sm " +
                    (active
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted")
                  }
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
