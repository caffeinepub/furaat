import {
  Globe,
  Package,
  TrendingUp,
  Shield,
  Truck,
  Handshake,
  BarChart3,
  Leaf,
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Globe,
    title: 'International Trade',
    description:
      'Facilitating seamless cross-border trade with expertise in import/export regulations, customs clearance, and international logistics across 50+ countries.',
  },
  {
    icon: Package,
    title: 'Supply Chain Solutions',
    description:
      'End-to-end supply chain management from sourcing to delivery, ensuring quality control, timely fulfillment, and cost-effective procurement strategies.',
  },
  {
    icon: TrendingUp,
    title: 'Market Development',
    description:
      'Strategic market entry and expansion services, helping businesses identify opportunities and establish a strong presence in new regional markets.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Rigorous quality inspection and certification services ensuring all products meet international standards and client specifications before delivery.',
  },
  {
    icon: Truck,
    title: 'Freight & Logistics',
    description:
      'Comprehensive freight forwarding by air, sea, and land with real-time tracking, warehousing, and last-mile delivery solutions.',
  },
  {
    icon: Handshake,
    title: 'Business Partnerships',
    description:
      'Building long-term strategic alliances between manufacturers, distributors, and retailers to create mutually beneficial trade relationships.',
  },
  {
    icon: BarChart3,
    title: 'Trade Consulting',
    description:
      'Expert advisory services on trade finance, risk management, regulatory compliance, and market intelligence to optimize your trading operations.',
  },
  {
    icon: Leaf,
    title: 'Agricultural Commodities',
    description:
      'Specialized trading in premium agricultural products including grains, spices, dates, and fresh produce sourced from trusted regional farms.',
  },
];

export default function ServicesSection() {
  const handleLearnMore = (_title: string) => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-white section-divider arabesque-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-brand" />
            <span className="font-body text-brand text-xs tracking-widest uppercase font-medium">
              What We Offer
            </span>
            <div className="h-px w-12 bg-brand" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-4">
            Our Services & <span className="blue-gradient-text">Expertise</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From international trade facilitation to supply chain optimization, we offer 
            comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onLearnMore={() => handleLearnMore(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
