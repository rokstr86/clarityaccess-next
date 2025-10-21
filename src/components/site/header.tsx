'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Moon, Sun, Menu } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
export function Header(){const {theme,setTheme}=useTheme();const [open,setOpen]=useState(false);return (
<header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/60">
  <div className="container flex h-16 items-center justify-between">
    <Link href="/" className="flex items-center gap-2 font-semibold"><span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-cyan-300 text-white">CA</span><span>Clarity Access</span></Link>
    <nav className={cn('hidden items-center gap-6 md:flex')}>
      <Link href="/features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Features</Link>
      <Link href="/pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Pricing</Link>
      <Link href="/about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">About</Link>
      <Link href="/contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Contact</Link>
      <Link href="/login" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Log in</Link>
      <Link href="/signup" className="rounded-lg bg-gradient-to-br from-brand to-brand-700 px-4 py-2 text-white shadow-md hover:brightness-105">Start free</Link>
      <button aria-label="Toggle theme" onClick={()=>setTheme(theme==='dark'?'light':'dark')} className="rounded-lg border border-slate-200 px-3 py-2 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900">
        <span className="sr-only">Toggle theme</span>
        <Sun className="size-4 hidden dark:inline" />
        <Moon className="size-4 dark:hidden" />
      </button>
    </nav>
    <button className="md:hidden rounded-lg border border-slate-200 p-2 dark:border-slate-800" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-label="Menu"><Menu className="size-5" /></button>
  </div>
  <div className={cn('md:hidden',open?'block':'hidden')}><div className="container grid gap-2 pb-4">
    <Link href="/features" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900">Features</Link>
    <Link href="/pricing" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900">Pricing</Link>
    <Link href="/about" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900">About</Link>
    <Link href="/contact" onClick={()=>setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-900">Contact</Link>
    <div className="grid grid-cols-2 gap-2">
      <Link href="/login" onClick={()=>setOpen(false)} className="rounded-lg border px-3 py-2 text-center dark:border-slate-800">Log in</Link>
      <Link href="/signup" onClick={()=>setOpen(false)} className="rounded-lg bg-gradient-to-br from-brand to-brand-700 px-3 py-2 text-center text-white">Start free</Link>
    </div>
  </div></div>
</header>) }
