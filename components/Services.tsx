"use client";

import { Reveal } from "@/components/Reveal";

type Service = {
  number: string;
  category: string;
  title: React.ReactNode;
  description: string;
  items: string[];
};

const services: Service[] = [
  {
    number: "01 / BRAND",
    category: "BRAND",
    title: (<>STRATEGY <br /> PLANNING</>),
    description:
      "I provide strategic planning solutions that help turn ideas into organized and effective digital projects. From project structure and workflow planning to branding and website strategy, I ensure every detail is aligned for smooth development and long-term success.",
    items: ["— BRAND GUIDELINES", "— VISUAL STRATEGY", "— WORKFLOW"],
  },
  {
    number: "02 / DESIGN",
    category: "DESIGN",
    title: (<>UI/UX <br /> ARCHITECTURE</>),
    description:
      "I create modern, responsive, and user-focused websites that combine clean design with smooth functionality. From business websites to full-stack web applications, I build fast, scalable, and visually engaging digital experiences using the latest web technologies and design standards.",
    items: ["— DESIGN SYSTEMS", "— PROTOTYPING", "— MODERN DESIGN"],
  },
  {
    number: "03 / DEV",
    category: "DEV",
    title: (<>WEB <br /> DEVELOPMENT</>),
    description:
      "I develop modern, scalable, and high-performing websites and web applications tailored to business and user needs. From front-end design to back-end functionality, I build responsive, secure, and optimized digital solutions using the latest web development technologies and frameworks.",
    items: ["— FRONT-END", "— BACK-END", "— OPTIMIZATION"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface-container-lowest lg:px-margin-desktop px-margin-mobile">
      <div className="max-w-container-max mx-auto relative z-10 w-[100%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/20 border border-primary/20">
          {services.map((service, i) => (
            <Reveal key={service.category} delay={i * 120}>
              <div className="bg-black p-6 py-12 lg:p-12 relative overflow-hidden group h-full">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-code-sm text-primary block mb-8">{service.number}</span>
                <h3 className="font-headline-lg text-headline-lg uppercase mb-6">{service.title}</h3>
                <p className="font-body-md text-on-secondary-container mb-8">{service.description}</p>
                <ul className="font-code-sm text-on-surface-variant flex flex-col gap-2">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
