import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ContactCallout, PageIntro, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | KODVIT Practical Learning & Innovation" },
      {
        name: "description",
        content:
          "Explore KODVIT gallery categories for interactive workshops, hackathons, software training, and community activities.",
      },
      { property: "og:title", content: "Gallery | KODVIT Practical Learning & Innovation" },
      {
        property: "og:description",
        content: "Gallery categories for KODVIT workshops, hackathons, and activities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Gallery"
        title="Learning and ideas in action."
        text="Browse the gallery by activity. Authentic event photographs will be added as they are available."
      />
      <section className="section-space">
        <div className="site-container">
          <GalleryGrid />
        </div>
      </section>
      <ContactCallout title="Want to learn more about our work?" />
    </SiteLayout>
  );
}
