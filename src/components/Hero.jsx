import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[78vh] items-center">
          <div className="max-w-2xl py-24">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-indigo-200 ring-1 ring-inset ring-white/20">Immutable data infrastructure</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Build tamper-proof apps with Immudat
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300">
              Cryptographically verifiable data storage, high-performance append-only logs, and APIs designed for modern, compliance-ready systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                Explore products
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-64 bg-gradient-to-b from-slate-950 via-slate-950/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
    </section>
  );
}
