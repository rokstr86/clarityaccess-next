import Link from 'next/link'
export function Footer(){return (
<footer className="mt-16 border-t border-slate-200/60 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-950">
  <div className="container grid gap-8 py-10 md:grid-cols-4">
    <div className="col-span-2"><Link href="/" className="flex items-center gap-2 font-semibold"><span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-cyan-300 text-white">CA</span><span>Clarity Access</span></Link>
      <p className="mt-3 max-w-prose text-sm text-slate-600 dark:text-slate-400">Edit, polish, and publish clear writing across your team.</p>
    </div>
    <div><h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Product</h3>
      <div className="mt-2 grid gap-2 text-sm text-slate-600 dark:text-slate-400"><Link href="/features">Features</Link><Link href="/pricing">Pricing</Link></div></div>
    <div><h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Company</h3>
      <div className="mt-2 grid gap-2 text-sm text-slate-600 dark:text-slate-400"><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div>
  </div>
  <div className="border-t border-slate-200/60 py-4 text-center text-xs text-slate-500 dark:border-slate-800/60 dark:text-slate-400">© {new Date().getFullYear()} Clarity Access. All rights reserved.</div>
</footer>) }
