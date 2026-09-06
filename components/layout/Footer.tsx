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

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

const LEGAL_LINKS = ["Terms and Conditions", "Privacy Policy", "Cookies Policy"];

function FooterLinkGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold text-white">
        {title}
      </h3>
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
    <footer className="bg-brand-dark-2 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="font-heading text-lg font-bold leading-none">
              TOBAMS
              <span className="block text-xs font-semibold tracking-[0.3em] text-white/60">
                GROUP
              </span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <ul className="mt-5 flex gap-4 text-sm text-white/70">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="transition-colors hover:text-white"
                    aria-label={social.label}
                  >
                    {social.label}
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
            <h3 className="font-heading text-sm font-semibold text-white">
              Registered Offices
            </h3>
            <p className="mt-3 text-sm text-white/70">United Kingdom</p>
            <p className="mt-1 text-sm leading-relaxed text-white/60">
              07451196 (Registered by Company House)
              <br />
              Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
              RM1 4QA
            </p>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-white/0">
              &nbsp;
            </h3>
            <p className="mt-3 text-sm text-white/70">Nigeria</p>
            <p className="mt-1 text-sm leading-relaxed text-white/60">
              RC 1048722 (Registered by the Corporate Affairs Commission)
              <br />
              4, Muaz Close, Angwari-Rimi
            </p>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-white">
              Contact Information
            </h3>
            <p className="mt-3 text-sm text-white/70">
              <Link href="mailto:theteam@tobamsgroup.com" className="hover:text-white">
                theteam@tobamsgroup.com
              </Link>
            </p>
            <p className="mt-1 text-sm text-white/70">
              <Link href="tel:+447886600748" className="hover:text-white">
                +44 7886 600748
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright &copy; Tobams Group, 2026. All rights reserved.</p>
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
