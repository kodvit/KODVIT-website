import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Bot,
  Braces,
  CheckCircle2,
  Cpu,
  Globe2,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { ActionLink, ContactCallout, SectionHeading, SiteLayout } from "@/components/SiteLayout";
import { GalleryGrid } from "@/components/GalleryGrid";
import { NfcShowcaseVideo } from "@/components/NfcShowcaseVideo";
import { Button } from "@/components/ui/button";

const heroStoryVisual = "/kodvit-hero-story.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KODVIT | Ideas Into Innovation • Software, AI & EduTech" },
      {
        name: "description",
        content:
          "KODVIT builds modern digital solutions through software engineering, AI-driven innovation, 1-tap NFC identity cards, and EduTech programs including the 21 Days Induction.",
      },
      { property: "og:title", content: "KODVIT | Ideas Into Innovation • Software, AI & EduTech" },
      {
        property: "og:description",
        content:
          "Software development, AI-driven solutions, NFC digital cards, and hands-on EduTech student programs with verified KODVIT certification.",
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
    text: "High-performance, modern responsive websites engineered around your brand and goals.",
    icon: Globe2,
  },
  {
    title: "Web applications",
    text: "Production-ready browser applications, SaaS portals, and mission-critical workflows.",
    icon: Braces,
  },
  {
    title: "Mobile applications",
    text: "Intuitive cross-platform iOS & Android apps designed for speed and everyday usability.",
    icon: Smartphone,
  },
  {
    title: "AI-driven solutions",
    text: "Practical generative AI, LLM integration, and automated intelligence embedded into your workflows.",
    icon: Bot,
  },
  {
    title: "Business automation",
    text: "Frictionless digital workflows that eliminate repetitive tasks and scale productivity.",
    icon: Workflow,
  },
  {
    title: "Custom software",
    text: "Tailored software architectures shaped around unique enterprise and domain requirements.",
    icon: Cpu,
  },
  {
    title: "Digital products & NFC",
    text: "Next-gen NFC digital profile identity cards and connected modern web products.",
    icon: Layers3,
  },
  {
    title: "Emerging technology",
    text: "Pioneering new technologies, cloud architectures, and practical engineering frontiers.",
    icon: ArrowUpRight,
  },
];

const pillars = [
  {
    badge: "Engineering & AI",
    title: "Digital Software Solutions",
    description:
      "From bespoke web applications and cross-platform mobile apps to generative AI integration and cloud infrastructure, KODVIT delivers production-grade software.",
    icon: Cpu,
    link: "/solutions",
    linkLabel: "Explore Software Solutions",
    bullets: ["Custom Web & SaaS Apps", "AI & Workflow Automation", "Scalable Cloud Architecture"],
  },
  {
    badge: "Smart Identity",
    title: "NFC Digital Cards",
    description:
      "Physical-to-digital professional networking. A single contactless tap shares your complete digital profile, portfolio, and contact info instantly to any smartphone.",
    icon: Layers3,
    link: "/products",
    linkLabel: "Discover NFC Cards",
    bullets: ["1-Tap Contactless Sharing", "Custom Dynamic Profiles", "Eco-friendly & Reusable"],
  },
  {
    badge: "Student Empowerment",
    title: "EduTech Programs",
    description:
      "Transformative practical technology education: 21 Days Induction for 1st-year students, rapid hackathons, AI workshops, and full-stack software internships.",
    icon: GraduationCap,
    link: "/edutech",
    linkLabel: "Explore EduTech Learning",
    bullets: [
      "21 Days Induction (Public Speaking & Leadership)",
      "Hands-on AI Tool Workshops",
      "Verified KODVIT Certification",
    ],
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
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
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-white/90 px-3.5 py-1 text-xs font-semibold text-brand-blue shadow-xs backdrop-blur-md">
              <Sparkles size={13} className="text-brand-orange" />
              <span>KODVIT Software & EduTech Innovation</span>
            </div>
            <h1 className="hero-title mt-4">
              Ideas into <em>innovation.</em> Technology into possibility.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              KODVIT builds modern digital solutions through full-stack software engineering,
              AI-driven innovation, 1-tap NFC smart cards, and immersive EduTech student programs.
            </p>
            <div className="button-row mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-brand-blue text-primary-foreground hover:bg-brand-blue/90 shadow-md"
              >
                <Link to="/solutions">
                  Explore our solutions <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                className="bg-brand-orange text-brand-navy hover:bg-brand-orange/90 font-semibold shadow-md"
              >
                <Link to="/edutech">
                  21-Day Induction & EduTech <GraduationCap aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-brand-blue/30 bg-white/80 text-brand-navy hover:bg-brand-ice"
              >
                <Link to="/contact">
                  Get in touch <ArrowDownRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-navy/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600" /> Production Software
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600" /> NFC Digital Identity
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600" /> 21-Day Induction Program
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600" /> Verified Certification
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Trust & Impact Metric Strip */}
      <section className="border-y border-brand-line/80 bg-gradient-to-r from-brand-ice/70 via-white to-brand-ice/50 py-6 sm:py-8">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-4 divide-y divide-brand-line sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
            <div className="px-3 py-2 text-center">
              <p className="font-display text-3xl font-extrabold text-brand-navy sm:text-4xl">
                200<span className="text-brand-orange">+</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Students Trained
              </p>
              <p className="mt-0.5 text-[0.72rem] text-slate-500">Across universities & colleges</p>
            </div>
            <div className="px-3 py-2 text-center pt-4 sm:pt-2">
              <p className="font-display text-3xl font-extrabold text-brand-blue sm:text-4xl">
                21<span className="text-brand-navy"> Days</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Flagship Induction
              </p>
              <p className="mt-0.5 text-[0.72rem] text-slate-500">
                Public speaking & leadership mastery
              </p>
            </div>
            <div className="px-3 py-2 text-center pt-4 sm:pt-2">
              <p className="font-display text-3xl font-extrabold text-brand-navy sm:text-4xl">
                1<span className="text-brand-blue"> Tap</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                NFC Smart Cards
              </p>
              <p className="mt-0.5 text-[0.72rem] text-slate-500">
                Instant digital profile sharing
              </p>
            </div>
            <div className="px-3 py-2 text-center pt-4 sm:pt-2">
              <p className="font-display text-3xl font-extrabold text-emerald-600 sm:text-4xl">
                100<span className="text-emerald-500">%</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Verified Certificate
              </p>
              <p className="mt-0.5 text-[0.72rem] text-slate-500">Official KODVIT credentials</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Strategic Value Pillars */}
      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Three core pillars of KODVIT innovation."
            text="Whether building enterprise software, deploying contactless physical-to-digital products, or cultivating the next generation of engineers."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const { badge, title, description, icon: Icon, link, linkLabel, bullets } = pillar;
              return (
                <div
                  key={title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-brand-line bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-blue/50 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-ice px-3 py-1 text-xs font-bold text-brand-blue">
                        {badge}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-ice text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                    <div className="mt-5 space-y-2 border-t border-brand-line/60 pt-4">
                      {bullets.map((b) => (
                        <div
                          key={b}
                          className="flex items-center gap-2 text-xs font-semibold text-brand-navy"
                        >
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-line/50">
                    <ActionLink to={link}>{linkLabel}</ActionLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About KODVIT Section */}
      <section className="section-band section-space">
        <div className="site-container split-layout">
          <div className="reveal">
            <p className="eyebrow">About KODVIT</p>
            <h2 className="section-title">Knowledge, transformed into useful technology.</h2>
            <p className="section-copy">
              KODVIT brings ideas to life through software engineering, websites, SaaS applications,
              AI-driven solutions, and NFC digital products. We partner with founders, businesses,
              and educational institutions to build technology that moves ideas forward.
            </p>
            <div className="mt-7">
              <ActionLink to="/about">Discover KODVIT story</ActionLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 reveal">
            <div className="service-tile col-span-2 flex min-h-48 flex-col justify-between bg-white shadow-sm border border-brand-line">
              <span className="icon-box">
                <Braces aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold text-brand-navy">
                  Ideas, shaped into code.
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  From architectural whiteboard design to production deployment, every line of code
                  serves real utility and long-term stability.
                </p>
              </div>
            </div>
            <div className="service-tile min-h-36 bg-white border border-brand-line">
              <span className="font-display text-3xl font-semibold text-brand-blue">01</span>
              <p className="mt-5 font-semibold text-brand-navy">Practical by design</p>
            </div>
            <div className="service-tile min-h-36 bg-white border border-brand-line">
              <span className="font-display text-3xl font-semibold text-brand-orange">02</span>
              <p className="mt-5 font-semibold text-brand-navy">Built for what’s next</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Capabilities Grid */}
      <section className="section-space">
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
        </div>
      </section>

      {/* Featured Digital Product - NFC Cards */}
      <section className="section-band section-space">
        <div className="site-container split-layout">
          <div className="reveal">
            <NfcShowcaseVideo />
          </div>
          <div className="reveal">
            <p className="eyebrow">Featured digital product</p>
            <h2 className="section-title">Your identity. One tap away.</h2>
            <p className="section-copy">
              KODVIT is developing an NFC digital card concept designed to make sharing a
              professional profile effortless. A single tap instantly brings clients and partners to
              your verified digital profile, portfolio, and contact details.
            </p>
            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                <CheckCircle2 size={15} className="text-emerald-600" /> No app download required
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                <CheckCircle2 size={15} className="text-emerald-600" /> Compatible with iOS &
                Android smartphones
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                <CheckCircle2 size={15} className="text-emerald-600" /> Real-time cloud profile
                updates
              </div>
            </div>
            <p className="mt-5 text-sm font-semibold text-brand-blue">
              Upcoming product · Enquiries welcome
            </p>
            <div className="mt-7">
              <ActionLink to="/products">Explore NFC digital cards</ActionLink>
            </div>
          </div>
        </div>
      </section>

      {/* EduTech Learning Spotlight with 21 Days Induction */}
      <section className="section-space">
        <div className="site-container split-layout">
          <div className="reveal">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 border border-amber-300">
              <Sparkles size={12} className="text-amber-600" />
              <span>Flagship Student Program</span>
            </div>
            <h2 className="section-title mt-3">EduTech: Practical Learning & Real Skills</h2>
            <p className="mt-2 font-display text-xl font-semibold text-brand-navy">
              21 Days Induction Program • Public Speaking • Leadership • Confidence
            </p>
            <p className="section-copy">
              KODVIT EduTech bridges college education and industry readiness. Our most vital
              initiative—the <strong>21 Days Induction Program</strong>—is specifically designed for
              1st-year students to overcome stage fright, master public speaking, develop strong
              leadership and presentation skills, and build lifelong confidence.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-brand-blue/30 bg-brand-ice/40 p-3.5">
                <p className="font-display text-sm font-bold text-brand-blue">
                  ★ 21 Days Induction Program
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Public speaking, leadership, presentation mastery & confidence building for
                  1st-year students.
                </p>
              </div>
              <div className="rounded-xl border border-brand-line bg-white p-3.5">
                <p className="font-display text-sm font-bold text-brand-navy">
                  ★ KODVIT Hackathons
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Collaborative problem solving, system design, and live stage demonstrations.
                </p>
              </div>
              <div className="rounded-xl border border-brand-line bg-white p-3.5">
                <p className="font-display text-sm font-bold text-brand-navy">
                  ★ Technology & AI Workshops
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Hands-on developer tools, generative AI masterclasses, and laptop laboratory
                  sessions.
                </p>
              </div>
              <div className="rounded-xl border border-brand-line bg-white p-3.5">
                <p className="font-display text-sm font-bold text-brand-navy">
                  ★ Software Internships
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Senior engineer mentorship, real group software projects, and career graduation.
                </p>
              </div>
            </div>
            <div className="mt-7">
              <Button
                asChild
                className="rounded-lg bg-brand-orange text-brand-navy hover:bg-brand-orange/90 font-bold shadow-md"
              >
                <Link to="/edutech">
                  Explore EduTech Programs <ArrowRight aria-hidden="true" />
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
              Through EduTech’s 21-Day Induction, hands-on workshops, hackathons, and internship
              mentorship.
            </p>
            <div className="relative z-10 mt-6 pt-5 border-t border-white/15">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-400/30">
                <ShieldCheck size={13} /> Official KODVIT Verified Certificate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Video Stories Preview */}
      <section className="section-band section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Continuous Video Stories"
            title="EduTech learning in real motion."
            text="Watch continuous video stories of the 21 Days Induction Program, Hackathons, AI Workshops, and Internships."
          />
          <GalleryGrid preview />
          <div className="mt-7">
            <ActionLink to="/gallery">View full gallery & stories</ActionLink>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="EduTech Programs"
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
