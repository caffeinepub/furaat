import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Al Hamra Tower, Floor 22\nKuwait City, Kuwait',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+965 2200 1234\n+965 2200 5678',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@furaat.com\ntrade@furaat.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Sunday – Thursday\n8:00 AM – 5:00 PM (AST)',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white section-divider arabesque-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-brand" />
            <span className="font-body text-brand text-xs tracking-widest uppercase font-medium">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-brand" />
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl text-navy mb-4">
            Contact <span className="blue-gradient-text">Us</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to explore trade opportunities? Our team of experts is here to help you 
            navigate global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brand rounded-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="absolute inset-0 geometric-pattern opacity-10" />

              <div className="relative z-10">
                <h3 className="section-heading text-xl text-white mb-2">
                  Reach Out to Us
                </h3>
                <p className="font-body text-white/70 text-sm mb-8 leading-relaxed">
                  Whether you're looking to expand your trade network or need expert guidance, 
                  we're just a message away.
                </p>

                <div className="space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-sm bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <detail.icon size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-body text-white/60 text-xs tracking-widest uppercase font-medium mb-1">
                          {detail.label}
                        </div>
                        <div className="font-body text-white/90 text-sm leading-relaxed whitespace-pre-line">
                          {detail.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative bottom */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="font-body text-white/50 text-xs italic text-center">
                    "Your success in global trade is our commitment."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-offwhite-deeper rounded-sm p-8 shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent" />
              <h3 className="section-heading text-xl text-navy mb-2">
                Send Us a Message
              </h3>
              <p className="font-body text-muted-foreground text-sm mb-8">
                Fill out the form below and we'll respond within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
