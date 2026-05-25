import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const sections = [
  {
    id: "01",
    title: "Services",
    body: "We provide services related to:",
    list: [
      "WordPress website development",
      "Website customization",
      "UI/UX implementation",
      "Website optimization",
      "Maintenance and support",
      "Web-related consulting services",
    ],
    footer: null,
    link: { href: "/packages", label: "View Packages" },
  },
  {
    id: "02",
    title: "Client Responsibilities",
    body: "Clients agree to:",
    list: [
      "Provide accurate project information",
      "Supply necessary content, assets, and credentials",
      "Respond to requests within reasonable timelines",
      "Ensure they have legal rights to all submitted content",
    ],
  },
  {
    id: "03",
    title: "Payments",
    list: [
      "Payments must be made according to the agreed quotation or package",
      "Projects may require an upfront deposit before work begins",
      "Final deliverables may be withheld until full payment is received",
      "All payments are non-refundable unless otherwise agreed in writing",
    ],
  },
  {
    id: "04",
    title: "Project Timelines",
    body: "Estimated delivery dates are based on the timely submission of required materials and approvals by the client. Delays in communication may affect delivery schedules.",
  },
  {
    id: "05",
    title: "Revisions",
    body: "Reasonable revisions may be included depending on the selected package or agreement. Additional revisions or major scope changes may incur extra charges.",
  },
  {
    id: "06",
    title: "Intellectual Property",
    body: "Unless otherwise agreed:",
    list: [
      "Clients retain ownership of their provided content and branding materials",
      "Final website deliverables become the client's property after full payment",
      "We reserve the right to showcase completed projects in our portfolio unless requested otherwise",
    ],
  },
  {
    id: "07",
    title: "Prohibited Use",
    body: "You agree not to use our website or services for:",
    list: [
      "Illegal activities",
      "Malware or malicious content",
      "Copyright infringement",
      "Fraudulent or abusive behavior",
      "Unauthorized access attempts",
    ],
  },
  {
    id: "08",
    title: "Limitation of Liability",
    body: "We are not liable for:",
    list: [
      "Third-party hosting issues",
      "Plugin or software conflicts",
      "Security breaches caused by third-party services",
      "Loss of business, profits, or data",
      "Downtime beyond our control",
    ],
    footer: "Our total liability shall not exceed the amount paid for the service.",
  },
  {
    id: "09",
    title: "Termination",
    body: "We reserve the right to refuse or terminate services if a client violates these Terms or engages in abusive, fraudulent, or unlawful conduct.",
  },
  {
    id: "10",
    title: "Changes to Terms",
    body: "We may update these Terms at any time. Continued use of the website constitutes acceptance of the updated Terms.",
  },
  {
    id: "11",
    title: "Contact",
    body: "For inquiries regarding these Terms, please contact:",
    link: { href: "https://xzvl.vercel.app/", label: "xzvl.vercel.app" },
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />

      <main className="pt-16 cyber-grid min-h-screen bg-background text-on-background">

        {/* ── Hero ── */}
        <section className="relative py-24 px-margin-mobile lg:px-margin-desktop overflow-hidden border-b-2 border-outline-variant/30">
          <div className="max-w-container-max mx-auto relative z-10">
            <p className="font-label-caps text-label-caps text-primary animate-fade-up" style={{ animationDelay: "0ms" }}>
              XZVL2026_LEGAL_DOC_02
            </p>
            <h1
              className="font-display-lg text-headline-lg-mobile md:text-display-lg uppercase mt-4 mb-8 max-w-4xl animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              TERMS OF <span className="text-primary italic">SERVICE</span>
            </h1>
            <p
              className="font-body-lg text-body-lg max-w-2xl animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              These Terms govern your use of XZVL and any services provided by us. By accessing or using our website, you agree to these Terms.
            </p>
            <div className="mt-6 animate-fade-up" style={{ animationDelay: "320ms" }}>
              <span className="inline-flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/40 px-4 py-2">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "14px" }}>calendar_today</span>
                Effective Date: May 25, 2026
              </span>
            </div>
          </div>
          <div className="absolute -right-20 top-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* ── Content ── */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">

            <Reveal className="mb-16 glass-panel p-8 border-l-2 border-primary/40">
              <p className="font-label-caps text-label-caps text-primary mb-2">AGREEMENT</p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                These Terms of Service ("Terms") govern your use of XZVL and any services provided by us. Please read them carefully before using our website or availing any service.
              </p>
            </Reveal>

            <div className="space-y-6">
              {sections.map((sec, i) => (
                <Reveal key={sec.id} delay={i * 60}>
                  <div className="glass-panel glitch-hover transition-all">
                    {/* Section header */}
                    <div className="flex items-center gap-4 px-8 py-5 border-b border-outline-variant/20">
                      <span className="font-label-caps text-label-caps text-primary/60 tabular-nums w-8">
                        {sec.id}
                      </span>
                      <h2 className="font-headline-md text-headline-md uppercase">{sec.title}</h2>
                    </div>

                    <div className="px-8 py-6 space-y-4">
                      {/* Body text */}
                      {"body" in sec && sec.body && (
                        <p className="font-code-sm text-code-sm text-on-surface-variant">{sec.body}</p>
                      )}

                      {/* List */}
                      {"list" in sec && sec.list && (
                        <ul className="space-y-2">
                          {sec.list.map((item) => (
                            <li key={item} className="flex items-start gap-3 font-code-sm text-code-sm">
                              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 flex-shrink-0">arrow_forward_ios</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Footer note */}
                      {"footer" in sec && sec.footer && (
                        <p className="font-code-sm text-code-sm text-on-surface-variant/60 border-t border-outline-variant/20 pt-4">
                          {sec.footer}
                        </p>
                      )}

                      {/* Link — packages link or contact link */}
                      {"link" in sec && sec.link && (
                        sec.link.href.startsWith("/") ? (
                          <Link
                            href={sec.link.href}
                            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-primary bg-primary px-6 py-3 hover:brightness-110 active:scale-95 transition-all uppercase"
                          >
                            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                            {sec.link.label}
                          </Link>
                        ) : (
                          <Link
                            href={sec.link.href}
                            className="inline-flex items-center gap-2 font-code-sm text-code-sm text-primary hover:underline underline-offset-4"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="material-symbols-outlined text-[16px]">link</span>
                            {sec.link.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Reveal>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-8">
                Ready to <span className="text-primary">Start</span>?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-body-lg text-body-lg mb-12">
                By using our services, you acknowledge that you have read and understood these Terms of Service.
              </p>
            </Reveal>
            <Reveal delay={200} className="flex flex-col md:flex-row gap-6 justify-center">
              <Link
                href="/packages"
                className="px-10 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:brightness-110 active:scale-95 transition-all inline-block"
              >
                View Packages
              </Link>
              <Link
                href="/privacy-policy"
                className="px-10 py-4 border-2 border-on-surface text-on-surface font-label-caps text-label-caps uppercase hover:bg-on-surface hover:text-background active:scale-95 transition-all inline-block"
              >
                Privacy Policy
              </Link>
            </Reveal>
          </div>
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
