import { useEffect, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Instagram, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialProfileUrls } from "@/lib/social-links";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const logoSrc = "/assets/aistudio/kodvit-hd-logo_08beeca1.png";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About KODVIT", to: "/about" as const },
  { label: "Software Solutions", to: "/solutions" as const },
  { label: "Digital Products", to: "/products" as const },
  { label: "Trinetra Tech", to: "/trinetra-tech" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link to="/" aria-label="KODVIT home" className="shrink-0">
          <img
            className="brand-logo"
            src={logoSrc}
            alt="KODVIT"
            width={1254}
            height={1254}
            referrerPolicy="no-referrer"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) =>
            item.to === "/trinetra-tech" ? (
              <Button
                key={item.to}
                asChild
                className="rounded-sm bg-brand-orange text-brand-navy hover:bg-brand-orange/90 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                <Link to={item.to}>{item.label}</Link>
              </Button>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "nav-link text-brand-blue" }}
                inactiveProps={{ className: "nav-link" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <Button
          asChild
          className="header-cta bg-brand-blue text-primary-foreground hover:bg-brand-blue/90"
        >
          <Link to="/contact">
            Start a project <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <Menu aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            <div className="mb-2 flex items-center justify-between border-b border-border pb-3">
              <span className="font-display text-lg font-semibold">Explore KODVIT</span>
              <X aria-hidden="true" className="text-muted-foreground" />
            </div>
            {navItems.map((item) =>
              item.to === "/trinetra-tech" ? (
                <Button
                  key={item.to}
                  asChild
                  className="w-full justify-start rounded-sm bg-brand-orange text-brand-navy hover:bg-brand-orange/90 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                >
                  <Link to={item.to}>{item.label}</Link>
                </Button>
              ) : (
                <Link key={item.to} to={item.to} className="nav-link">
                  {item.label}
                </Link>
              ),
            )}
            <Button
              asChild
              className="mt-2 bg-brand-blue text-primary-foreground hover:bg-brand-blue/90"
            >
              <Link to="/contact">
                Start a project <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" aria-label="KODVIT home">
            <img
              className="mb-4 h-16 w-16 rounded-full bg-brand-white object-contain"
              src={logoSrc}
              alt="KODVIT"
              width={1254}
              height={1254}
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-brand-white/75">
            Knowledge turned into code. Building useful digital solutions through software, AI, and
            emerging technology.
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">Explore</h2>
          <div className="grid gap-2 text-sm">
            {navItems.slice(1).map((item) => (
              <Link className="footer-link" key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-display text-lg font-semibold">Get in touch</h2>
          <Link className="footer-link text-sm" to="/contact">
            Send an enquiry <ArrowRight aria-hidden="true" className="inline size-4" />
          </Link>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href={socialProfileUrls.instagram}
              target="_blank"
              rel="noreferrer"
              className="footer-link inline-flex items-center gap-1.5"
              aria-label="KODVIT on Instagram"
            >
              <Instagram size={15} /> Instagram
            </a>
            <a
              href={socialProfileUrls.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-link inline-flex items-center gap-1.5"
              aria-label="KODVIT on LinkedIn"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href={socialProfileUrls.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="footer-link inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200"
              aria-label="KODVIT on WhatsApp"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-3 text-sm text-brand-white/70">
            Email:{" "}
            <a href="mailto:kodvitsupport@gmail.com" className="text-brand-light-blue underline">
              kodvitsupport@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-brand-white/15">
        <div className="site-container flex flex-col gap-2 py-4 text-xs text-brand-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} KODVIT. All rights reserved.</span>
          <span className="inline-flex items-center gap-1">
            <Code2 size={14} aria-hidden="true" /> Knowledge Turned Into Code
          </span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppWidget />
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro">
      <div className="site-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight text-brand-navy md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}

export function ActionLink({
  to = "/contact",
  children,
}: {
  to?: "/contact" | "/solutions" | "/products" | "/about" | "/trinetra-tech" | "/gallery";
  children: ReactNode;
}) {
  return (
    <Button asChild className="bg-brand-blue text-primary-foreground hover:bg-brand-blue/90">
      <Link to={to}>
        {children}
        <ArrowRight aria-hidden="true" />
      </Link>
    </Button>
  );
}

export function ContactCallout({
  title = "Have an idea? Let’s build something meaningful.",
}: {
  title?: string;
}) {
  return (
    <section className="contact-band py-14">
      <div className="site-container flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
        <div>
          <p className="eyebrow text-brand-white before:bg-brand-orange">Start a conversation</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-4xl">
            {title}
          </h2>
        </div>
        <Button
          asChild
          variant="secondary"
          className="shrink-0 bg-brand-white text-brand-navy hover:bg-brand-white/90"
        >
          <Link to="/contact">
            Get in touch <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
