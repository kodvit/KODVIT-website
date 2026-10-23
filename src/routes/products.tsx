import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ContactRound, Smartphone, Wifi } from "lucide-react";
import { NfcShowcaseVideo } from "@/components/NfcShowcaseVideo";
import { ContactCallout, PageIntro, SectionHeading, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Digital Products | KODVIT NFC Cards" },
      {
        name: "description",
        content:
          "Discover KODVIT’s upcoming NFC digital card concept for sharing a professional profile with a tap.",
      },
      { property: "og:title", content: "Digital Products | KODVIT NFC Cards" },
      { property: "og:description", content: "An upcoming NFC digital card concept from KODVIT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Digital products"
        title="Your identity. One tap away."
        text="KODVIT is developing an NFC digital card concept designed to make sharing a professional profile simple."
      />
      <section className="section-space">
        <div className="site-container split-layout">
          <div>
            <NfcShowcaseVideo />
          </div>
          <div>
            <p className="eyebrow">Upcoming product · Enquiries welcome</p>
            <h2 className="section-title">A simple way to connect.</h2>
            <p className="section-copy">
              A tap can bring people to a digital profile experience—built for professionals,
              entrepreneurs, and teams. The NFC digital card is in development and is not yet
              available to purchase.
            </p>
            <div className="mt-7">
              <Link
                className="inline-flex items-center gap-2 font-semibold text-brand-blue"
                to="/contact"
              >
                Ask about the concept <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-band section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="The concept"
            title="Meet, tap, and share."
            text="A physical card with NFC technology can connect to a digital profile experience on a compatible smartphone."
          />
          <div className="feature-grid">
            {[
              {
                icon: ContactRound,
                title: "A professional profile",
                text: "A digital destination for the information you choose to share.",
              },
              {
                icon: Wifi,
                title: "NFC-enabled sharing",
                text: "A tap-based connection concept for compatible devices.",
              },
              {
                icon: Smartphone,
                title: "Designed for mobile",
                text: "A profile experience intended to be viewed on a phone.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="service-tile">
                <span className="icon-box">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCallout title="Interested in the upcoming NFC card?" />
    </SiteLayout>
  );
}
