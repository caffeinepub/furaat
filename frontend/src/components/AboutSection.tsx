import { CheckCircle2, Award, Users, Globe2 } from 'lucide-react';

const values = [
  {
    icon: CheckCircle2,
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and transparency in every transaction and partnership.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering superior quality in our services, products, and customer relationships.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We believe in building lasting relationships based on mutual trust, respect, and shared success.',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'Our extensive network spans continents, giving our clients access to markets worldwide.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-offwhite section-divider relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-brand" />
            <span className="font-body text-brand text-xs tracking-widest uppercase font-medium">
              Our Story
            </span>
            <div className="h-px w-12 bg-brand" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-4">
            About <span className="blue-gradient-text">Furaat</span>
          </h2>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-white border border-brand-light rounded-sm p-10 relative overflow-hidden shadow-card">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand to-transparent" />
            <div className="mb-4">
              <span className="font-body text-brand text-xs tracking-widest uppercase font-medium">Our Mission</span>
            </div>
            <h3 className="section-heading text-2xl text-navy mb-4">
              Empowering Global Commerce
            </h3>
            <p className="font-body text-navy/70 leading-relaxed text-base">
              At Furaat, our mission is to empower businesses of all sizes to participate in 
              global trade with confidence. We provide the expertise, networks, and infrastructure 
              needed to navigate complex international markets, ensuring our clients achieve 
              sustainable growth and competitive advantage.
            </p>
            <div className="mt-6 pt-6 border-t border-brand-light">
              <p className="font-body text-navy/40 text-sm italic">
                "Connecting the world, one trade at a time."
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white border border-brand-light rounded-sm p-10 relative overflow-hidden shadow-card">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand to-transparent" />
            <div className="mb-4">
              <span className="font-body text-brand text-xs tracking-widest uppercase font-medium">Our Vision</span>
            </div>
            <h3 className="section-heading text-2xl text-navy mb-4">
              A World Without Trade Barriers
            </h3>
            <p className="font-body text-navy/70 leading-relaxed text-base">
              We envision a future where businesses across the Middle East and beyond can 
              seamlessly access global markets, fostering economic prosperity and cultural 
              exchange. Furaat strives to be the most trusted name in international trade, 
              recognized for our integrity, innovation, and impact.
            </p>
            <div className="mt-6 pt-6 border-t border-brand-light">
              <p className="font-body text-navy/40 text-sm italic">
                "Building bridges between markets and people."
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-16">
          <img
            src="/assets/generated/divider-pattern.dim_1440x80.png"
            alt="Decorative divider"
            className="w-full h-16 object-cover opacity-30"
          />
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="section-heading text-3xl text-navy mb-2">
            Our Core <span className="blue-gradient-text">Values</span>
          </h3>
          <p className="font-body text-navy/50 text-base">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-8 bg-white border border-brand-light rounded-sm hover:border-brand hover:shadow-blue transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-5 group-hover:bg-brand transition-colors duration-300">
                <value.icon size={24} className="text-brand group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="section-heading text-lg text-navy mb-3">{value.title}</h4>
              <p className="font-body text-navy/60 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Company highlights */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-brand-light pt-16">
          {[
            { value: '1995', label: 'Founded' },
            { value: '500+', label: 'Active Clients' },
            { value: '$2B+', label: 'Trade Volume' },
            { value: '50+', label: 'Countries' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-bold text-brand mb-2">{stat.value}</div>
              <div className="font-body text-navy/40 text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
