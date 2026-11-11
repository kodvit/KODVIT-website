import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Award, Play, Sparkles, Video, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgramVideoPlayer, programVideos } from "@/components/TrinetraProgramVideos";

const filters = ["All", "21 Days Induction", "Hackathons", "Workshops", "Internships"] as const;
type GalleryCategory = Exclude<(typeof filters)[number], "All">;

export interface GalleryItemData {
  title: string;
  description: string;
  category: GalleryCategory;
  date: string;
  image?: string;
  imageAlt?: string;
  programId?: "induction" | "hackathon" | "workshop" | "internship";
}

const items: GalleryItemData[] = [
  {
    title: "21 Days Induction Program (1st Year Flagship)",
    description:
      "Flagship 21-day intensive program for 1st-year students: public speaking, leadership skills, presentation mastery, and rock-solid confidence with official KODVIT certification.",
    category: "21 Days Induction",
    date: "Continuous Video Story",
    image: "/kodvit-induction-video.jpg",
    imageAlt:
      "21 Days Induction Program: public speaking, leadership, presentation skills, and KODVIT certification",
    programId: "induction",
  },
  {
    title: "KODVIT Hackathons",
    description:
      "A group of students designing the project, presenting the live demo to judges, and receiving official certification from KODVIT.",
    category: "Hackathons",
    date: "Continuous Video Story",
    image: "/kodvit-hackathon-video.jpg",
    imageAlt: "KODVIT Hackathon: collaborative design, live presentation, and KODVIT certification",
    programId: "hackathon",
  },
  {
    title: "KODVIT Technology Workshops",
    description:
      "Expert mentor explaining advanced AI tools, students actively listening & practicing on laptops, and receiving official certification from KODVIT.",
    category: "Workshops",
    date: "Continuous Video Story",
    image: "/kodvit-workshop-video.jpg",
    imageAlt: "KODVIT Workshop: AI tools masterclass, hands-on lab, and KODVIT certification",
    programId: "workshop",
  },
  {
    title: "KODVIT Internships",
    description:
      "Students learning from industry experts, collaborating on full-stack group projects, and receiving official internship certification from KODVIT.",
    category: "Internships",
    date: "Continuous Video Story",
    image: "/kodvit-internship-video.jpg",
    imageAlt:
      "KODVIT Internship: senior mentorship, group software project, and KODVIT certification",
    programId: "internship",
  },
];

function ContinuousProgramCard({
  item,
  onClick,
}: {
  item: GalleryItemData & { programId: NonNullable<GalleryItemData["programId"]> };
  onClick: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const programData = programVideos[item.programId];

  // Video continuously runs in an infinite loop
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1.25));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const activeSceneIndex = progress < 33.3 ? 0 : progress < 66.6 ? 1 : 2;
  const currentScene = programData.scenes[activeSceneIndex];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`gallery-item group relative flex flex-col justify-between overflow-hidden text-left transition-all duration-300 ${
        isHovered
          ? "border-brand-blue ring-2 ring-brand-blue/30 shadow-xl"
          : "border-brand-line hover:border-brand-blue/50"
      }`}
    >
      <div>
        {/* Continuous Video Preview Screen */}
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
          <img
            src={item.image}
            alt={item.imageAlt ?? item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Continuous looping scene highlight frame */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40" />
            <div
              className={`absolute inset-y-0 transition-all duration-300 border-2 border-brand-light-blue/80 bg-brand-blue/15 ${
                activeSceneIndex === 0
                  ? "left-0 w-1/3"
                  : activeSceneIndex === 1
                    ? "left-1/3 w-1/3"
                    : "left-2/3 w-1/3 border-emerald-400/90 bg-emerald-500/15"
              }`}
            />
          </div>

          {/* Live Continuous Playing Header Indicator */}
          <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-full bg-slate-950/85 px-2.5 py-1 text-[0.65rem] font-bold text-emerald-400 shadow-md backdrop-blur-sm border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Continuous Playing</span>
            </span>
            <span className="rounded-full bg-slate-950/85 px-2 py-0.5 text-[0.65rem] font-semibold text-slate-200 backdrop-blur-sm border border-white/10">
              Scene {activeSceneIndex + 1}/3
            </span>
          </div>

          {/* Continuous Progress Bar */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20">
            <div
              className="h-full bg-gradient-to-r from-brand-blue via-brand-light-blue to-emerald-400 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Dynamic Scene Caption on Video */}
          <div className="absolute bottom-2.5 inset-x-2.5">
            <div className="rounded-lg bg-slate-950/90 p-2 text-xs backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] font-bold uppercase tracking-wide text-brand-light-blue">
                  {currentScene.badge}
                </span>
                {activeSceneIndex === 2 && (
                  <span className="inline-flex items-center gap-1 text-[0.65rem] font-bold text-emerald-400">
                    <Award size={10} /> Certified
                  </span>
                )}
              </div>
              <p className="mt-0.5 truncate text-[0.72rem] font-semibold text-white">
                {currentScene.title}
              </p>
            </div>
          </div>
        </div>

        {/* Text Section (Hovering text or video maintains active playback) */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
              {item.title}
            </h3>
            <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-700 border border-emerald-200">
              <Sparkles size={10} /> Active Video
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

          {/* Interactive Scene Step Pills */}
          <div className="mt-3 grid grid-cols-3 gap-1.5 pt-2 border-t border-brand-line/60">
            {programData.scenes.map((scene, idx) => (
              <div
                key={scene.title}
                className={`rounded px-1.5 py-1 text-center text-[0.65rem] transition ${
                  activeSceneIndex === idx
                    ? "bg-brand-blue text-white font-bold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {idx === 0 ? "1. Design" : idx === 1 ? "2. Demo/Lab" : "3. Certificate"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const visibleItems = useMemo(
    () => items.filter((item) => filter === "All" || item.category === filter),
    [filter],
  );
  const displayedItems = preview ? visibleItems.slice(0, 4) : visibleItems;
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
        {displayedItems.map((item, index) => {
          if (item.programId) {
            return (
              <ContinuousProgramCard
                key={`${item.category}-${item.title}`}
                item={
                  item as GalleryItemData & { programId: NonNullable<GalleryItemData["programId"]> }
                }
                onClick={() => setActive(index)}
              />
            );
          }

          return (
            <button
              key={`${item.category}-${item.title}`}
              type="button"
              className="gallery-item text-left"
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
          );
        })}
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
            className="w-full max-w-3xl bg-brand-white p-5 shadow-2xl rounded-2xl"
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
                className="my-5 max-h-[65vh] w-full bg-brand-navy object-contain rounded-xl"
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
