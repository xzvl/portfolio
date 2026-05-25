import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const sections = [
  {
    id: "01",
    title: "Information We Collect",
    content: null,
    subsections: [
      {
        subtitle: "Personal Information",
        body: "When you contact us, request a quotation, or avail our services, we may collect:",
        list: [
          "Full name",
          "Email address",
          "Phone number",
          "Company or business information",
          "Project details and requirements",
        ],
      },
      {
        subtitle: "Automatically Collected Information",
        body: "We may automatically collect certain information such as:",
        list: [
          "IP address",
          "Browser type",
          "Device information",
          "Pages visited",
          "Referring website",
          "Cookies and analytics data",
        ],
      },
    ],
  },
  {
    id: "02",
    title: "How We Use Your Information",
    body: "We use the collected information to:",
    list: [
      "Respond to inquiries and project requests",
      "Provide WordPress development services",
      "Improve website functionality and user experience",
      "Send project updates or service-related communication",
      "Analyze website traffic and performance",
      "Prevent fraud or unauthorized activity",
    ],
  },
  {
    id: "03",
    title: "Cookies & Analytics",
    body: "Our website may use cookies and third-party analytics tools to enhance browsing experience and monitor website performance. You may disable cookies through your browser settings, although some features of the website may not function properly.",
  },
  {
    id: "04",
    title: "Third-Party Services",
    body: "We may use trusted third-party services such as:",
    list: [
      "Hosting providers",
      "Analytics tools",
      "Payment processors",
      "Contact form providers",
      "Email communication services",
    ],
    footer: "These third parties may process your information only for the purpose of providing their services.",
  },
  {
    id: "05",
    title: "Data Security",
    body: "We implement reasonable technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure. However, no online platform can guarantee absolute security.",
  },
  {
    id: "06",
    title: "Data Retention",
    body: "We retain personal information only for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.",
  },
  {
    id: "07",
    title: "Your Rights",
    body: "Depending on your location, you may have the right to:",
    list: [
      "Request access to your personal data",
      "Request correction or deletion of your data",
      "Withdraw consent",
      "Object to data processing",
    ],
    footer: "To request any of the above, please contact us through the website.",
  },
  {
    id: "08",
    title: "External Links",
    body: "Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of external websites.",
  },
  {
    id: "09",
    title: "Children's Privacy",
    body: "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.",
  },
  {
    id: "10",
    title: "Changes to This Privacy Policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
  },
  {
    id: "11",
    title: "Contact Information",
    body: "For questions regarding this Privacy Policy, please contact us through:",
    link: { href: "https://xzvl.vercel.app/", label: "xzvl.vercel.app" },
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16 cyber-grid min-h-screen bg-background text-on-background">

        {/* ── Hero ── */}
        <section className="relative py-24 px-margin-mobile lg:px-margin-desktop overflow-hidden border-b-2 border-outline-variant/30">
          <div className="max-w-container-max mx-auto relative z-10">
            <p className="font-label-caps text-label-caps text-primary animate-fade-up" style={{ animationDelay: "0ms" }}>
              XZVL2026_LEGAL_DOC_01
            </p>
            <h1
              className="font-display-lg text-headline-lg-mobile md:text-display-lg uppercase mt-4 mb-8 max-w-4xl animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              PRIVACY <span className="text-primary italic">POLICY</span>
            </h1>
            <p
              className="font-body-lg text-body-lg max-w-2xl animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              How we collect, use, and protect your information when you use our website and services related to WordPress development and web solutions.
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
              <p className="font-label-caps text-label-caps text-primary mb-2">OVERVIEW</p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Welcome to XZVL ("we," "our," or "us"). By using our website, you agree to the collection and use of information in accordance with this Privacy Policy.
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

                    <div className="px-8 py-6 space-y-6">
                      {/* Subsections (e.g. section 01) */}
                      {"subsections" in sec && sec.subsections && sec.subsections.map((sub) => (
                        <div key={sub.subtitle}>
                          <p className="font-label-caps text-label-caps text-on-surface-variant mb-3">{sub.subtitle}</p>
                          <p className="font-code-sm text-code-sm text-on-surface-variant mb-3">{sub.body}</p>
                          <ul className="space-y-2">
                            {sub.list.map((item) => (
                              <li key={item} className="flex items-start gap-3 font-code-sm text-code-sm">
                                <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 flex-shrink-0">arrow_forward_ios</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

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

                      {/* Link */}
                      {"link" in sec && sec.link && (
                        <Link
                          href={sec.link.href}
                          className="inline-flex items-center gap-2 font-code-sm text-code-sm text-primary hover:underline underline-offset-4"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="material-symbols-outlined text-[16px]">link</span>
                          {sec.link.label}
                        </Link>
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
                Have <span className="text-primary">Questions</span>?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-body-lg text-body-lg mb-12">
                If you have any questions or concerns about this Privacy Policy, feel free to reach out to us.
              </p>
            </Reveal>
            <Reveal delay={200} className="flex flex-col md:flex-row gap-6 justify-center">
              <Link
                href="/"
                className="px-10 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:brightness-110 active:scale-95 transition-all inline-block"
              >
                Contact Us
              </Link>
              <Link
                href="/terms-of-service"
                className="px-10 py-4 border-2 border-on-surface text-on-surface font-label-caps text-label-caps uppercase hover:bg-on-surface hover:text-background active:scale-95 transition-all inline-block"
              >
                Terms of Service
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
