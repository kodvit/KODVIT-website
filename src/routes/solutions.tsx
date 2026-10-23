import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Braces, Cpu, Globe2, Layers3, Smartphone, Workflow } from "lucide-react";
import { ContactCallout, PageIntro, SectionHeading, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Software Solutions | KODVIT" },
      {
        name: "description",
        content: "Explore KODVIT’s software, website, app, AI, and automation capabilities.",
      },
      { property: "og:title", content: "Software Solutions | KODVIT" },
      {
        property: "og:description",
        content: "Practical software and technology capabilities from KODVIT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    icon: Globe2,
    title: "Website development",
    text: "Responsive websites with clear information and purposeful experiences.",
  },
  {
    icon: Braces,
    title: "Web applications",
    text: "Browser-based products and tools for services, teams, and workflows.",
  },
  {
    icon: Smartphone,
    title: "Mobile applications",
    text: "Mobile experiences designed around everyday tasks and user needs.",
  },
  {
    icon: Bot,
    title: "AI-driven solutions",
    text: "Explore practical ways to use AI within products and processes.",
  },
  {
    icon: Workflow,
    title: "Business automation",
    text: "Digital workflows that help simplify repetitive work.",
  },
  {
    icon: Cpu,
    title: "Custom software",
    text: "Software concepts and applications tailored to a specific requirement.",
  },
  {
    icon: Layers3,
    title: "Digital products",
    text: "Product ideas developed with useful features and experiences in mind.",
  },
];

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Software solutions"
        title="Technology built around what matters."
        text="Explore KODVIT’s software and digital capabilities, from websites and applications to AI-driven workflows and custom products."
      />
      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Capabilities"
            title="The right tools for your next step."
            text="Tell us what you are working toward. We can discuss which digital approach fits your goals."
          />
          <div className="feature-grid">
            {solutions.map(({ icon: Icon, title, text }) => (
              <article key={title} className="service-tile">
                <span className="icon-box">
                  <Icon aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-band section-space">
        <div className="site-container split-layout">
          <div>
            <p className="eyebrow">A considered approach</p>
            <h2 className="section-title">Start with the challenge, not the checklist.</h2>
          </div>
          <p className="section-copy">
            Every requirement is different. We begin with the context, clarify what matters, and
            shape a practical direction before moving into design and development.
          </p>
        </div>
      </section>
      <ContactCallout title="Let’s talk about your next project." />
    </SiteLayout>
  );
}
