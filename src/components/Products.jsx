import { Shield, Database, Fingerprint, Clock } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Immutability by design',
    desc: 'Every record is cryptographically signed and verifiable. Detect tampering instantly with Merkle proofs.',
  },
  {
    icon: Database,
    title: 'High-performance ledger',
    desc: 'Append-only storage engineered for low-latency writes and horizontal scalability.',
  },
  {
    icon: Fingerprint,
    title: 'Zero-trust ready',
    desc: 'Trust the math, not the environment. End-to-end verification for compliance-critical workloads.',
  },
  {
    icon: Clock,
    title: 'Time-travel queries',
    desc: 'Query any point-in-time state for audits and forensics with millisecond retrieval.',
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Products</h2>
          <p className="mt-3 text-slate-300">Core capabilities that power verifiable, tamper-proof applications.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-inset ring-indigo-400/30">
                <Icon className="h-6 w-6 text-indigo-300" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
