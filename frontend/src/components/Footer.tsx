import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram, SiYoutube } from 'react-icons/si';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'International Trade',
  'Supply Chain Solutions',
  'Market Development',
  'Quality Assurance',
  'Freight & Logistics',
  'Trade Consulting',
];

const socialLinks = [
  { icon: SiFacebook, href: '#', label: 'Facebook' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
  { icon: SiYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'furaat-app'
  );

  return (
    <footer className="bg-navy-dark text-white/70 relative overflow-hidden">
      {/* Top blue accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent" />

      {/* Geometric background */}
      <div className="absolute inset-0 geometric-pattern opacity-5" />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <img
                src="/assets/generated/logo.dim_300x100.png"
                alt="Furaat Logo"
                className="h-12 w-auto object-contain mb-5 brightness-110"
              />
              <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
                Furaat is a premier international trading company connecting businesses 
                across the Middle East and global markets since 1995.
              </p>
              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-sm bg-white/10 border border-brand/20 flex items-center justify-center text-white/50 hover:text-brand-light hover:border-brand/50 transition-all duration-200"
                  >
                    <social.icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-body text-white text-xs tracking-widest uppercase font-semibold mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-brand inline-block" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="font-body text-white/60 text-sm hover:text-brand-light transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand transition-all duration-200 inline-block" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-body text-white text-xs tracking-widest uppercase font-semibold mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-brand inline-block" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
                      className="font-body text-white/60 text-sm hover:text-brand-light transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand transition-all duration-200 inline-block" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-body text-white text-xs tracking-widest uppercase font-semibold mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-brand inline-block" />
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-brand-light flex-shrink-0 mt-0.5" />
                  <span className="font-body text-white/60 text-sm leading-relaxed">
                    Al Hamra Tower, Floor 22<br />
                    Kuwait City, Kuwait
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-brand-light flex-shrink-0 mt-0.5" />
                  <span className="font-body text-white/60 text-sm">
                    +965 2200 1234
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-brand-light flex-shrink-0 mt-0.5" />
                  <span className="font-body text-white/60 text-sm">
                    info@furaat.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-white/40 text-xs">
              © {new Date().getFullYear()} Furaat Trading Company. All rights reserved.
            </p>
            <p className="font-body text-white/40 text-xs flex items-center gap-1.5">
              Built with{' '}
              <Heart size={12} className="text-brand-light fill-current" />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-light hover:text-brand-muted transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
