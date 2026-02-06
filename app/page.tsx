"use client";
import type React from "react";
import { PhoneCall, ShieldCheck, Clock, Globe2, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

const BRAND = {
  name: "NorthBridge CX",
  tagline: "24/7 Legal Intake & Call Answering",
  domain: "northbridgecx.com",
  email: "hello@northbridgecx.com",
  phone: "+1 (437) 987-8350",
  address: "Toronto, ON, Canada",
  calendly: "https://calendly.com/", // replace with your booking link
  formEndpoint: "https://formspree.io/f/your-id", // replace with Formspree
};

const Button = ({
  href,
  children,
  variant = "solid",
  targetBlank,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  targetBlank?: boolean;
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";
  const solid = "bg-slate-900 text-white hover:bg-slate-800";
  const outline = "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50";
  return (
    <a
      href={href}
      className={`${base} ${variant === "solid" ? solid : outline}`}
      target={targetBlank ? "_blank" : undefined}
      rel={targetBlank ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-lg font-semibold tracking-tight ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pt-2 ${className}`}>{children}</div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2">
    <CheckCircle2 className="mt-0.5 h-4 w-4 text-slate-900" />
    <span>{children}</span>
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-900" />
            <div className="leading-tight">
              <div className="text-lg font-semibold">{BRAND.name}</div>
              <div className="text-xs text-slate-500">{BRAND.tagline}</div>
            </div>
          </a>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:text-slate-900" href="#services">Services</a>
            <a className="hover:text-slate-900" href="#practice">Practice Areas</a>
            <a className="hover:text-slate-900" href="#pricing">Pricing</a>
            <a className="hover:text-slate-900" href="#security">Security</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
            <Button href={BRAND.calendly} targetBlank>Book a Call</Button>
          </div>

          <div className="md:hidden">
            <Button href="#contact" variant="outline">Contact</Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Never miss a new client call again.
            </h1>
            <p className="mb-6 text-lg text-slate-600">
              Canada-based virtual call centre with global delivery. We capture every lead, qualify cases,
              and book consultations 24/7. Built specifically for small and mid-sized law firms across North America.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href={BRAND.calendly} targetBlank>
                <PhoneCall className="mr-2 h-4 w-4" />
                Book a discovery call
              </Button>
              <Button href="#pricing" variant="outline">See pricing</Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 24/7 coverage</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Confidentiality-first</span>
              <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4" /> Bilingual available</span>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Free Intake Coverage Estimate</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={BRAND.formEndpoint} method="POST" className="grid gap-3">
                <input className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm" name="name" placeholder="Full name" required />
                <input className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm" name="email" type="email" placeholder="Work email" required />
                <input className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm" name="company" placeholder="Law firm name" />
                <input className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm" name="phone" placeholder="Phone" />
                <textarea
                  className="min-h-[110px] w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                  name="message"
                  placeholder="What do you need? e.g. after-hours intake, lead qualification, consultation booking, bilingual"
                />
                <input type="hidden" name="source" value="Website Hero Form" />
                <button className="h-10 w-full rounded-md bg-slate-900 text-sm font-medium text-white hover:bg-slate-800" type="submit">
                  Get my estimate
                </button>
                <p className="text-center text-xs text-slate-500">
                  By submitting, you agree we may contact you about services.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Services</h2>
          <p className="mb-10 max-w-2xl text-slate-600">
            Purpose-built intake and call handling for law firms. We follow your scripts, qualify leads,
            and book consultations into your calendar or practice tools.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader><CardTitle>Legal Intake 24/7</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <Bullet>New-case screening against your criteria</Bullet>
                <Bullet>Conflict checks & detailed intake notes</Bullet>
                <Bullet>After-hours & weekend coverage</Bullet>
                <Bullet>Consultation booking & warm transfers</Bullet>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Reception & Lead Capture</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <Bullet>Answering, message taking, and routing</Bullet>
                <Bullet>CRM logging (Clio, PracticePanther, etc.)</Bullet>
                <Bullet>Spam filtering & caller verification</Bullet>
                <Bullet>Daily call summaries to your inbox</Bullet>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Client Care & Follow-Ups</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <Bullet>Consultation reminders & rescheduling</Bullet>
                <Bullet>Document/paperwork reminders (your process)</Bullet>
                <Bullet>Escalations for urgent matters</Bullet>
                <Bullet>Weekly reporting & QA scorecards</Bullet>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Practice Areas</h2>
          <p className="mb-8 text-slate-600">
            Best fit for small and mid-sized firms where every call matters and speed wins cases.
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Personal Injury", "High-value leads. Speed matters."],
              ["Family Law", "Empathetic, structured intake."],
              ["Immigration", "High volume. Consistent follow-ups."],
              ["Criminal Defence", "After-hours urgency and routing."],
            ].map(([title, desc]) => (
              <Card key={title}>
                <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">{desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Simple, transparent pricing</h2>
          <p className="mb-10 max-w-2xl text-slate-600">
            Start small or scale with dedicated intake specialists. All plans include call recording, QA, and weekly reporting.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Starter",
                price: "$2,000/mo",
                tagline: "Shared team · for smaller firms",
                features: ["Business hours coverage", "Basic intake & routing", "Weekly summary report", "SLA 95% within 60s"],
              },
              {
                title: "Growth",
                price: "$3,500/mo",
                tagline: "Extended hours · higher lead volume",
                features: ["8am–10pm coverage", "Qualification + booking", "Bilingual option", "SLA 95% within 45s"],
                highlight: true,
              },
              {
                title: "Dedicated Agent",
                price: "$5,600+/mo",
                tagline: "Full-time agent (160 hrs) + playbooks",
                features: ["Dedicated intake specialist", "Custom scripts + QA", "Direct line access", "SLA 95% within 30s"],
              },
            ].map((p) => (
              <div key={p.title} className={p.highlight ? "rounded-2xl ring-2 ring-slate-900" : ""}>
                <Card>
                  <CardHeader>
                    <CardTitle>{p.title}</CardTitle>
                    <div className="text-3xl font-bold">{p.price}</div>
                    <div className="text-sm text-slate-600">{p.tagline}</div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-slate-600">
                    {p.features.map((f) => <Bullet key={f}>{f}</Bullet>)}
                    <div className="pt-4">
                      <Button href="#contact">Talk to us</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Example pricing in CAD. Final pricing depends on hours, call volume, practice area, and reporting requirements.
          </p>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Confidentiality & Security</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader><CardTitle>Data Protection</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <Bullet>PIPEDA (Canada) process-aware</Bullet>
                <Bullet>Confidentiality-first legal intake workflows</Bullet>
                <Bullet>Role-based access & audit logs</Bullet>
                <Bullet>Call recording consent workflows</Bullet>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Secure Infrastructure</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <Bullet>Encrypted VoIP & VPN enforcement</Bullet>
                <Bullet>Password manager policy</Bullet>
                <Bullet>Restricted access by role</Bullet>
                <Bullet>Incident response playbooks</Bullet>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Billing</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <Bullet>Monthly invoicing</Bullet>
                <Bullet>Month-to-month or annual terms</Bullet>
                <Bullet>Usage-based add-ons available</Bullet>
                <Bullet>Call analytics summary reports</Bullet>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 py-16 text-slate-100 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Let’s talk</h2>
            <p className="mb-6 text-slate-300">
              Tell us about your firm. We’ll propose a plan and a quick pilot.
            </p>

            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {BRAND.email}</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {BRAND.phone}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {BRAND.address}</li>
            </ul>

            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
                href={BRAND.calendly}
                target="_blank"
                rel="noreferrer"
              >
                Book on Calendly
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-900">
            <h3 className="mb-3 text-lg font-semibold">Send a message</h3>
            <form action={BRAND.formEndpoint} method="POST" className="grid gap-3">
              <div className="grid gap-3 md:grid-cols-2">
                <input className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm" name="name" placeholder="Full name" required />
                <input className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm" name="email" type="email" placeholder="Work email" required />
              </div>
              <input className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm" name="company" placeholder="Law firm name" />
              <input className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm" name="phone" placeholder="Phone" />
              <textarea className="min-h-[130px] w-full rounded-md border border-slate-200 px-3 py-2 text-sm" name="message" placeholder="What do you need help with?" />
              <input type="hidden" name="source" value="Website Contact Form" />
              <button className="h-10 w-full rounded-md bg-slate-900 text-sm font-medium text-white hover:bg-slate-800" type="submit">
                Submit
              </button>
              <p className="text-xs text-slate-500">We respond within one business day.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-900" href="#security">Security</a>
            <a className="hover:text-slate-900" href="#pricing">Pricing</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
