import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  ShieldCheck,
  Clock,
  Globe2,
  CheckCircle2,
  ChevronRight,
  Headphones,
  Building2,
  Scale,
  Users2,
  BadgeCheck,
  CreditCard,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ────────────────────────────────────────────────────────────────────────────────
// CONFIG – edit these to make it yours
// ────────────────────────────────────────────────────────────────────────────────
const BRAND = {
  name: "NorthBridgeCX Legal Intake",
  tagline: "24/7 Legal Intake & Call Answering",
  domain: "northbridgelegal.com",
  email: "hello@northbridgelegal.com",
  phone: "+1 (437) 987-8350",
  address: "Toronto, ON, Canada",
  calendly: "https://calendly.com/", // replace with your booking link
  formEndpoint: "https://formspree.io/f/your-id", // replace with Formspree or your API
};

const Nav = () => (
  <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-3">
        <Logo />
        <div className="leading-tight">
          <div className="font-semibold text-lg">{BRAND.name}</div>
          <div className="text-xs text-muted-foreground">{BRAND.tagline}</div>
        </div>
      </a>
      <div className="hidden md:flex items-center gap-6 text-sm">
        <a href="#services" className="hover:text-primary">Services</a>
        <a href="#industries" className="hover:text-primary">Practice Areas</a>
        <a href="#pricing" className="hover:text-primary">Pricing</a>
        <a href="#security" className="hover:text-primary">Security</a>
        <a href="#contact" className="hover:text-primary">Contact</a>
        <Button asChild>
          <a href={BRAND.calendly} target="_blank" rel="noreferrer">Book a Call</a>
        </Button>
      </div>
      <div className="md:hidden">
        <Button asChild variant="outline" size="icon">
          <a href="#contact"><ChevronRight className="w-5 h-5" /></a>
        </Button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Never miss a new client call again.
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Canada-based virtual call centre with global delivery. We capture every lead, qualify cases,
          and book consultations — 24/7. Built specifically for small and mid-sized law firms across North America.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={BRAND.calendly} target="_blank" rel="noreferrer">
              <PhoneCall className="w-4 h-4 mr-2" /> Book a discovery call
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#pricing">See pricing</a>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> 24/7 coverage</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Confidentiality-first</span>
          <span className="inline-flex items-center gap-2"><Globe2 className="w-4 h-4" /> Bilingual available</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-xl">Free Intake Coverage Estimate</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={BRAND.formEndpoint} method="POST" className="grid gap-3">
              <Input name="name" placeholder="Full name" required />
              <Input name="email" type="email" placeholder="Work email" required />
              <Input name="company" placeholder="Law firm name" />
              <Input name="phone" placeholder="Phone" />
              <Textarea
                name="message"
                placeholder="What do you need? E.g., after-hours intake, lead qualification, consultation booking, bilingual"
                rows={4}
              />
              <input type="hidden" name="source" value="Website Hero Form" />
              <Button type="submit" className="w-full">Get my estimate</Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree we may contact you about services.
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

const Trust = () => (
  <section className="py-10 border-y bg-white">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6 text-center">
      {[
        { icon: <Headphones className="w-5 h-5" />, label: "Legal intake specialists" },
        { icon: <BadgeCheck className="w-5 h-5" />, label: "SLA-backed response times" },
        { icon: <Users2 className="w-5 h-5" />, label: "Dedicated agents & shared plans" },
        { icon: <ShieldCheck className="w-5 h-5" />, label: "Confidentiality-first workflows" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-center gap-2 text-sm">
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-16 md:py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Services</h2>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        Purpose-built intake and call handling for law firms. We follow your scripts, qualify leads,
        and book consultations directly into your calendar or practice management tools.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5" /> Legal Intake 24/7
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <Bullet>New-case screening against your criteria</Bullet>
            <Bullet>Conflict checks & detailed intake notes</Bullet>
            <Bullet>After-hours & weekend coverage</Bullet>
            <Bullet>Consultation booking & warm transfers</Bullet>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> Reception & Lead Capture
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <Bullet>Answering, message taking, and routing</Bullet>
            <Bullet>CRM logging (Clio, PracticePanther, etc.)</Bullet>
            <Bullet>Spam filtering & caller verification</Bullet>
            <Bullet>Daily call summaries to your inbox</Bullet>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Headphones className="w-5 h-5" /> Client Care & Follow-Ups
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <Bullet>Consultation reminders & rescheduling</Bullet>
            <Bullet>Document/paperwork reminders (per your process)</Bullet>
            <Bullet>Escalations for urgent matters</Bullet>
            <Bullet>Weekly reporting & QA scorecards</Bullet>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section id="industries" className="py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Practice Areas</h2>
      <p className="text-muted-foreground mb-8">
        We work best with small and mid-sized firms where every call matters and speed wins cases.
      </p>
      <div className="grid md:grid-cols-4 gap-6">
        <MiniCard icon={<Scale className="w-5 h-5" />} title="Personal Injury" desc="High-value leads. Speed matters." />
        <MiniCard icon={<Scale className="w-5 h-5" />} title="Family Law" desc="Empathetic, structured intake." />
        <MiniCard icon={<Scale className="w-5 h-5" />} title="Immigration" desc="High volume. Consistent follow-ups." />
        <MiniCard icon={<Scale className="w-5 h-5" />} title="Criminal Defence" desc="After-hours urgency and routing." />
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-16 md:py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        Start small or scale with dedicated intake specialists. All plans include call recording, QA, and weekly reporting.
        Cancel anytime.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <PriceCard
          title="Starter"
          price="$2,000/mo"
          tagline="Shared team · for smaller firms"
          features={[
            "Business hours coverage",
            "Basic intake & message routing",
            "Weekly summary report",
            "SLA 95% within 60s",
          ]}
          cta="Get started"
        />
        <PriceCard
          title="Growth"
          price="$3,500/mo"
          tagline="Extended hours · higher lead volume"
          popular
          features={[
            "8am–10pm coverage",
            "Lead qualification + consultation booking",
            "Bilingual option",
            "SLA 95% within 45s",
          ]}
          cta="Book a call"
        />
        <PriceCard
          title="Dedicated Agent"
          price="$5,600+/mo"
          tagline="Full-time agent (160 hrs) + playbooks"
          features={[
            "Your dedicated intake specialist",
            "Custom scripts & QA scorecards",
            "Direct line & Slack/Teams access",
            "SLA 95% within 30s",
          ]}
          cta="Reserve an agent"
        />
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        * Example pricing in CAD. Final pricing depends on hours, call volume, practice area, and reporting/QA requirements.
      </p>
    </div>
  </section>
);

const Security = () => (
  <section id="security" className="py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Confidentiality & Security</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Data Protection</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <Bullet>PIPEDA (Canada) / GDPR processes</Bullet>
            <Bullet>Confidentiality-first workflows for legal intake</Bullet>
            <Bullet>Role-based access & audit logging</Bullet>
            <Bullet>Call recording consent workflows</Bullet>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><LockKeyhole className="w-5 h-5" /> Secure Infrastructure</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <Bullet>Encrypted VoIP & VPN enforcement</Bullet>
            <Bullet>SSO + password manager policy</Bullet>
            <Bullet>Geo-fenced access for agents</Bullet>
            <Bullet>Incident response playbooks</Bullet>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><CreditCard className="w-5 h-5" /> Payments & Billing</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <Bullet>Stripe invoicing & auto-pay</Bullet>
            <Bullet>Month-to-month or annual terms</Bullet>
            <Bullet>Usage-based overage options</Bullet>
            <Bullet>Detailed call analytics portal</Bullet>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-16 md:py-24 bg-slate-900 text-slate-100">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's talk</h2>
        <p className="text-slate-300 mb-6">
          Tell us about your firm. We'll propose a plan, scripts, and a quick pilot — usually within 48 hours.
        </p>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> {BRAND.email}</li>
          <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> {BRAND.phone}</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {BRAND.address}</li>
        </ul>
        <div className="flex gap-3 mt-6">
          <Button asChild variant="secondary">
            <a href={BRAND.calendly} target="_blank" rel="noreferrer">Book on Calendly</a>
          </Button>
          <Button asChild variant="ghost"><a href="#pricing">See pricing</a></Button>
        </div>
        <div className="flex gap-4 mt-8 opacity-80">
          <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
        </div>
      </div>

      <Card className="bg-white text-slate-900">
        <CardHeader>
          <CardTitle>Send a message</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={BRAND.formEndpoint} method="POST" className="grid gap-3">
            <div className="grid md:grid-cols-2 gap-3">
              <Input name="name" placeholder="Full name" required />
              <Input name="email" type="email" placeholder="Work email" required />
            </div>
            <Input name="company" placeholder="Law firm name" />
            <Input name="phone" placeholder="Phone" />
            <Textarea name="message" placeholder="What do you need help with?" rows={5} />
            <input type="hidden" name="source" value="Website Contact Form" />
            <Button type="submit" className="w-full">Submit</Button>
            <p className="text-xs text-muted-foreground">We respond within one business day.</p>
          </form>
        </CardContent>
      </Card>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-10 border-t bg-white">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Logo small />
        <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#security" className="hover:text-foreground">Security</a>
        <a href="#pricing" className="hover:text-foreground">Pricing</a>
        <a href="#contact" className="hover:text-foreground">Contact</a>
      </div>
    </div>
  </footer>
);

// ────────────────────────────────────────────────────────────────────────────────
// UI HELPERS
// ────────────────────────────────────────────────────────────────────────────────
const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2">
    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" />
    <span>{children}</span>
  </div>
);

const MiniCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <Card className="shadow-sm">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">{icon} {title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
  </Card>
);

const PriceCard = ({
  title,
  price,
  tagline,
  features,
  cta,
  popular,
}: {
  title: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  popular?: boolean;
}) => (
  <Card className={`relative shadow-sm ${popular ? "ring-2 ring-primary" : ""}`}>
    {popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
        Most popular
      </div>
    )}
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">{price}</div>
      <div className="text-sm text-muted-foreground mb-4">{tagline}</div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="w-full mt-6"><a href="#contact">{cta}</a></Button>
    </CardContent>
  </Card>
);

const Logo = ({ small = false }: { small?: boolean }) => (
  <div className={`relative ${small ? "w-8 h-8" : "w-10 h-10"}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#g)" opacity="0.15" />
      <path d="M12 40 L28 20 L36 30 L52 20" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M12 44 L28 24 L36 34 L52 24" stroke="#6366f1" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  </div>
);

// ────────────────────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────────────────────
export default function Site() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Industries />
      <Pricing />
      <Security />
      <Contact />
      <Footer />
    </div>
  );
}
Add main website page
