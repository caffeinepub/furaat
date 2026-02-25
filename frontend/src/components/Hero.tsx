import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-banner.dim_1440x600.png"
          alt="Furaat Hero Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay - navy blue tint */}
        <div className="absolute inset-0 bg-navy-dark/70" />
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark/50 to-transparent" />
      </div>

      {/* Decorative side accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-48 bg-gradient-to-b from-transparent via-brand to-transparent opacity-70 hidden lg:block" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-48 bg-gradient-to-b from-transparent via-brand to-transparent opacity-70 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-48">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/40 text-brand-light px-4 py-1.5 rounded-full text-xs font-body font-medium tracking-widest uppercase mb-6">
            <Star size={12} className="fill-current" />
            Excellence in Trade & Supply
            <Star size={12} className="fill-current" />
          </div>

          {/* Headline */}
          <h1 className="section-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Bridging Markets,{' '}
            <span className="blue-gradient-text">Building Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Furaat is your premier partner for international trade, supply chain solutions, 
            and business development across the Middle East and beyond. We connect quality 
            suppliers with global markets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); handleScroll('#services'); }}
              className="btn-blue px-8 py-4 rounded-sm inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Services
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}
              className="btn-outline-blue px-8 py-4 rounded-sm inline-flex items-center gap-2 cursor-pointer border-white/60 text-white hover:bg-white hover:text-brand"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { value: '1995', label: 'Est.' },
              { value: '500+', label: 'Clients' },
              { value: '$2B+', label: 'Trade Volume' },
              { value: '50+', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-brand-light mb-1">{stat.value}</div>
                <div className="font-body text-white/50 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
