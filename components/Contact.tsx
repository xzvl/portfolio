"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-surface-container-lowest border-t-2 border-primary/20">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 lg:p-margin-desktop py-24 py-0 bg-black flex flex-col justify-between border-r-2 border-primary/10 px-margin-mobile">
          <div>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-8">
              Initialize <br /> Contact
            </h2>
            <p className="font-body-md text-on-surface-variant mb-12">
              Ready to architect your next digital system? Reach out for
              collaboration or inquiries.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <a
                  className="font-code-sm hover:text-primary transition-colors"
                  href="mailto:ed.paulo.pedro04@gmail.com"
                >
                  ed.paulo.pedro04@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <a
                  className="font-code-sm hover:text-primary transition-colors"
                  href="tel:+639957118740"
                >+63 995 711 8740</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <span className="font-code-sm">PAMPANGA, PHILIPPINES</span>
              </div>
            </div>
          </div>
          <div className="mt-12 opacity-20 font-code-sm">
            SECURE_CHANNEL: 256-BIT_ENCRYPTED
          </div>
        </div>
        <div className="lg:w-2/3 lg:p-margin-desktop px-margin-mobile py-24">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
          >
            <div className="col-span-1">
              <label className="font-label-caps text-[10px] text-primary mb-2 block">
                IDENTIFIER (NAME)
              </label>
              <input
                className="w-full bg-surface-container-high border-2 border-primary/20 text-on-surface px-6 py-4 focus:border-primary outline-none transition-colors rounded-none font-code-sm"
                placeholder="ENTER_NAME"
                type="text"
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
              />
            </div>
            <div className="col-span-1">
              <label className="font-label-caps text-[10px] text-primary mb-2 block">
                TRANSMISSION_POINT (EMAIL)
              </label>
              <input
                className="w-full bg-surface-container-high border-2 border-primary/20 text-on-surface px-6 py-4 focus:border-primary outline-none transition-colors rounded-none font-code-sm"
                placeholder="ENTER_EMAIL"
                type="email"
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
              />
            </div>
            <div className="col-span-full">
              <label className="font-label-caps text-[10px] text-primary mb-2 block">
                DATA_PACKET (MESSAGE)
              </label>
              <textarea
                className="w-full bg-surface-container-high border-2 border-primary/20 text-on-surface px-6 py-4 focus:border-primary outline-none transition-colors rounded-none font-code-sm resize-none"
                placeholder="DESCRIBE_PROJECT_PARAMETERS"
                rows={6}
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
              />
            </div>
            <div className="col-span-full flex items-center justify-between gap-4 flex-wrap">
              {status === "success" && (
                <span className="font-code-sm text-primary">
                  TRANSMISSION_SENT // MESSAGE RECEIVED
                </span>
              )}
              {status === "error" && (
                <span className="font-code-sm text-error">
                  ERROR // FAILED TO TRANSMIT. RETRY.
                </span>
              )}
              {status !== "success" && status !== "error" && <span />}
              <button
                className="bg-primary text-on-primary font-label-caps px-12 py-4 font-black uppercase text-[14px] hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "TRANSMITTING..." : "Transmit Data"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
