import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import GridBackground from '@/components/GridBackground';
import PremiumDivider from '@/components/PremiumDivider';

const LOGO_LIGHT = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69782029d21671f61db97b69/579dfcf3b_Lead_Forj_wordmark_dark.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Set page-specific SEO meta tags
    document.title = "Contact Lead Fōrj - Request a Conversation About Signal-Driven Outreach";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Lead Fōrj to discuss signal-driven email outreach for your B2B consulting firm. We\'ll confirm fit before discussing scope.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Contact Lead Fōrj - Request a Conversation');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Get in touch to discuss signal-driven email outreach for your B2B consulting firm.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@leadforj.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `New inquiry from ${formData.name}`,
        }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email us directly at info@leadforj.com');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#101214] text-[#F6F3EC] relative" style={{ fontFamily: "'Inter', sans-serif" }}>
      <GridBackground />

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
        <Link to={createPageUrl('Home')}>
          <img src={LOGO_LIGHT} alt="Lead Fōrj" className="h-10 md:h-14" />
        </Link>
        <Link
          to={createPageUrl('Home')}
          className="flex items-center gap-2 text-sm text-[#8A8A8A] hover:text-[#F6F3EC] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </nav>

      <section className="px-6 md:px-12 lg:px-20 py-20 max-w-2xl relative z-10">
        <h1 className="text-3xl md:text-4xl font-medium mb-4">
          Request a Conversation About Signal-Driven Email Outreach
        </h1>
        <p className="text-[#8A8A8A] text-lg mb-8">
          Tell us about your B2B outreach goals and challenges. We'll confirm fit before discussing scope.
        </p>
        <PremiumDivider className="mb-10" />

        {submitted ? (
          <div className="bg-[#2B2B2B] p-8 rounded">
            <h2 className="text-xl font-medium mb-2">Thanks for Reaching Out</h2>
            <p className="text-[#8A8A8A]">
              We'll review your message and get back to you within 1-2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-[#8A8A8A] mb-2">Name</label>
              <Input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#2B2B2B] border-[#2B2B2B] text-[#F6F3EC] placeholder:text-[#8A8A8A] focus:border-[#C9A24D] focus:ring-[#C9A24D]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-[#8A8A8A] mb-2">Email</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#2B2B2B] border-[#2B2B2B] text-[#F6F3EC] placeholder:text-[#8A8A8A] focus:border-[#C9A24D] focus:ring-[#C9A24D]"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm text-[#8A8A8A] mb-2">Company</label>
              <Input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-[#2B2B2B] border-[#2B2B2B] text-[#F6F3EC] placeholder:text-[#8A8A8A] focus:border-[#C9A24D] focus:ring-[#C9A24D]"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="block text-sm text-[#8A8A8A] mb-2">What are you looking for?</label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-[#2B2B2B] border-[#2B2B2B] text-[#F6F3EC] placeholder:text-[#8A8A8A] focus:border-[#C9A24D] focus:ring-[#C9A24D] min-h-[120px]"
                placeholder="Tell us about your outreach goals and current challenges..."
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            <Button
              type="submit"
              disabled={sending}
              className="bg-[#C9A24D] text-[#101214] hover:bg-[#b8933f] px-6 py-3 h-auto font-medium disabled:opacity-50"
            >
              {sending ? 'Sending...' : 'Send message'}
              {!sending && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-[#2B2B2B] mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO_LIGHT} alt="Lead Fōrj" className="h-6" />
          <p className="text-[#8A8A8A] text-sm">
            © {new Date().getFullYear()} Lead Fōrj. Signal-driven email outreach.
          </p>
        </div>
      </footer>
    </div>
  );
}
