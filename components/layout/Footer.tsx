import Image from "next/image";
import Link from "next/link";

const WHAT_WE_DO_LINKS = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const COMPANY_LINKS = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const SOLUTION_LINKS = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.9 3H21.6L15.6 9.9L22.7 21H17.2L12.9 14.9L8 21H5.3L11.7 13.6L4.9 3H10.5L14.4 8.6L18.9 3ZM17.9 19.3H19.4L9.8 4.6H8.2L17.9 19.3Z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.6 3h3.1l1.2 4.6-2.3 1.9a13.7 13.7 0 0 0 6 6l1.9-2.3L21 14.4v3.1c0 1.1-.9 2-2 2h-.5C10.8 19.1 4.9 13.2 4.5 5.5V5c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Twitter", href: "https://twitter.com", Icon: TwitterIcon },
];

const LEGAL_LINKS = [
  "Terms and Conditions",
  "Privacy Policy",
  "Cookies Policy",
];

function FooterLinkGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="transition-colors hover:text-white">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Tobams Group logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-bold leading-none">
                TOBAMS
                <span className="block text-xs font-semibold tracking-[0.3em] text-white/60">
                  GROUP
                </span>
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <ul className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <FooterLinkGroup title="What We Do" links={WHAT_WE_DO_LINKS} />
          <FooterLinkGroup title="Company" links={COMPANY_LINKS} />
          <FooterLinkGroup title="Solution" links={SOLUTION_LINKS} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-white">
              Registered Offices
            </h3>
            <p className="mt-3 text-sm font-semibold text-[#E66E8C]">
              United Kingdom
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white/60">
              07451196 (Registered by Company House)
              <br />
              Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
              RM1 4QA
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/0">&nbsp;</h3>
            <p className="mt-3 text-sm font-semibold text-[#E66E8C]">Nigeria</p>
            <p className="mt-1 text-sm leading-relaxed text-white/60">
              RC 1048722 (Registered by the Corporate Affairs Commission)
              <br />
              4, Muaz Close, Angwari-Rimi
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">
              Contact Information
            </h3>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
              <MailIcon className="h-4 w-4 shrink-0 text-[#E66E8C]" />
              <Link
                href="mailto:theteam@tobamsgroup.com"
                className="hover:text-white"
              >
                theteam@tobamsgroup.com
              </Link>
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
              <PhoneIcon className="h-4 w-4 shrink-0 text-[#E66E8C]" />
              <Link href="tel:+447886600748" className="hover:text-white">
                +44 7886 600748
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright &copy; Tobams Group, 2024. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4">
            {LEGAL_LINKS.map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-white">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
