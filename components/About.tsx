import Image from "next/image";

import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="py-24 lg:px-margin-desktop px-margin-mobile grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary" />
        <div className="bg-primary/10 p-2 relative">
          <Image
            alt="Ed Paulo Pedro Profile"
            src="/assets/me.png"
            width={800}
            height={800}
            className="w-full aspect-square object-cover"
            unoptimized
          />
        </div>
        <div className="absolute top-8 right-8 font-code-sm bg-black/80 backdrop-blur-md px-4 py-2 border border-primary/20">
          ID: EPP_2026_UNIT
        </div>
      </div>
      <div className="lg:pl-12">
        <span className="font-label-caps text-primary mb-4 block">
          THE DEVELOPER // BIO
        </span>
        <h2 className="font-headline-lg text-headline-lg uppercase mb-8">
          Ed Paulo Pedro
        </h2>
        <p className="font-body-lg text-on-surface mb-6">
          I am a passionate and experienced Senior Web Developer with more than 10 years of experience in web development, WordPress development, and full-stack solutions. Throughout my career, I have worked with local and international companies in remote and on-site environments, delivering high-quality websites, custom themes, plugins, and web applications. I specialize in technologies such as HTML, PHP, CSS, JavaScript, ReactJS, NextJS, WordPress, Shopify, Webflow, API integration, and AI automation tools like Zapier.
        </p>
        <p className="font-body-md text-on-surface-variant mb-8">
          I am highly adaptable, detail-oriented, and committed to continuous learning to stay updated with modern web technologies and industry trends. My experience in handling multiple projects, collaborating with teams, and providing efficient digital solutions has strengthened my ability to work under pressure while maintaining quality and performance. I am passionate about creating user-friendly, responsive, and scalable websites that help businesses grow and succeed online.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-gutter border-t border-primary/20 pt-8">
          <div>
            <h3 className="font-headline-lg text-headline-lg uppercase">
              <AnimatedCounter value={200} step={10} intervalMs={50} suffix="+" />
            </h3>
            <span className="font-headline-md text-headline-md">WEBSITES</span>
            <span className="font-label-caps text-[10px] text-primary block mb-2">
              HANDLED/CREATED
            </span>
          </div>
          <div>
            <h3 className="font-headline-lg text-headline-lg uppercase">
              <AnimatedCounter value={10} step={1} intervalMs={50} suffix="+" />
            </h3>
            <span className="font-headline-md text-headline-md">PLATFORMS</span>
            <span className="font-label-caps text-[10px] text-primary block mb-2">
              LEARNED
            </span>
          </div>
          <div>
            <h3 className="font-headline-lg text-headline-lg uppercase">
              <AnimatedCounter value={12} step={1} intervalMs={50} suffix="+" />
            </h3>
            <span className="font-headline-md text-headline-md">YEARS</span>
            <span className="font-label-caps text-[10px] text-primary block mb-2">
              EXPERIENCE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
