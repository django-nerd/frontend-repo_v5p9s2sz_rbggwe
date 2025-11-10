import Nav from './components/Nav';
import Hero from './components/Hero';
import Products from './components/Products';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Nav />
      <main>
        <Hero />
        <Products />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
