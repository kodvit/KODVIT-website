import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";
import {
  ActionLink,
  ContactCallout,
  PageIntro,
  SectionHeading,
  SiteLayout,
} from "@/components/SiteLayout";
import { TrinetraVideoSection } from "@/components/TrinetraProgramVideos";

export const Route = createFileRoute("/edutech")({
  head: () => ({
    meta: [
      { title: "EduTech | Practical Technology Education & 21-Day Induction" },
      {
        name: "description",
        content:
          "Explore KODVIT EduTech: 21 Days Induction Program for 1st-year students, hands-on technology workshops, hackathons, and internship programs.",
      },
      {
        property: "og:title",
        content: "EduTech | Practical Technology Education & 21-Day Induction",
      },
      {
        property: "og:description",
        content:
          "Hands-on technology learning, 21 Days Induction Program (Public Speaking, Leadership, Presentations, Confidence), hackathons, workshops, and verified certification from KODVIT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EduTechPage,
});

const programs = [
  {
    icon: Award,
    title: "21 Days Induction Program (1st Year Flagship)",
    isFlagship: true,
    badge: "Most Important 1st Year Program",
    text: "Specially crafted for 1st-year students to conquer stage fear, master public speaking, cultivate leadership skills, perfect presentation delivery, and build unshakeable confidence across 21 transformative days.",
    highlights: [
      "Public speaking & stage presence",
      "Leadership & peer collaboration",
      "Slide presentation & pitching skills",
      "Self-confidence & communication mastery",
      "Official KODVIT verified certificate",
    ],
  },
  {
    icon: Code2,
    title: "Technology workshops",
    text: "Learn through guided, hands-on sessions that connect practical skills with real projects and mentor insights.",
    highlights: ["Hands-on coding exercises", "AI developer tools", "Direct mentor feedback"],
  },
  {
    icon: BookOpen,
    title: "Hackathons and projects",
    text: "Collaborate around real-world challenges, build solutions with a team, and bring new ideas to life.",
    highlights: [
      "Rapid prototyping sprints",
      "Live stage demonstrations",
      "Industry jury feedback",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Internships",
    text: "Explore practical project experience, mentorship, skill building, and career readiness.",
    highlights: [
      "Agile standups & code reviews",
      "Production full-stack apps",
      "Career graduation",
    ],
  },
  {
    icon: Lightbulb,
    title: "AI and emerging technology",
    text: "Explore new technologies through guided learning, architectural discussions, and practical experiments.",
  },
  {
    icon: Users,
    title: "Career readiness",
    text: "Develop practical experience, professional portfolios, and confidence for next steps.",
  },
];

export function EduTechPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Practical Technology Learning"
        title="EduTech makes technology practical."
        text="KODVIT EduTech focuses on the 21 Days Induction Program for 1st-year students, hands-on technology learning, technical workshops, hackathons, and software internships with verified certification."
      />
      <section className="section-space">
        <div className="site-container split-layout">
          <div>
            <p className="eyebrow">Learning through practice</p>
            <h2 className="section-title">Build skills by building things.</h2>
            <p className="section-copy">
              EduTech brings students closer to the technologies and ways of working shaping the
              digital world, through practical learning, immersive 21-day inductions, and
              student-development initiatives.
            </p>
            <div className="mt-7">
              <ActionLink to="/contact">Enquire about programs</ActionLink>
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
              Through EduTech’s 21-Day Induction, hands-on workshops, and hackathons.
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
            text="Practical learning programs connecting foundational confidence, communication, and cutting-edge engineering."
          />
          <div className="feature-grid">
            {programs.map((prog) => {
              const { icon: Icon, title, text } = prog;
              const isFlagship = "isFlagship" in prog && prog.isFlagship;
              const badge = "badge" in prog ? (prog.badge as string) : null;
              const highlights = "highlights" in prog ? (prog.highlights as string[]) : null;

              return (
                <article
                  key={title}
                  className={`service-tile relative transition-all duration-300 ${
                    isFlagship
                      ? "col-span-full border-brand-blue bg-gradient-to-br from-brand-ice/50 via-white to-amber-50/40 p-6 shadow-lg ring-2 ring-brand-blue/30 lg:p-8"
                      : ""
                  }`}
                >
                  {badge && (
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 border border-amber-300">
                      <Sparkles size={12} className="text-amber-600" />
                      <span>{badge}</span>
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <span
                      className={`icon-box shrink-0 ${
                        isFlagship ? "bg-brand-blue text-white shadow-md" : ""
                      }`}
                    >
                      <Icon aria-hidden="true" size={24} />
                    </span>
                    <div className="flex-1">
                      <h2
                        className={`font-display font-semibold ${
                          isFlagship ? "text-2xl text-brand-navy" : "text-xl"
                        }`}
                      >
                        {title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>

                      {highlights && (
                        <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-brand-line/60">
                          {highlights.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center gap-1 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-navy border border-brand-line shadow-xs"
                            >
                              <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <ContactCallout title="Bring practical technology learning to your community." />
    </SiteLayout>
  );
}
