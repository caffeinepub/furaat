import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onLearnMore?: () => void;
}

export default function ServiceCard({ icon: Icon, title, description, onLearnMore }: ServiceCardProps) {
  return (
    <div className="card-hover bg-white border border-offwhite-deeper rounded-sm p-8 flex flex-col group relative overflow-hidden shadow-xs">
      {/* Top blue accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-sm bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-300">
        <Icon
          size={26}
          className="text-brand group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Content */}
      <h3 className="section-heading text-xl font-semibold text-navy mb-3 group-hover:text-brand transition-colors duration-300">
        {title}
      </h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
        {description}
      </p>

      {/* Learn More */}
      <button
        onClick={onLearnMore}
        className="btn-outline-blue px-5 py-2.5 rounded-sm self-start text-xs"
      >
        Learn More
      </button>

      {/* Bottom decorative corner */}
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
