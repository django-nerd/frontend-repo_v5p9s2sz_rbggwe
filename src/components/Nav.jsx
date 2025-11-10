import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#products', label: 'Products' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-inset ring-indigo-400/30">
              <Rocket className="h-5 w-5 text-indigo-300" />
            </span>
            <span className="font-semibold tracking-tight">Immudat</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90">
          <div className="space-y-1 px-4 pt-2 pb-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-indigo-500 px-3 py-2 text-base font-medium text-white hover:bg-indigo-400"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
