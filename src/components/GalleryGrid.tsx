import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Play, Video, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgramVideoPlayer } from "@/components/TrinetraProgramVideos";

const filters = [
  "All",
  "Hackathons",
  "Workshops",
  "Internships",
  "College Events",
  "Other Activities",
] as const;
type GalleryCategory = Exclude<(typeof filters)[number], "All">;

const items: {
  title: string;
  description: string;
  category: GalleryCategory;
  date: string;
  image?: string;
  imageAlt?: string;
  programId?: "hackathon" | "workshop" | "internship";
}[] = [
  {
    title: "Hackathons",
    description:
      "A group of students designing the project, presenting the live demo to judges, and receiving official certification from KODVIT.",
    category: "Hackathons",
    date: "Interactive Video Story",
    image: "/trinetra-hackathon-video.jpg",
    imageAlt:
      "Hackathon journey: collaborative design, live presentation, and KODVIT certification",
    programId: "hackathon",
  },
  {
    title: "Technology workshops",
    description:
      "Expert mentor explaining advanced AI tools, students actively listening & practicing on laptops, and receiving official certification from KODVIT.",
    category: "Workshops",
    date: "Interactive Video Story",
    image: "/trinetra-workshop-video.jpg",
    imageAlt: "Workshop journey: AI tools masterclass, hands-on lab, and KODVIT certification",
    programId: "workshop",
  },
  {
    title: "Internships",
    description:
      "Students learning from industry experts, collaborating on full-stack group projects, and receiving official internship certification from KODVIT.",
    category: "Internships",
    date: "Interactive Video Story",
    image: "/trinetra-internship-video.jpg",
    imageAlt:
      "Internship journey: senior mentorship, group software project, and KODVIT certification",
    programId: "internship",
  },
  {
    title: "College collaborations",
    description: "Space for genuine college event photographs.",
    category: "College Events",
    date: "Date to be added",
  },
  {
    title: "Expert sessions",
    description: "Space for guest sessions and learning activities.",
    category: "Other Activities",
    date: "Date to be added",
  },
  {
    title: "Student projects",
    description: "Space for authentic project showcases and announcements.",
    category: "Other Activities",
    date: "Date to be added",
  },
];

export function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const visibleItems = useMemo(
    () => items.filter((item) => filter === "All" || item.category === filter),
    [filter],
  );
  const displayedItems = preview ? visibleItems.slice(0, 3) : visibleItems;
  const selected = active === null ? null : (visibleItems[active] ?? null);

  function move(direction: number) {
    if (active === null || visibleItems.length === 0) return;
    setActive((active + direction + visibleItems.length) % visibleItems.length);
  }

  return (
    <>
      {!preview && (
        <div
          className="mb-7 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter gallery by category"
        >
          {filters.map((item) => (
            <Button
              key={item}
              type="button"
              size="sm"
              variant={filter === item ? "default" : "outline"}
              onClick={() => {
                setFilter(item);
                setActive(null);
              }}
            >
              {item}
            </Button>
          ))}
        </div>
      )}
      <div className="gallery-grid">
        {displayedItems.map((item, index) => (
          <button
            key={`${item.category}-${item.title}`}
            type="button"
            className="gallery-item"
            aria-label={`Open gallery item: ${item.title}`}
            onClick={() => setActive(index)}
          >
            {item.image ? (
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-navy">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {item.programId && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition hover:bg-black/15">
                    <span className="flex items-center gap-1.5 rounded-full bg-slate-950/85 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm ring-1 ring-white/20">
                      <Play size={12} fill="currentColor" className="text-brand-light-blue" />
                      <span>Watch Video Story</span>
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="placeholder-visual aspect-[1.2]">
                <span className="inline-flex items-center border border-brand-blue/25 bg-brand-white/80 px-2 py-1 text-[0.65rem] font-bold uppercase text-brand-blue">
                  Photo coming soon
                </span>
                <span className="font-display text-2xl font-semibold text-brand-navy">
                  {item.category}
                </span>
              </div>
            )}
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </div>
      {active !== null && selected && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-brand-navy/90 p-4"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <section
            className="w-full max-w-3xl bg-brand-white p-5 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-dialog-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{selected.category}</p>
                <h2 id="gallery-dialog-title" className="mt-2 font-display text-2xl font-semibold">
                  {selected.title}
                </h2>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Close gallery viewer"
                onClick={() => setActive(null)}
              >
                <X aria-hidden="true" />
              </Button>
            </div>
            {selected.programId ? (
              <div className="my-5">
                <ProgramVideoPlayer programId={selected.programId} autoPlay={true} />
              </div>
            ) : selected.image ? (
              <img
                className="my-5 max-h-[65vh] w-full bg-brand-navy object-contain"
                src={selected.image}
                alt={selected.imageAlt ?? ""}
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="placeholder-visual my-5 min-h-64">
                <span className="border border-brand-blue/25 bg-brand-white/80 px-3 py-2 text-sm font-semibold text-brand-blue">
                  Authentic event photo placeholder
                </span>
                <span className="font-display text-3xl font-semibold text-brand-navy">
                  {selected.date}
                </span>
              </div>
            )}
            <p className="text-sm leading-relaxed text-muted-foreground">{selected.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                aria-label="Previous gallery item"
                onClick={() => move(-1)}
              >
                <ArrowLeft aria-hidden="true" /> Previous
              </Button>
              <span className="text-xs text-muted-foreground">
                {active + 1} / {visibleItems.length}
              </span>
              <Button
                type="button"
                variant="outline"
                aria-label="Next gallery item"
                onClick={() => move(1)}
              >
                Next <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
