import Link from "next/link";
import Image from "next/image";

const socials = [
  { href: "https://www.facebook.com/profile.php?id=61589843499098", label: "FACEBOOK" },
  { href: "https://www.linkedin.com/in/ed-paulo-pedro/", label: "LINKEDIN" },
];

const legal = [
  { href: "/privacy-policy", label: "PRIVACY POLICY" },
  { href: "/terms-of-service", label: "TERMS OF SERVICE" },
];


export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t-2 border-outline-variant py-8 lg:px-margin-desktop px-margin-mobile w-full">
      <div className="max-w-container-max mx-auto relative z-10 w-[100%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-gutter">
            <Link href="/" aria-label="Home" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="EPP // 2026"
                width={160}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <div className="flex gap-gutter font-code-sm text-code-sm">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  className="text-on-secondary-container hover:text-primary transition-colors"
                  href={social.href}
                >
                  {social.label}
                </Link>
              ))}
            </div>
            <div className="font-code-sm text-code-sm text-on-secondary-container">
              © 2026 XZVL WEB DEV. ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="flex justify-center gap-gutter border-t border-outline-variant/20 pt-4">
            {legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-code-sm text-code-sm text-on-secondary-container/60 hover:text-primary transition-colors text-[10px]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
