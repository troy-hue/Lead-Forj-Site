import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const LOGO_LIGHT = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69782029d21671f61db97b69/579dfcf3b_Lead_Forj_wordmark_dark.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#101214] text-[#F6F3EC]" style={{ fontFamily: "'Inter', sans-serif" }}>

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

      <section className="px-6 md:px-12 lg:px-20 py-20 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-medium mb-4">
          Request a Conversation About Signal-Driven Email Outreach
        </h1>
        <p className="text-[#8A8A8A] text-lg mb-10">
          Tell us about your B2B outreach goals and challenges. We'll confirm fit before discussing scope.
        </p>

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
            <Button
              type="submit"
              className="bg-[#C9A24D] text-[#101214] hover:bg-[#b8933f] px-6 py-3 h-auto font-medium"
            >
              Send message
              <ArrowRight className="w-4 h-4 ml-2" />
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
