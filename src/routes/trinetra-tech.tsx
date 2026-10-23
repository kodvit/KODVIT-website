import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, BriefcaseBusiness, Code2, Lightbulb, Users } from "lucide-react";
import {
  ActionLink,
  ContactCallout,
  PageIntro,
  SectionHeading,
  SiteLayout,
} from "@/components/SiteLayout";
import { TrinetraVideoSection } from "@/components/TrinetraProgramVideos";

export const Route = createFileRoute("/trinetra-tech")({
  head: () => ({
    meta: [
      { title: "Trinetra Tech | Practical Technology Education" },
      {
        name: "description",
        content:
          "Explore Trinetra Tech, a distinct education brand focused on practical technology learning and student development.",
      },
      { property: "og:title", content: "Trinetra Tech | Practical Technology Education" },
      {
        property: "og:description",
        content: "Hands-on technology learning from the separate Trinetra Tech education brand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrinetraTechPage,
});

const programs = [
  {
    icon: Code2,
    title: "Technology workshops",
    text: "Learn through guided, hands-on sessions that connect practical skills with real projects and mentor insights.",
  },
  {
    icon: Lightbulb,
    title: "AI and emerging technology",
    text: "Explore new technologies through guided learning and discussion.",
  },
  {
    icon: BookOpen,
    title: "Hackathons and projects",
    text: "Collaborate around real-world challenges, build solutions with a team, and bring new ideas to life.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Internships",
    text: "Explore practical project experience, mentorship, skill building, and career readiness.",
  },
  {
    icon: Users,
    title: "Career readiness",
    text: "Develop practical experience, portfolios, and confidence for next steps.",
  },
];

function TrinetraTechPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="A separate education brand"
        title="Trinetra Tech makes technology practical."
        text="Trinetra Tech is a distinct education brand focused on hands-on technology learning, technical workshops, hackathons, project development, and career readiness."
      />
      <section className="section-space">
        <div className="site-container split-layout">
          <div>
            <p className="eyebrow">Learning through practice</p>
            <h2 className="section-title">Build skills by building things.</h2>
            <p className="section-copy">
              Trinetra Tech brings students closer to the technologies and ways of working shaping
              the digital world, through practical learning and student-development initiatives.
            </p>
            <div className="mt-7">
              <ActionLink>Enquire about workshops</ActionLink>
            </div>
          </div>
          <div className="impact-panel">
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

      {/* Interactive Program Video Showcase */}
      <TrinetraVideoSection />

      <section className="section-band section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Learning areas"
            title="Technology, made tangible."
            text="Practical learning that connects new ideas with hands-on experience."
          />
          <div className="feature-grid">
            {programs.map(({ icon: Icon, title, text }) => (
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
      <ContactCallout title="Bring practical technology learning to your community." />
    </SiteLayout>
  );
}
