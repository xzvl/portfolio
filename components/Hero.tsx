"use client";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center lg:px-margin-desktop px-margin-mobile relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="z-10 max-w-5xl">
        <p
          className="font-label-caps text-primary mb-4 tracking-widest animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          ESTABLISHED 2026 // XZVL Web Development
        </p>
        <h1
          className="font-display-lg text-display-lg uppercase leading-none mb-8 animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          Design <br />
          <span className="text-primary">Build Website</span> <br />
          Launch.
        </h1>
        <div
          className="flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <button
            type="button"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary text-on-primary font-label-caps px-10 py-4 font-black uppercase text-[14px] transition-all duration-200 hover:bg-primary-container hover:scale-[1.02] active:scale-[0.98]"
          >
            Initialize Project
          </button>
          <button
            type="button"
            onClick={() => {
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-primary text-primary font-label-caps px-10 py-4 font-black uppercase text-[14px] transition-all duration-200 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Archive
          </button>
        </div>
      </div>
      <div
        className="absolute right-margin-desktop top-1/2 -translate-y-1/2 hidden lg:block animate-fade-right"
        style={{ animationDelay: "450ms" }}
      >
        <div className="flex flex-col gap-4 font-code-sm text-on-secondary-container opacity-50 border-r-2 border-primary/20 pr-4 text-right">
          <span>LAT: 40.7128° N</span>
          <span>LONG: 74.0060° W</span>
          <span className="text-primary">STATUS: ONLINE</span>
        </div>
      </div>
    </section>
  );
}