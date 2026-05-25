"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

// ─── Data ────────────────────────────────────────────────────────────────────

type CurrencyKey = "PHP" | "USD" | "AUD";

const ultimatePrices: Record<"ecommerce" | "custom", Record<CurrencyKey, string>> = {
  ecommerce: { PHP: "₱55,999", USD: "$920", AUD: "AU$1,300" },
  custom:    { PHP: "₱69,999", USD: "$1,200", AUD: "AU$1,600" },
};

const basicPackages = [
  {
    unit: "UNIT_01",
    name: "Start up Website",
    price: { PHP: "₱14,999", USD: "$250", AUD: "AU$350" },
    popular: false,
    features: [
      { icon: "draft", label: "1 Page / Landing Page" },
      { icon: "design_services", label: "Semi-custom Web Design" },
      { icon: "nest_clock_farsight_analog", label: "1-day Delivery" },
      { icon: "dashboard", label: "Dashboard Access" },
      { icon: "mobile_hand", label: "Mobile Responsive" },
      { icon: "bolt", label: "Speed Optimization" },
      { icon: "globe", label: "Domain + Hosting + SSL" },
    ],
  },
  {
    unit: "UNIT_02 // POPULAR",
    name: "Custom Multipage",
    price: { PHP: "₱24,999", USD: "$400", AUD: "AU$580" },
    popular: true,
    features: [
      { icon: "draft", label: "4 Pages" },
      { icon: "design_services", label: "Custom Web Design" },
      { icon: "nest_clock_farsight_analog", label: "3 days Delivery" },
      { icon: "dashboard", label: "Dashboard Access" },
      { icon: "mobile_hand", label: "Mobile Responsive" },
      { icon: "bolt", label: "Speed Optimization" },
      { icon: "globe", label: "Domain + Hosting + SSL" },
    ],
  },
  {
    unit: "UNIT_03",
    name: "Business Suite",
    price: { PHP: "₱34,999", USD: "$575", AUD: "AU$800" },
    popular: false,
    features: [
      { icon: "draft", label: "8 Pages" },
      { icon: "design_services", label: "Custom Web Design" },
      { icon: "nest_clock_farsight_analog", label: "7 days Delivery" },
      { icon: "dashboard", label: "Dashboard Access" },
      { icon: "mobile_hand", label: "Mobile Responsive" },
      { icon: "bolt", label: "Speed Optimization" },
      { icon: "globe", label: "Domain + Hosting + SSL" },
    ],
  },
  {
    unit: "UNIT_04",
    name: "Enterprise",
    price: { PHP: "₱49,999", USD: "$840", AUD: "AU$1,200" },
    popular: false,
    features: [
      { icon: "draft", label: "15 Pages" },
      { icon: "design_services", label: "High-Custom Design" },
      { icon: "nest_clock_farsight_analog", label: "15 days Delivery" },
      { icon: "dashboard", label: "Dashboard Access" },
      { icon: "mobile_hand", label: "Mobile Responsive" },
      { icon: "bolt", label: "Speed Optimization" },
      { icon: "globe", label: "Domain + Hosting + SSL" },
    ],
  },
];

const comparisonRows = [
  { label: "Pages", values: ["1", "4", "8", "Unlimited*"] },
  { label: "Web Design", values: ["Semi-Custom", "Custom", "Custom", "High-End Custom"] },
  { label: "Domain (1 Year)", values: [true, true, true, true] },
  { label: "Hosting + SSL (1 Year)", values: [true, true, true, true] },
  { label: "Dashboard Access", values: [true, true, true, true] },
  { label: "Mobile Responsive", values: [true, true, true, true] },
  { label: "Contact Form", values: [true, true, true, true] },
  { label: "Google Map", values: [true, true, true, true] },
  { label: "Basic SEO Setup", values: [false, true, true, true] },
  { label: "Content Update", values: ["up to 5", "up to 10", "up to 10", "up to 20"] },
  { label: "Website Maintenance", values: ["1 Month", "1 Month", "1 Month", "1 Month"] },
];

const PROJECT_TYPES = ["Landing Page", "Website", "E-Commerce", "Custom System"];
const BUDGET_RANGES: Record<CurrencyKey, string[]> = {
  PHP: [
    "Under ₱10,000",
    "₱10,000 - ₱30,000",
    "₱30,000 - ₱50,000",
    "₱50,000 - ₱100,000",
    "₱100,000 - ₱250,000",
  ],
  USD: [
    "Under $200",
    "$200 - $500",
    "$500 - $850",
    "$850 - $1,700",
    "$1,700 - $4,200",
  ],
  AUD: [
    "Under AU$300",
    "AU$300 - AU$700",
    "AU$700 - AU$1,200",
    "AU$1,200 - AU$2,400",
    "AU$2,400 - AU$6,000",
  ],
};

// ─── Currency Widget ─────────────────────────────────────────────────────────

const CURRENCY_OPTIONS: { key: CurrencyKey; symbol: string; label: string }[] = [
  { key: "PHP", symbol: "₱", label: "PHP" },
  { key: "USD", symbol: "$", label: "USD" },
  { key: "AUD", symbol: "AU$", label: "AUD" },
];

function CurrencyWidget({ currency, onChange }: { currency: CurrencyKey; onChange: (c: CurrencyKey) => void }) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col w-[148px] glass-panel border border-outline-variant/40 select-none">
      <div className="px-3 py-2 border-b border-outline-variant/30">
        <span className="font-label-caps text-label-caps text-[10px] text-primary tracking-widest">CURRENCY</span>
      </div>
      <div className="divide-y divide-outline-variant/20">
        {CURRENCY_OPTIONS.map(({ key, symbol, label }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`w-full flex items-center justify-between px-3 py-3 transition-colors ${
              currency === key
                ? "text-primary bg-primary/10"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
            }`}
          >
            <span className="font-label-caps text-label-caps text-[10px]">{symbol} {label}</span>
            {currency === key && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`glass-panel glitch-hover transition-all ${className}`}>
      {children}
    </div>
  );
}

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <span className="material-symbols-outlined text-primary">check</span>;
  if (value === false) return <span className="text-on-surface-variant/30">—</span>;
  return <>{value}</>;
}

const inputClass =
  "w-full bg-surface-container border border-outline-variant text-on-surface font-code-sm text-code-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/40";

const labelClass = "block font-label-caps text-label-caps text-on-surface-variant mb-2";

// ─── Inquiry Modal ────────────────────────────────────────────────────────────

type SelectedPackage = { name: string; price: string };

function InquiryModal({ selected, onClose, currency }: { selected: SelectedPackage; onClose: () => void; currency: CurrencyKey }) {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    projectType: "", budgetRange: "", message: "",
    privacyAccepted: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  const set = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.privacyAccepted) {
      setError("Please accept the privacy policy and terms to continue.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageName: `${selected.name} (${selected.price})`, ...form }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8 bg-background/90 backdrop-blur-xl"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-up">
        {/* Header */}
        <div className="sticky top-0 bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant/30 px-8 py-6 flex items-start justify-between gap-4 z-10">
          <div>
            <p className="font-label-caps text-label-caps text-primary mb-1">INQUIRY_FORM</p>
            <h2 className="font-headline-md text-headline-md">Send an Inquiry</h2>
            <p className="font-code-sm text-code-sm text-on-surface-variant mt-1">
              Tell us about your project and we&apos;ll get back to you shortly.
            </p>
          </div>
          <button type="button" onClick={onClose} className="flex-shrink-0 text-on-surface-variant hover:text-primary transition-colors mt-1" aria-label="Close">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="px-8 py-6">
          {submitted ? (
            <div className="py-12 flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[32px]">check_circle</span>
              </div>
              <h3 className="font-headline-md text-headline-md">Inquiry Sent!</h3>
              <p className="font-code-sm text-code-sm text-on-surface-variant max-w-sm">
                We received your inquiry for <span className="text-primary">{selected.name}</span>. We&apos;ll respond within 24 hours.
              </p>
              <button type="button" onClick={onClose} className="mt-4 px-8 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:brightness-110 active:scale-95 transition-all">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Interested-in badge */}
              <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 px-4 py-3 mb-8">
                <span className="material-symbols-outlined text-primary text-[18px]">sell</span>
                <div>
                  <span className="font-label-caps text-label-caps text-primary/70">INTERESTED IN</span>
                  <p className="font-headline-md text-[16px] leading-tight font-bold text-primary mt-0.5">
                    {selected.name} — <span className="font-code-sm text-code-sm">{selected.price}</span>
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Name <span className="text-primary">*</span></label>
                    <input type="text" required placeholder="Juan dela Cruz" value={form.name} onChange={(e) => set("name", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Company</label>
                    <input type="text" placeholder="Your company (optional)" value={form.company} onChange={(e) => set("company", e.target.value)} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email <span className="text-primary">*</span></label>
                    <input type="email" required placeholder="you@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="tel" placeholder="+63 9XX XXX XXXX" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Project Type <span className="text-primary">*</span></label>
                    <select required value={form.projectType} onChange={(e) => set("projectType", e.target.value)} className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="" disabled>Select type…</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Budget Range <span className="text-primary">*</span></label>
                    <select required value={form.budgetRange} onChange={(e) => set("budgetRange", e.target.value)} className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="" disabled>Select range…</option>
                      {BUDGET_RANGES[currency].map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Message</label>
                  <textarea rows={4} placeholder="Tell us about your project, goals, or any specific requirements…" value={form.message} onChange={(e) => set("message", e.target.value)} className={`${inputClass} resize-none`} />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input type="checkbox" checked={form.privacyAccepted} onChange={(e) => set("privacyAccepted", e.target.checked)} className="sr-only" />
                    <div className={`w-5 h-5 border transition-colors flex items-center justify-center ${form.privacyAccepted ? "bg-primary border-primary" : "bg-surface-container border-outline-variant group-hover:border-primary"}`}>
                      {form.privacyAccepted && <span className="material-symbols-outlined text-on-primary" style={{ fontSize: "14px" }}>check</span>}
                    </div>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-surface-variant leading-relaxed">
                    I agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Privacy Policy</a> and <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Terms &amp; Conditions</a>. I consent to XZVL Web Dev collecting and processing my information to respond to this inquiry.
                  </span>
                </label>

                {error && (
                  <p className="font-code-sm text-code-sm text-error flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">error</span>
                    {error}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button type="submit" disabled={submitting} className="w-full sm:w-auto px-10 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    {submitting ? "Sending…" : "Send Inquiry"}
                  </button>
                  <p className="font-code-sm text-code-sm text-on-surface-variant/60 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PackagesPage() {
  const [inquiry, setInquiry] = useState<SelectedPackage | null>(null);
  const [currency, setCurrency] = useState<CurrencyKey>("PHP");
  const openInquiry = (name: string, price: string) => setInquiry({ name, price });
  const closeInquiry = () => setInquiry(null);

  return (
    <>
      <Navigation />
      <CurrencyWidget currency={currency} onChange={setCurrency} />
      {inquiry && <InquiryModal selected={inquiry} onClose={closeInquiry} currency={currency} />}

      <main className="pt-16 cyber-grid min-h-screen bg-background text-on-background">

        {/* ── Hero ── */}
        <section className="relative py-24 px-margin-mobile lg:px-margin-desktop overflow-hidden border-b-2 border-outline-variant/30">
          <div className="max-w-container-max mx-auto relative z-10">
            <p className="font-label-caps text-label-caps text-primary animate-fade-up" style={{ animationDelay: "0ms" }}>
              XZVL2026_PRICING_CATALOG
            </p>
            <h1
              className="font-display-lg text-headline-lg-mobile md:text-display-lg uppercase mt-4 mb-8 max-w-4xl animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              DETAILED &amp; <span className="text-primary italic">TRANSPARENT</span><br />NO SURPRISES.
            </h1>
            <p
              className="font-body-lg text-body-lg max-w-2xl animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              Our transparent pricing ensures you receive exceptional value for your investment. Each package is designed to meet specific needs, with clear deliverables and timelines.
            </p>
          </div>
          <div className="absolute -right-20 top-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* ── Basic Packages ── */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <Reveal className="mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-2">
                Basic <span className="text-primary">Packages</span>
              </h2>
              <p className="font-code-sm text-code-sm">FROM SINGLE-PAGE LAUNCHES TO BUSINESS PLATFORMS // ENTERPRISE</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {basicPackages.map((pkg, i) => (
                <Reveal key={pkg.unit} delay={i * 80}>
                  <GlassCard className="p-8 flex flex-col h-full">
                    <div className={`font-label-caps text-label-caps mb-4 ${pkg.popular ? "text-primary" : "text-on-surface-variant"}`}>
                      {pkg.unit}
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-2">{pkg.name}</h3>
                    <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8">{pkg.price[currency]}</div>
                    <ul className="space-y-4 mb-12 flex-grow">
                      {pkg.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-3 font-code-sm text-code-sm">
                          <span className="material-symbols-outlined text-primary text-[18px]">{f.icon}</span>
                          {f.label}
                        </li>
                      ))}
                    </ul>
                    {pkg.popular ? (
                      <button onClick={() => openInquiry(pkg.name, pkg.price[currency])} className="w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps transition-all uppercase hover:brightness-110 active:scale-95">
                        Get started
                      </button>
                    ) : (
                      <button onClick={() => openInquiry(pkg.name, pkg.price[currency])} className="w-full py-4 border border-on-surface hover:bg-on-surface hover:text-background font-label-caps text-label-caps transition-all uppercase active:scale-95">
                        Get started
                      </button>
                    )}
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background border-y-2 border-outline-variant/20">
          <div className="max-w-container-max mx-auto overflow-x-auto">
            <Reveal className="mb-12">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-2">
                Inclusion <span className="text-primary">Matrices</span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b-2 border-outline-variant">
                    <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface">Inclusion</th>
                    {["Startup", "Multipage", "Business", "Enterprise"].map((col) => (
                      <th key={col} className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="font-code-sm text-code-sm divide-y divide-outline-variant/10">
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className="hover:bg-primary/5 transition-colors opacity-0 animate-fade-up"
                      style={{ animationDelay: `${i * 40}ms`, animationFillMode: "forwards" }}
                    >
                      <td className="py-4 px-6">{row.label}</td>
                      {row.values.map((val, j) => (
                        <td key={j} className="py-4 px-6"><CellValue value={val} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        {/* ── Ultimate Systems ── */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <Reveal className="mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-2">
                Ultimate <span className="text-primary">Systems</span>
              </h2>
              <p className="font-code-sm text-code-sm">HIGH-PERFORMANCE ARCHITECTURE // CUSTOM SOLUTIONS</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

              {/* E-Commerce — slides from left */}
              <Reveal direction="left">
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-primary/5 border-2 border-primary/20 -skew-x-1 group-hover:skew-x-0 transition-transform duration-500" />
                  <div className="relative glass-panel p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-grow">
                      <div className="font-label-caps text-label-caps text-primary mb-2">SYSTEM_05_RETAIL</div>
                      <h3 className="font-headline-md text-headline-md mb-4 uppercase">E-Commerce</h3>
                      <div className="font-headline-lg md:text-headline-lg mb-6">From <span className="text-primary">{ultimatePrices.ecommerce[currency]}</span></div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[["shopping_cart","Cart + Checkout"],["payments","Payment Gateway"],["admin_panel_settings","Role-based access"],["dns","Domain + Hosting"]].map(([icon, label]) => (
                          <li key={label} className="flex items-center gap-2 font-code-sm">
                            <span className="material-symbols-outlined text-primary">{icon}</span> {label}
                          </li>
                        ))}
                      </ul>
                      <button onClick={() => openInquiry("E-Commerce", ultimatePrices.ecommerce[currency])} className="px-10 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:brightness-110 active:scale-95 transition-all">
                        Inquire System
                      </button>
                    </div>
                    <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center border-2 border-primary/20 rounded-full">
                      <span className="material-symbols-outlined !text-[64px] text-primary">database</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Custom System — slides from right */}
              <Reveal direction="right" delay={80}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-surface-container-high border-2 border-on-surface/10 skew-x-1 group-hover:skew-x-0 transition-transform duration-500" />
                  <div className="relative glass-panel p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-grow">
                      <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">SYSTEM_06_CORE</div>
                      <h3 className="font-headline-md text-headline-md mb-4 uppercase">Custom System</h3>
                      <div className="font-headline-lg md:text-headline-lg mb-6">From <span className="text-primary">{ultimatePrices.custom[currency]}</span></div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[["event_available","Booking System"],["api","API Integration"],["psychology","AI Automation"],["shield","Security"]].map(([icon, label]) => (
                          <li key={label} className="flex items-center gap-2 font-code-sm">
                            <span className="material-symbols-outlined text-on-surface-variant">{icon}</span> {label}
                          </li>
                        ))}
                      </ul>
                      <button onClick={() => openInquiry("Custom System", ultimatePrices.custom[currency])} className="px-10 py-4 border-2 border-on-surface text-on-surface font-label-caps text-label-caps uppercase hover:bg-on-surface hover:text-background active:scale-95 transition-all">
                        Inquire System
                      </button>
                    </div>
                    <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center border-2 border-on-surface/10 rounded-full">
                      <span className="material-symbols-outlined !text-[64px] text-on-surface-variant">memory</span>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Reveal>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-8">
                Ready to <span className="text-primary">Deploy</span>?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-body-lg text-body-lg mb-12">
                Our engineering pipeline is open for Q4 2026. Secure your slot and let&apos;s build the future of your digital interface.
              </p>
            </Reveal>
            <Reveal delay={200} className="flex flex-col md:flex-row gap-6 justify-center">
              <button onClick={() => openInquiry("General Inquiry", "—")} className="px-10 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:brightness-110 active:scale-95 transition-all">
                Initialize Project
              </button>
              <button onClick={() => openInquiry("Technical Audit", "—")} className="px-10 py-4 border-2 border-on-surface text-on-surface font-label-caps text-label-caps uppercase hover:bg-on-surface hover:text-background active:scale-95 transition-all">
                Technical Audit
              </button>
            </Reveal>
          </div>

          {/* Decorative circles — scale in */}
          <Reveal className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full opacity-20" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full opacity-40" />
          </Reveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
