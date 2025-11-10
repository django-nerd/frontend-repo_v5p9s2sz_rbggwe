export default function CTA() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Bring verifiability to your stack</h2>
            <p className="mt-4 text-slate-300">
              Use Immudat for audit logs, financial systems, identity trails, healthcare records, and any workflow that demands proof of integrity.
              SDKs and APIs fit naturally into modern microservices and event-driven designs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                Get a demo
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                Why immutability
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 p-6">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
            <ul className="relative grid grid-cols-2 gap-4 text-sm text-slate-200">
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Merkle proofs</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Append-only</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Temporal queries</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Tamper-evident</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">API-first</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">Zero-trust</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
