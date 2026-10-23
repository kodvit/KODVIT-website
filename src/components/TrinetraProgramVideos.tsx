import { useEffect, useState } from "react";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  Laptop,
  Lightbulb,
  Maximize2,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

export interface ProgramVideoData {
  id: "hackathon" | "workshop" | "internship";
  title: string;
  category: "Hackathons" | "Workshops" | "Internships";
  tagline: string;
  videoImage: string;
  durationSeconds: number;
  scenes: {
    title: string;
    description: string;
    badge: string;
    details: string[];
  }[];
}

export const programVideos: Record<ProgramVideoData["id"], ProgramVideoData> = {
  hackathon: {
    id: "hackathon",
    title: "Trinetra Tech Hackathon",
    category: "Hackathons",
    tagline: "Collaborative Design → Live Presentation → KODVIT Certification",
    videoImage: "/trinetra-hackathon-video.jpg",
    durationSeconds: 9,
    scenes: [
      {
        title: "1. Collaborative Project Design",
        description:
          "Teams sit together brainstorming real-world challenges, drafting system architecture on whiteboards, and coding the prototype sprint.",
        badge: "Design & Build Sprint",
        details: [
          "Cross-functional team collaboration",
          "Rapid MVP prototyping & wireframing",
          "Git repository workflow & code reviews",
        ],
      },
      {
        title: "2. Live Stage Pitch & Demo",
        description:
          "Presenting the functional project on the main stage to industry mentors and judges with live software demonstration.",
        badge: "Pitch & Demonstration",
        details: [
          "Live working software showcase",
          "Technical Q&A with industry judges",
          "Evaluation on innovation and scalability",
        ],
      },
      {
        title: "3. KODVIT Certification Award",
        description:
          "Team celebrates their success and receives the official KODVIT Hackathon Certificate of Excellence with verified digital credential.",
        badge: "Official Certification",
        details: [
          "Official KODVIT verified certificate",
          "Award recognition & portfolio enhancement",
          "Cash prizes & mentorship opportunities",
        ],
      },
    ],
  },
  workshop: {
    id: "workshop",
    title: "Technology Workshops",
    category: "Workshops",
    tagline: "Expert AI Tools Masterclass → Hands-on Lab → KODVIT Certification",
    videoImage: "/trinetra-workshop-video.jpg",
    durationSeconds: 9,
    scenes: [
      {
        title: "1. Expert AI Tools Masterclass",
        description:
          "Industry specialist demonstrates cutting-edge generative AI tools, LLM APIs, prompt engineering, and intelligent developer workflows on interactive screens.",
        badge: "AI Tools & Architecture",
        details: [
          "Next-generation AI frameworks & APIs",
          "Practical developer automation tools",
          "Prompt engineering and system design",
        ],
      },
      {
        title: "2. Hands-on Interactive Practice",
        description:
          "Learners listen, engage, and actively execute code on their laptops, building functional AI-assisted prototypes in real time.",
        badge: "Guided Lab Execution",
        details: [
          "Hands-on coding exercises on laptops",
          "One-on-one mentor troubleshooting",
          "Building practical mini-projects",
        ],
      },
      {
        title: "3. KODVIT Workshop Certification",
        description:
          "Participants successfully complete workshop challenges and receive their official KODVIT Technology Workshop Certificate of Completion.",
        badge: "Certified Competence",
        details: [
          "Verified KODVIT Certificate of Completion",
          "Mastery of practical AI engineering tools",
          "Direct addition to professional LinkedIn profiles",
        ],
      },
    ],
  },
  internship: {
    id: "internship",
    title: "Software Engineering Internships",
    category: "Internships",
    tagline: "Industry Mentorship → Full-Stack Group Project → KODVIT Certification",
    videoImage: "/trinetra-internship-video.jpg",
    durationSeconds: 9,
    scenes: [
      {
        title: "1. Senior Engineer Mentorship",
        description:
          "Interns learn directly from senior engineers through daily standups, architectural guidance, code reviews, and industry practices.",
        badge: "Real-world Mentorship",
        details: [
          "Daily agile engineering standups",
          "Professional code walkthroughs & linting",
          "Cloud deployment & database best practices",
        ],
      },
      {
        title: "2. Full-Stack Group Project",
        description:
          "Interns collaborate in high-performing teams to architect, build, and deploy production-grade software applications.",
        badge: "Group Software Project",
        details: [
          "Collaborative system design & kanban sprints",
          "Full-stack development (frontend + backend)",
          "End-to-end testing and CI/CD pipelines",
        ],
      },
      {
        title: "3. KODVIT Internship Graduation",
        description:
          "Interns graduate, present their deployed project, and receive their official KODVIT Software Internship Certificate and recommendation letters.",
        badge: "Career Graduation",
        details: [
          "Official KODVIT Internship Certificate",
          "Verified Recommendation Letter & Reference",
          "Industry-ready portfolio showcase",
        ],
      },
    ],
  },
};

export function ProgramVideoPlayer({
  programId,
  autoPlay = true,
  compact = false,
}: {
  programId: ProgramVideoData["id"];
  autoPlay?: boolean;
  compact?: boolean;
}) {
  const data = programVideos[programId];
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [progress, setProgress] = useState<number>(0);
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (progress < 33.3) {
      setActiveSceneIndex(0);
    } else if (progress < 66.6) {
      setActiveSceneIndex(1);
    } else {
      setActiveSceneIndex(2);
    }
  }, [progress]);

  function jumpToScene(idx: number) {
    if (idx === 0) setProgress(5);
    if (idx === 1) setProgress(40);
    if (idx === 2) setProgress(75);
    setActiveSceneIndex(idx);
  }

  function handleRestart() {
    setProgress(0);
    setActiveSceneIndex(0);
    setIsPlaying(true);
  }

  const currentScene = data.scenes[activeSceneIndex];

  return (
    <div
      className={`group/player relative overflow-hidden rounded-2xl border border-brand-line bg-slate-950 text-white shadow-xl ${
        compact ? "w-full" : "w-full"
      }`}
    >
      {/* Video Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-3.5 py-2 text-xs backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-brand-light-blue animate-pulse" />
          </span>
          <span className="font-semibold uppercase tracking-wider text-slate-200">
            {data.category} Video Story
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            className="flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 text-[0.7rem] font-medium text-white transition hover:bg-white/20"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={11} /> : <Play size={11} />}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="rounded bg-white/10 p-1 text-slate-300 transition hover:bg-white/20 hover:text-white"
            aria-label="Replay video"
          >
            <RotateCcw size={11} />
          </button>
          <button
            type="button"
            onClick={() => setIsZoomed((z) => !z)}
            className="rounded bg-white/10 p-1 text-slate-300 transition hover:bg-white/20 hover:text-white"
            aria-label="Zoom video view"
          >
            <Maximize2 size={11} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-1 w-full bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-brand-blue via-brand-light-blue to-brand-orange transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Video Screen Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        {/* Cinematic 3-part Story Frame */}
        <img
          src={data.videoImage}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/player:scale-[1.02]"
          referrerPolicy="no-referrer"
        />

        {/* Dynamic Scene Highlight Indicator on the widescreen asset */}
        <div className="pointer-events-none absolute inset-0">
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />

          {/* Active scene frame spotlight box */}
          <div
            className={`absolute inset-y-0 transition-all duration-500 border-2 border-brand-light-blue/80 bg-brand-blue/10 backdrop-contrast-125 ${
              activeSceneIndex === 0
                ? "left-0 w-1/3"
                : activeSceneIndex === 1
                  ? "left-1/3 w-1/3"
                  : "left-2/3 w-1/3 border-emerald-400/90 bg-emerald-500/10"
            }`}
          >
            <div className="absolute top-2 left-2 rounded-md bg-slate-950/80 px-2 py-0.5 text-[0.65rem] font-bold text-white shadow-md backdrop-blur-sm">
              {currentScene.badge}
            </div>
          </div>
        </div>

        {/* Live Subtitle Overlay on Bottom of Video */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <div className="rounded-xl border border-white/15 bg-slate-950/85 p-2.5 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 rounded bg-brand-blue/30 px-2 py-0.5 text-[0.65rem] font-bold text-brand-light-blue">
                <Video size={10} /> Scene {activeSceneIndex + 1} of 3
              </span>
              {activeSceneIndex === 2 && (
                <span className="inline-flex items-center gap-1 text-[0.65rem] font-semibold text-emerald-400">
                  <Award size={11} /> Verified KODVIT Certificate
                </span>
              )}
            </div>
            <p className="mt-1 text-xs font-bold text-white sm:text-sm">{currentScene.title}</p>
            <p className="mt-0.5 line-clamp-2 text-[0.7rem] leading-relaxed text-slate-300">
              {currentScene.description}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-slate-900/95 text-xs">
        {data.scenes.map((scene, idx) => {
          const isActive = activeSceneIndex === idx;
          return (
            <button
              key={scene.title}
              type="button"
              onClick={() => jumpToScene(idx)}
              className={`p-2.5 text-left transition ${
                isActive
                  ? "bg-white/10 font-bold text-white border-b-2 border-brand-light-blue"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold ${
                    isActive
                      ? idx === 2
                        ? "bg-emerald-500 text-white"
                        : "bg-brand-blue text-white"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="truncate text-[0.7rem] sm:text-xs">
                  {idx === 0 ? "1. Design" : idx === 1 ? "2. Demo / Practice" : "3. Certification"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded Modal if Zoomed */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950 p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-display text-lg font-bold text-white">{data.title}</h3>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20"
              >
                Close ✕
              </button>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl">
              <img
                src={data.videoImage}
                alt={data.title}
                className="w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {data.scenes.map((scene, idx) => (
                <div
                  key={scene.title}
                  className={`rounded-xl border p-3 ${
                    activeSceneIndex === idx
                      ? "border-brand-light-blue bg-white/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <p className="text-xs font-bold text-brand-light-blue">{scene.badge}</p>
                  <h4 className="mt-1 text-sm font-semibold text-white">{scene.title}</h4>
                  <p className="mt-1 text-xs text-slate-300">{scene.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function TrinetraVideoSection() {
  const [selectedTab, setSelectedTab] = useState<ProgramVideoData["id"]>("hackathon");

  return (
    <section className="section-space bg-gradient-to-b from-brand-ice/40 via-white to-brand-ice/30">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Interactive Program Videos</p>
            <h2 className="section-title mt-2">See learning in action.</h2>
            <p className="section-copy mt-2">
              From collaborative project design to hands-on AI execution and official KODVIT
              certification.
            </p>
          </div>

          {/* Program Selectors */}
          <div className="flex flex-wrap gap-2">
            {(["hackathon", "workshop", "internship"] as const).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedTab(id)}
                className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  selectedTab === id
                    ? "bg-brand-blue text-white shadow-md ring-2 ring-brand-blue/30"
                    : "border border-brand-line bg-white text-brand-navy hover:bg-brand-ice"
                }`}
              >
                {id === "hackathon"
                  ? "Hackathons"
                  : id === "workshop"
                    ? "AI Workshops"
                    : "Internships"}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Video Player */}
        <div className="mt-8">
          <ProgramVideoPlayer programId={selectedTab} />
        </div>

        {/* 3 Program Feature Cards Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {(["hackathon", "workshop", "internship"] as const).map((id) => {
            const item = programVideos[id];
            const isCurrent = selectedTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedTab(id)}
                className={`group flex flex-col justify-between rounded-xl border p-5 text-left transition-all ${
                  isCurrent
                    ? "border-brand-blue bg-white shadow-xl ring-2 ring-brand-blue/20"
                    : "border-brand-line bg-white/70 hover:border-brand-blue/40 hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-ice px-2.5 py-1 text-[0.7rem] font-bold text-brand-blue">
                      <Sparkles size={11} /> {item.category}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600">
                      ✓ Certificate Included
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-brand-navy group-hover:text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-brand-line/60 pt-3 text-xs font-semibold text-brand-blue">
                  <span>{isCurrent ? "Currently Playing" : "Watch Video Story"}</span>
                  <ChevronRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
