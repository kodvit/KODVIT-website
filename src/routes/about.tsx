import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, Lightbulb, Target } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  ActionLink,
  ContactCallout,
  PageIntro,
  SectionHeading,
  SiteLayout,
} from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KODVIT | Knowledge Turned Into Code" },
      {
        name: "description",
        content:
          "Learn about KODVIT’s approach to practical software, digital products, and emerging technology.",
      },
      { property: "og:title", content: "About KODVIT | Knowledge Turned Into Code" },
      {
        property: "og:description",
        content: "KODVIT turns knowledge into useful digital technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: Target,
    title: "Purpose before technology",
    text: "Start with the need, then choose the right digital approach.",
  },
  {
    icon: Lightbulb,
    title: "Useful by design",
    text: "Shape ideas into clear, practical experiences for real people.",
  },
  {
    icon: Compass,
    title: "Ready to evolve",
    text: "Build with room to learn, refine, and grow over time.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="About KODVIT"
        title="Knowledge turned into code."
        text="KODVIT is a technology company focused on turning ideas into useful digital solutions through software, AI, and emerging technologies."
      />
      <section className="section-space">
        <div className="site-container split-layout">
          <div>
            <p className="eyebrow">About KODVIT</p>
            <h2 className="section-title">About KODVIT</h2>
            <p className="section-copy">
              KODVIT is focused on building digital solutions through software development, AI,
              automation, and emerging technologies. We aim to turn ideas into practical digital
              products and solutions that address real-world needs while encouraging continuous
              innovation.
            </p>
            <div className="mt-7">
              <ActionLink to="/solutions">Explore software solutions</ActionLink>
            </div>
          </div>
          <div className="grid gap-4">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="detail-row">
                <span className="icon-box">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
                <span className="sr-only">Principle {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-band section-space">
        <div className="site-container split-layout">
          <div>
            <p className="eyebrow">Education and skill development</p>
            <h2 className="section-title">About Trinetra Tech</h2>
            <p className="section-copy">
              Trinetra Tech focuses on practical learning and skill development through technology
              workshops, hands-on projects, hackathons, training programs, and career-readiness
              activities. Its programs encourage learning by doing and help learners develop skills
              for academic, personal, and professional growth.
            </p>
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
          <div className="grid gap-4">
            {[
              {
                icon: Target,
                title: "Learn by doing",
                text: "Hands-on projects and practical technology activities.",
              },
              {
                icon: Lightbulb,
                title: "Build confidence",
                text: "Skill development through guided learning and practice.",
              },
              {
                icon: Compass,
                title: "Prepare for next steps",
                text: "Career-readiness activities that support continued growth.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="detail-row">
                <span className="icon-box">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-band section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="A connected idea"
            title="From understanding to improvement."
            text="Good digital work is collaborative and iterative. We listen, plan, build, test, and refine around the need at hand."
          />
          <div className="process-grid">
            {["Understand", "Plan", "Build", "Test", "Improve"].map((step, index) => (
              <div className="process-step" key={step}>
                <span className="font-display text-sm font-semibold text-brand-orange">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{step}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-brand-blue">
            A practical process, shaped around your goals{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </div>
        </div>
      </section>
      <ContactCallout title="Have an idea to explore?" />
    </SiteLayout>
  );
}
