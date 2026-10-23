import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MessageCircle, MessageSquareText, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro, SectionHeading, SiteLayout } from "@/components/SiteLayout";
import { socialProfileUrls } from "@/lib/social-links";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KODVIT | Start a Conversation" },
      {
        name: "description",
        content:
          "Send KODVIT an enquiry about software, digital products, partnerships, or Trinetra Tech learning.",
      },
      { property: "og:title", content: "Contact KODVIT | Start a Conversation" },
      { property: "og:description", content: "Share a project or learning enquiry with KODVIT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const socialNetworks = [
    { label: "Instagram", icon: Instagram, url: socialProfileUrls.instagram },
    { label: "LinkedIn", icon: Linkedin, url: socialProfileUrls.linkedin },
    { label: "WhatsApp", icon: MessageCircle, url: socialProfileUrls.whatsapp },
  ];

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Contact"
        title="Let’s start a conversation."
        text="Tell us what you have in mind. Send your enquiry directly to kodvitsupport@gmail.com."
      />
      <section className="section-space">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="What are you exploring?"
              text="Reach KODVIT about software, digital products, partnerships, or Trinetra Tech learning."
            />
            <div className="grid gap-5">
              <div className="detail-row">
                <span className="icon-box">
                  <Mail aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold">Email</h2>
                  <a
                    className="mt-1 inline-block text-sm font-semibold text-brand-blue underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    href="mailto:kodvitsupport@gmail.com"
                  >
                    kodvitsupport@gmail.com
                  </a>
                </div>
              </div>
              <div className="detail-row">
                <span className="icon-box">
                  <Phone aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold">Phone & WhatsApp</h2>
                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    <a
                      className="text-sm font-semibold text-brand-blue underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                      href="tel:+919160846529"
                    >
                      +91 9160846529
                    </a>
                    <a
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                      href={socialProfileUrls.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={14} /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="detail-row">
                <span className="icon-box">
                  <MessageSquareText aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold">A little context</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Share the goals, questions, or details you already know.
                  </p>
                </div>
              </div>
              <div className="pt-2" aria-label="KODVIT social profiles">
                <h2 className="mb-3 font-display text-lg font-semibold">Social media</h2>
                <div className="flex flex-wrap gap-3">
                  {socialNetworks.map(({ label, icon: Icon, url }) =>
                    url ? (
                      <a
                        key={label}
                        className="inline-flex min-h-11 items-center gap-2 border border-brand-line px-3 py-2 text-sm font-semibold text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon aria-hidden="true" size={18} />
                        <span>{label}</span>
                      </a>
                    ) : (
                      <span
                        key={label}
                        aria-label={`${label} link coming soon`}
                        className="inline-flex min-h-11 items-center gap-2 border border-brand-line bg-brand-ice px-3 py-2 text-sm font-semibold text-brand-navy"
                      >
                        <Icon aria-hidden="true" size={18} />
                        <span>{label}</span>
                        <span className="text-xs font-normal text-muted-foreground">
                          Link coming soon
                        </span>
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
