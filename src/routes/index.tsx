import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Cpu,
  Globe2,
  Layers3,
  Smartphone,
  Workflow,
} from "lucide-react";
import { ActionLink, ContactCallout, SectionHeading, SiteLayout } from "@/components/SiteLayout";
import { GalleryGrid } from "@/components/GalleryGrid";
import { NfcShowcaseVideo } from "@/components/NfcShowcaseVideo";
import { Button } from "@/components/ui/button";

const heroStoryVisual = "/src/assets/images/kodvit_hero_story_1792748851371.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KODVIT | Ideas Into Innovation" },
      {
        name: "description",
        content:
          "KODVIT builds modern digital solutions through software engineering, AI-driven innovation, and emerging technologies.",
      },
      { property: "og:title", content: "KODVIT | Ideas Into Innovation" },
      {
        property: "og:description",
        content: "Software, digital products, and emerging technology from KODVIT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Website development",
    text: "Clear, responsive websites designed around your goals.",
    icon: Globe2,
  },
  {
    title: "Web applications",
    text: "Useful browser-based tools for products and workflows.",
    icon: Braces,
  },
  {
    title: "Mobile applications",
    text: "Mobile experiences designed for everyday use.",
    icon: Smartphone,
  },
  {
    title: "AI-driven solutions",
    text: "Practical ways to bring AI into real processes.",
    icon: Bot,
  },
  {
    title: "Business automation",
    text: "Simpler digital workflows for repetitive tasks.",
    icon: Workflow,
  },
  { title: "Custom software", text: "Software shaped around specific business needs.", icon: Cpu },
  {
    title: "Digital products",
    text: "Product ideas developed with useful experiences in mind.",
    icon: Layers3,
  },
  {
    title: "Emerging technology",
    text: "Exploring new technologies for meaningful applications.",
    icon: ArrowUpRight,
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <section className="hero-section">
        <img
          className="hero-art"
          src={heroStoryVisual}
          alt="3D tech journey illustration with KODVIT theme: mentor teaching on digital whiteboard, student inspired with a creative idea, and building the project on laptop"
          width={1792}
          height={1008}
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        <div className="hero-wash" />
        <div className="site-container">
          <div className="hero-content">
            <p className="eyebrow">Knowledge turned into code</p>
            <h1 className="hero-title mt-5">
              Ideas into <em>innovation.</em> Technology into possibility.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              KODVIT builds modern digital solutions through software engineering, AI-driven
              innovation, and emerging technologies.
            </p>
            <div className="button-row mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-brand-blue text-primary-foreground hover:bg-brand-blue/90"
              >
                <Link to="/solutions">
                  Explore our solutions <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-brand-blue/30 bg-brand-white/80 text-brand-navy hover:bg-brand-ice"
              >
                <Link to="/contact">
                  Get in touch <ArrowDownRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <p className="mt-10 text-sm font-semibold text-brand-navy/70">
              Software · Digital products · Emerging technology
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container split-layout">
          <div className="reveal">
            <p className="eyebrow">About KODVIT</p>
            <h2 className="section-title">Knowledge, transformed into useful technology.</h2>
            <p className="section-copy">
              KODVIT brings ideas to life through software development, websites and applications,
              AI-driven solutions, digital products, and automation. We focus on building practical
              technology that moves ideas forward.
            </p>
            <div className="mt-7">
              <ActionLink to="/about">Discover KODVIT</ActionLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 reveal">
            <div className="service-tile col-span-2 flex min-h-48 flex-col justify-between">
              <span className="icon-box">
                <Braces aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold">Ideas, shaped into code.</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  From a first conversation to a tested digital solution, each step starts with
                  understanding the need.
                </p>
              </div>
            </div>
            <div className="service-tile min-h-36">
              <span className="font-display text-3xl font-semibold text-brand-blue">01</span>
              <p className="mt-5 font-semibold">Practical by design</p>
            </div>
            <div className="service-tile min-h-36">
              <span className="font-display text-3xl font-semibold text-brand-orange">02</span>
              <p className="mt-5 font-semibold">Built for what’s next</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Software and technology"
            title="Technology built around what matters."
            text="Explore the software and digital capabilities KODVIT brings to new ideas, growing teams, and evolving needs."
          />
          <div className="feature-grid">
            {services.map(({ title, text, icon: Icon }) => (
              <Link key={title} to="/solutions" className="service-tile block">
                <span className="icon-box">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Link>
            ))}
          </div>
          <div className="mt-7">
            <ActionLink to="/solutions">View all solutions</ActionLink>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-brand-line pt-8 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow">What we do</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">
                Practical learning through Trinetra Tech
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Technology workshops, hands-on projects, hackathons, internships, and
                career-readiness activities.
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 rounded-sm bg-brand-orange text-brand-navy hover:bg-brand-orange/90 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              <Link to="/trinetra-tech">
                Explore Trinetra Tech <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container split-layout">
          <div className="reveal">
            <NfcShowcaseVideo />
          </div>
          <div className="reveal">
            <p className="eyebrow">Featured digital product</p>
            <h2 className="section-title">Your identity. One tap away.</h2>
            <p className="section-copy">
              KODVIT is developing an NFC digital card concept designed to make sharing a
              professional profile simple. A tap can bring people to a digital profile
              experience—built for professionals, entrepreneurs, and teams.
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-blue">
              Upcoming product · Enquiries welcome
            </p>
            <div className="mt-7">
              <ActionLink to="/products">Explore NFC digital cards</ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-space">
        <div className="site-container split-layout">
          <div className="reveal">
            <p className="eyebrow">Education brand</p>
            <h2 className="section-title">Trinetra Tech</h2>
            <p className="mt-3 font-display text-xl font-semibold text-brand-navy">
              Practical Learning. Real Skills. Future Readiness.
            </p>
            <p className="section-copy">
              Trinetra Tech focuses on practical technology learning and skill development through
              workshops, hands-on projects, hackathons, training programs, and career-readiness
              activities. We aim to help learners strengthen their technical abilities, build
              confidence, and prepare for future opportunities.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>Technology workshops</li>
              <li>Hands-on projects and hackathons</li>
              <li>Internships and skill development</li>
              <li>Communication and career readiness</li>
            </ul>
            <div className="mt-7">
              <Button
                asChild
                className="rounded-sm bg-brand-orange text-brand-navy hover:bg-brand-orange/90 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                <Link to="/trinetra-tech">
                  Explore Trinetra Tech <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="impact-panel reveal">
            <p className="relative z-10 text-sm font-semibold uppercase text-brand-light-blue">
              Verified learning impact
            </p>
            <p className="relative z-10 mt-6 font-display text-6xl font-bold">
              200<span className="text-brand-orange">+</span>
            </p>
            <p className="relative z-10 mt-1 font-display text-2xl font-medium">Students trained</p>
            <p className="relative z-10 mt-5 max-w-sm text-sm leading-relaxed text-brand-white/75">
              Through Trinetra Tech’s practical technology learning and student-development
              initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Trinetra Tech"
            title="Real learning, shared over time."
            text="Explore practical technology learning through hackathons, workshops, and internships."
          />
          <GalleryGrid preview />
          <div className="mt-7">
            <ActionLink to="/gallery">View all gallery</ActionLink>
          </div>
        </div>
      </section>

      <section className="section-band section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our approach"
            title="A clear path from idea to improvement."
            text="A collaborative process keeps the work grounded in the need, tested with care, and ready to evolve."
          />
          <div className="process-grid">
            {[
              "Understand the requirement",
              "Plan and design",
              "Develop the solution",
              "Test and refine",
              "Deliver and improve",
            ].map((step, index) => (
              <div className="process-step" key={step}>
                <span className="font-display text-sm font-semibold text-brand-orange">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCallout />
    </SiteLayout>
  );
}
