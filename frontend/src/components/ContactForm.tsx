import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { useSubmitContactForm } from '../hooks/useQueries';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const submitMutation = useSubmitContactForm();

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email';
    if (!message.trim()) newErrors.message = 'Message is required';
    else if (message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await submitMutation.mutateAsync({ name: name.trim(), email: email.trim(), message: message.trim() });
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch (err) {
      // Error handled by mutation state
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center mb-6">
          <CheckCircle2 size={36} className="text-brand" />
        </div>
        <h4 className="section-heading text-2xl text-navy mb-3">Message Sent!</h4>
        <p className="font-body text-muted-foreground text-base max-w-sm leading-relaxed">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 btn-outline-blue px-6 py-2.5 rounded-sm text-xs"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div className="space-y-1.5">
        <Label htmlFor="name" className="font-body text-navy text-xs tracking-widest uppercase font-medium">
          Full Name
        </Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className={`font-body text-sm bg-white border-offwhite-deeper focus:border-brand focus:ring-brand/20 ${
            errors.name ? 'border-destructive' : ''
          }`}
          disabled={submitMutation.isPending}
        />
        {errors.name && (
          <p className="font-body text-destructive text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email" className="font-body text-navy text-xs tracking-widest uppercase font-medium">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`font-body text-sm bg-white border-offwhite-deeper focus:border-brand focus:ring-brand/20 ${
            errors.email ? 'border-destructive' : ''
          }`}
          disabled={submitMutation.isPending}
        />
        {errors.email && (
          <p className="font-body text-destructive text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message" className="font-body text-navy text-xs tracking-widest uppercase font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your trade requirements..."
          rows={5}
          className={`font-body text-sm bg-white border-offwhite-deeper focus:border-brand focus:ring-brand/20 resize-none ${
            errors.message ? 'border-destructive' : ''
          }`}
          disabled={submitMutation.isPending}
        />
        {errors.message && (
          <p className="font-body text-destructive text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit error */}
      {submitMutation.isError && (
        <p className="font-body text-destructive text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitMutation.isPending}
        className="btn-blue w-full py-3.5 rounded-sm inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitMutation.isPending ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
