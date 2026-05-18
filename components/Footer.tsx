import Link from "next/link";
import Image from "next/image";

const socials = ["GITHUB", "LINKEDIN", "INSTAGRAM", "TWITTER"];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t-2 border-outline-variant flex flex-col md:flex-row justify-between items-center py-8 lg:px-margin-desktop px-margin-mobile gap-gutter w-full">
      <Link href="#" aria-label="Home" className="flex items-center">
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
            key={social}
            className="text-on-secondary-container hover:text-primary transition-colors"
            href="#"
          >
            {social}
          </Link>
        ))}
      </div>
      <div className="font-code-sm text-code-sm text-on-secondary-container">
        © 2026 XZVL WEB DEV. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
