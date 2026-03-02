import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Check, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import GridBackground from '@/components/GridBackground';
import SignalPulse from '@/components/SignalPulse';
import DataLabel from '@/components/DataLabel';
import PremiumDivider from '@/components/PremiumDivider';
import ParallaxBackground from '@/components/ParallaxBackground';
import TypewriterText from '@/components/TypewriterText';
import AnimatedFlow from '@/components/AnimatedFlow';
import AnimatedListItem from '@/components/AnimatedListItem';
import SignalFrameworkDiagram from '@/components/SignalFrameworkDiagram';

const LOGO_LIGHT = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69782029d21671f61db97b69/579dfcf3b_Lead_Forj_wordmark_dark.png";

export default function Home() {
  useEffect(() => {
    // Set page-specific SEO meta tags
    document.title = "Lead Fōrj - Signal-Driven Email Outreach for B2B Consultants";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lead Fōrj designs and runs signal-driven email outreach systems for B2B consultants and service firms. Prioritizing relevance over volume to book higher-quality conversations.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Lead Fōrj - Signal-Driven Email Outreach for B2B Consultants');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Signal-driven email outreach systems that prioritize relevance over volume. Built for consultants and B2B service firms.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#101214] text-[#F6F3EC] relative" style={{ fontFamily: "'Sohne', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        @font-face {
          font-family: 'Sohne';
          src: url('https://raw.githubusercontent.com/troy-hue/Lead-F-rj-fonts/main/Sohne-Buch.woff') format('woff');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Sohne';
          src: url('https://raw.githubusercontent.com/troy-hue/Lead-F-rj-fonts/main/Sohne-Halbfett.woff') format('woff');
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: 'Sohne';
          src: url('https://raw.githubusercontent.com/troy-hue/Lead-F-rj-fonts/main/Sohne-Kraftig.woff') format('woff');
          font-weight: 600;
          font-style: normal;
        }

        h1, h2, h3 { font-family: 'Sohne', sans-serif; }
      `}</style>
      <GridBackground />
      <ParallaxBackground />

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 relative z-10">
        <img src={LOGO_LIGHT} alt="Lead Fōrj" className="h-10 md:h-14" />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to={createPageUrl('Contact')}
            className="text-sm text-[#F6F3EC] hover:text-[#C9A24D] transition-colors"
          >
            Contact
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start max-w-7xl">
          <div className="max-w-2xl flex-1">
            <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <SignalPulse />
            <DataLabel>Signal-driven outreach</DataLabel>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            <TypewriterText text="Signal-driven email outreach for fewer, better conversations" delay={0.4} />
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-[#8A8A8A] max-w-3xl mb-8"
        >
          Lead Fōrj designs and runs email outreach systems that prioritize relevance over volume, using AI-assisted research and real buyer signals to book higher-quality conversations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center gap-2 bg-[#C9A24D] text-[#101214] px-6 py-3 font-medium hover:bg-[#b8933f] transition-all duration-300 rounded-md"
            >
              Request a conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <p className="text-sm text-[#8A8A8A] mt-4">
            Built for consultants and B2B service firms where reputation and signal quality matter.
          </p>
        </motion.div>
          </div>

          {/* Hero Visual - Signal Network */}
          <motion.div
            className="hidden lg:block flex-shrink-0 w-80 xl:w-[420px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Concentric circles */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.circle
                    key={i}
                    cx="200"
                    cy="200"
                    r={40 + i * 35}
                    fill="none"
                    stroke="#2B2B2B"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  />
                ))}

                {/* Signal nodes */}
                {[
                  { x: 200, y: 80, delay: 0.8 },
                  { x: 320, y: 150, delay: 1 },
                  { x: 280, y: 280, delay: 1.2 },
                  { x: 120, y: 280, delay: 1.1 },
                  { x: 80, y: 150, delay: 0.9 },
                ].map((node, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="6"
                      fill="#C9A24D"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: node.delay, type: "spring" }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="12"
                      fill="none"
                      stroke="#C9A24D"
                      strokeWidth="1"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                      transition={{ delay: node.delay + 0.5, duration: 2, repeat: Infinity }}
                    />
                  </g>
                ))}

                {/* Connection lines */}
                <motion.path
                  d="M200,80 L320,150 L280,280 L120,280 L80,150 Z"
                  fill="none"
                  stroke="#C9A24D"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ delay: 1.5, duration: 2 }}
                />

                {/* Center focal point */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="8"
                  fill="#C9A24D"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8, type: "spring" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="20"
                  fill="none"
                  stroke="#C9A24D"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2, type: "spring" }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <PremiumDivider />
      <section className="px-6 md:px-12 lg:px-20 py-20 relative">
        <AnimatedSection className="max-w-4xl">
          <DataLabel className="mb-4 block">The problem</DataLabel>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Volume broke email. Signal will fix it.
          </h2>
          <p className="text-[#8A8A8A] text-lg mb-4">
            Email didn't stop working. Volume-first systems did.
          </p>
          <p className="text-[#8A8A8A] text-lg">
            Over-sending, shallow personalization, and list-based blasting have trained buyers to ignore most outbound. The result is damaged deliverability, wasted effort, and low-quality conversations.
          </p>
        </AnimatedSection>
      </section>

      {/* The Lead Fōrj Approach */}
      <PremiumDivider />
      <section className="px-6 md:px-12 lg:px-20 py-20 relative">
        <AnimatedSection className="max-w-4xl">
          <DataLabel className="mb-4 block">Our approach</DataLabel>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            We optimize for signal, not scale.
          </h2>
          <p className="text-[#8A8A8A] text-lg mb-4">
            Most outreach starts with a list and ends with volume.
          </p>
          <p className="text-[#8A8A8A] text-lg mb-4">
            Lead Fōrj works in the opposite direction.
          </p>
          <p className="text-[#8A8A8A] text-lg mb-4">
            We combine AI-assisted prospect research, automation, and real-world signals to determine <span className="text-[#F6F3EC]">who is worth emailing and why</span> before a single message is sent. That means fewer emails, deeper relevance, and better conversations.
          </p>
          <p className="text-[#8A8A8A] text-lg mb-10">
            Internally, this decision layer is powered by our signal framework, <span className="text-[#F6F3EC]">Fōrj Signal</span>, which guides targeting, personalization, and send decisions upstream.
          </p>

          {/* Fōrj Signal Framework Diagram */}
          <div className="mt-12 mb-2">
            <DataLabel className="mb-6 block">Fōrj Signal — the decision framework</DataLabel>
            <SignalFrameworkDiagram />
          </div>

          {/* Supporting Principles */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { num: "01", title: "Signal-first targeting", desc: "Prospects are selected based on relevance and timing, not list size." },
              { num: "02", title: "Depth over tokens", desc: "Personalization is driven by real context, not surface-level variables." },
              { num: "03", title: "Built to compound", desc: "Low-volume systems that protect deliverability and improve over time." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="border-l border-[#2B2B2B] group-hover:border-[#C9A24D] transition-colors pl-4">
                  <motion.span
                    className="text-xs text-[#C9A24D] font-mono"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                  >
                    {item.num}
                  </motion.span>
                  <h3 className="text-[#F6F3EC] font-medium mb-2 mt-1">{item.title}</h3>
                  <p className="text-[#8A8A8A] text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* What You Get */}
      <PremiumDivider />
      <section className="px-6 md:px-12 lg:px-20 py-20 relative">
        <AnimatedSection className="max-w-4xl">
          <DataLabel className="mb-4 block">What you get</DataLabel>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            A signal-driven system, managed end to end
          </h2>
          <p className="text-[#8A8A8A] text-lg mb-8">
            Lead Fōrj designs and operates email outreach systems built to identify the right prospects, personalize with real context, and book qualified conversations, without relying on volume.
          </p>
          <ul className="space-y-0 border-l border-[#2B2B2B]">
            {[
              "Signal-qualified prospect selection",
              "AI-assisted deep prospect research",
              "Deliverability-safe email infrastructure",
              "Personalized campaign execution",
              "Response handling and qualification",
              "Calendar booking with qualified prospects",
              "Continuous signal refinement"
            ].map((item, i) => (
              <AnimatedListItem key={i} index={i}>
                {item}
              </AnimatedListItem>
            ))}
          </ul>
        </AnimatedSection>
      </section>

      {/* Philosophy */}
      <PremiumDivider />
      <section className="px-6 md:px-12 lg:px-20 py-20 relative">
        <AnimatedSection className="max-w-4xl">
          <DataLabel className="mb-4 block">Philosophy</DataLabel>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Why fewer emails win
          </h2>
          <p className="text-[#8A8A8A] text-lg mb-4">
            The future of email isn't sending more messages. It's making better decisions.
          </p>
          <p className="text-[#8A8A8A] text-lg mb-4">
            High-volume outreach trains buyers to ignore you, damages deliverability, and produces low-quality conversations. Lead Fōrj takes the opposite approach. By combining deep research, automation, and real buyer signals, we reduce send volume while increasing relevance, response quality, and long-term results.
          </p>
          <motion.p
            className="text-[#F6F3EC] text-lg font-medium border-l-2 border-[#C9A24D] pl-4 py-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            If there isn't enough signal to justify an email, we don't send one.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* Volume vs Signal */}
      <PremiumDivider />
      <section className="px-6 md:px-12 lg:px-20 py-20 relative">
        <AnimatedSection className="max-w-4xl">
          <DataLabel className="mb-4 block">Comparison</DataLabel>
          <h2 className="text-2xl md:text-3xl font-medium mb-10">
            Volume vs Signal
          </h2>
          <div className="grid md:grid-cols-2 gap-0">
            <motion.div
              className="bg-[#2B2B2B]/30 p-6 border border-[#2B2B2B]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ backgroundColor: "rgba(43, 43, 43, 0.5)", scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  className="w-2 h-2 bg-[#8A8A8A]/50 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h3 className="text-[#8A8A8A] font-medium">Volume-driven</h3>
              </div>
              <AnimatedFlow steps={["Large lists", "mass sends", "low trust"]} color="#8A8A8A" />
            </motion.div>
            <motion.div
              className="bg-[#2B2B2B]/50 p-6 border border-[#2B2B2B] border-l-2 border-l-[#C9A24D]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ backgroundColor: "rgba(43, 43, 43, 0.7)", scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <SignalPulse />
                <h3 className="text-[#F6F3EC] font-medium">Signal-driven</h3>
              </div>
              <AnimatedFlow steps={["Signals", "research", "real conversations"]} color="#C9A24D" />
            </motion.div>
          </div>
          <p className="text-[#8A8A8A] text-sm mt-6 text-center font-mono">
            Volume optimizes for activity. Signal optimizes for outcomes.
          </p>
        </AnimatedSection>
      </section>

      {/* Who This Is For */}
      <PremiumDivider />
      <section className="px-6 md:px-12 lg:px-20 py-20 relative">
        <AnimatedSection className="max-w-4xl">
          <DataLabel className="mb-4 block">Fit assessment</DataLabel>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="border border-[#2B2B2B] p-6">
              <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                <span className="text-[#C9A24D] font-mono text-sm">TRUE</span>
                This is a fit if:
              </h3>
              <ul className="space-y-4">
                {[
                  "You value quality over volume",
                  "Your reputation matters",
                  "You sell expertise or services",
                  "You want fewer, better conversations"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-[#8A8A8A] group"
                  >
                    <Check className="w-4 h-4 text-[#C9A24D] mt-1 flex-shrink-0" />
                    <span className="group-hover:text-[#F6F3EC] transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="border border-[#2B2B2B] border-l-0 p-6 bg-[#2B2B2B]/20">
              <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                <span className="text-[#8A8A8A] font-mono text-sm">FALSE</span>
                This is not a fit if:
              </h3>
              <ul className="space-y-4">
                {[
                  "You want mass outreach",
                  "You optimize for send volume",
                  "You need instant results"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-3 text-[#8A8A8A]"
                  >
                    <X className="w-4 h-4 text-[#8A8A8A]/50 mt-1 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA */}
      <PremiumDivider />
      <section className="px-6 md:px-12 lg:px-20 py-20 relative">
        <AnimatedSection className="max-w-4xl">
          <DataLabel className="mb-4 block">Next step</DataLabel>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Start with a conversation
          </h2>
          <p className="text-[#8A8A8A] text-lg mb-2">
            If there's a fit, we'll design a signal-driven system.
          </p>
          <p className="text-[#8A8A8A] text-lg mb-8">
            If there isn't, we'll tell you.
          </p>
          <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center gap-2 bg-[#C9A24D] text-[#101214] px-6 py-3 font-medium hover:bg-[#b8933f] transition-all duration-300 rounded-md"
            >
              Request a conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <p className="text-sm text-[#8A8A8A] mt-4 font-mono">
            We'll confirm fit before discussing scope.
          </p>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-[#2B2B2B]">
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
