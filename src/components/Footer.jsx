export default function Footer() {
  return (
    <footer id="about" className="border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-white font-semibold">Immudat</h3>
            <p className="mt-2 text-sm text-slate-300">
              Building cryptographically verifiable data infrastructure so teams can ship with confidence and compliance.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Use cases</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Audit trails</li>
              <li>Financial systems</li>
              <li>Healthcare records</li>
              <li>Identity and access</li>
            </ul>
          </div>
          <div id="contact">
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <p className="mt-3 text-sm text-slate-300">hello@immudat.io</p>
            <p className="text-sm text-slate-300">San Francisco, CA</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Immudat. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
