import { useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronRight,
  ExternalLink,
  Globe,
  Mail,
  Pause,
  Phone,
  Play,
  RotateCcw,
  Sparkles,
  Wifi,
} from "lucide-react";

export function NfcShowcaseVideo() {
  // Step: 0 = approaching, 1 = tapping & nfc detected, 2 = website opening, 3 = contact saved
  const [step, setStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1.25;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    // Map progress (0 - 100) to stages
    if (progress < 25) {
      setStep(0); // Approaching
    } else if (progress < 45) {
      setStep(1); // Tapping & NFC Tag Detected
    } else if (progress < 75) {
      setStep(2); // Website Open
    } else {
      setStep(3); // Contact Saved
    }
  }, [progress]);

  function handleRestart() {
    setProgress(0);
    setStep(0);
    setIsPlaying(true);
  }

  function handleJump(targetStep: number) {
    if (targetStep === 0) setProgress(5);
    if (targetStep === 1) setProgress(30);
    if (targetStep === 2) setProgress(55);
    if (targetStep === 3) setProgress(85);
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-b from-slate-950 via-brand-navy to-slate-900 p-4 text-white shadow-2xl sm:p-6">
      {/* Video Player Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-xs text-brand-white/80">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </span>
          <span className="font-semibold uppercase tracking-wider text-white">
            NFC Instant Tap Simulation
          </span>
          <span className="hidden text-brand-white/50 sm:inline">•</span>
          <span className="hidden text-brand-white/60 sm:inline">
            Tap card → Open web → Save contact
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            className="flex items-center gap-1 rounded bg-white/10 px-2.5 py-1 text-xs font-medium text-white transition hover:bg-white/20"
            aria-label={isPlaying ? "Pause video simulation" : "Play video simulation"}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-xs font-medium text-white transition hover:bg-white/20"
            aria-label="Replay simulation"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-1 w-full overflow-hidden bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-brand-light-blue via-brand-blue to-brand-orange transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Interactive Simulation Stage */}
      <div className="relative my-6 flex min-h-[420px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-navy/90 p-4 sm:p-8">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />

        {/* Smartphone Mockup */}
        <div className="relative z-10 w-full max-w-[280px] shrink-0 rounded-[2.5rem] border-[4px] border-slate-700/80 bg-slate-900 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/20">
          {/* Dynamic Island / Speaker */}
          <div className="absolute top-4 left-1/2 z-30 flex h-4 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-black">
            <span className="h-2 w-2 rounded-full bg-slate-800" />
          </div>

          {/* Phone Inner Screen */}
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-slate-950 text-slate-100 shadow-inner">
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pt-2 text-[0.65rem] text-slate-400">
              <span className="font-semibold">9:41</span>
              <div className="flex items-center gap-1.5">
                <Wifi size={10} />
                <span className="h-2 w-3.5 rounded-xs border border-slate-400 p-0.5">
                  <span className="block h-full w-full bg-slate-400" />
                </span>
              </div>
            </div>

            {/* SCREEN STATE 0: Locked / Standby */}
            {step === 0 && (
              <div className="flex min-h-[350px] flex-col items-center justify-center p-4 text-center animate-in fade-in duration-300">
                <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <Wifi size={24} className="rotate-90 text-brand-light-blue animate-pulse" />
                </div>
                <p className="text-xs font-semibold text-slate-200">Ready for NFC Tap</p>
                <p className="mt-1 text-[0.68rem] text-slate-400">Bring KODVIT card near phone</p>
              </div>
            )}

            {/* SCREEN STATE 1: NFC Tag Detected Banner */}
            {step === 1 && (
              <div className="flex min-h-[350px] flex-col justify-start p-3 animate-in fade-in duration-300">
                {/* Popdown notification */}
                <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-white/20 bg-slate-800/90 p-2.5 shadow-xl backdrop-blur-md animate-in slide-in-from-top-4 duration-300">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-brand-blue to-brand-orange text-white">
                    <Sparkles size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[0.65rem] font-bold text-brand-light-blue">
                      NFC Tag Detected
                    </p>
                    <p className="text-[0.72rem] font-semibold text-white">Open kodvit.com</p>
                  </div>
                </div>

                <div className="mt-auto mb-10 flex flex-col items-center text-center">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Wifi size={18} className="rotate-90 animate-ping" />
                  </span>
                  <p className="mt-3 text-xs font-bold text-white">Connecting to KODVIT...</p>
                  <p className="text-[0.65rem] text-slate-400">Reading digital identity card</p>
                </div>
              </div>
            )}

            {/* SCREEN STATE 2: Website Opened */}
            {step === 2 && (
              <div className="flex min-h-[350px] flex-col p-3 animate-in fade-in duration-300">
                {/* Browser Address bar */}
                <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-2.5 py-1 text-[0.65rem] text-slate-300">
                  <Globe size={11} className="text-brand-light-blue" />
                  <span className="font-mono text-emerald-400">https://kodvit.com</span>
                </div>

                {/* Website content simulation */}
                <div className="mt-3 flex-1 rounded-xl border border-white/10 bg-white p-3 text-brand-navy shadow-lg">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <img
                      src="/assets/aistudio/kodvit-hd-logo_08beeca1.png"
                      alt="KODVIT Logo"
                      className="h-7 w-7 rounded-full object-contain"
                    />
                    <div>
                      <p className="font-display text-xs font-bold leading-tight">KODVIT</p>
                      <p className="text-[0.6rem] text-slate-500">Ideas into innovation</p>
                    </div>
                  </div>
                  <div className="mt-2 text-left">
                    <span className="inline-block rounded-sm bg-brand-ice px-1.5 py-0.5 text-[0.55rem] font-bold uppercase text-brand-blue">
                      Verified Profile
                    </span>
                    <p className="mt-1 text-[0.75rem] font-bold leading-tight text-slate-900">
                      Software & Digital Solutions
                    </p>
                    <p className="mt-1 text-[0.62rem] leading-relaxed text-slate-600">
                      Turning knowledge into code with AI, web & mobile applications.
                    </p>
                  </div>
                  <div className="mt-3 grid gap-1">
                    <div className="rounded-md bg-slate-50 p-1.5 text-[0.6rem] text-slate-700">
                      ⚡ <strong>Web & Mobile Apps</strong>
                    </div>
                    <div className="rounded-md bg-slate-50 p-1.5 text-[0.6rem] text-slate-700">
                      🤖 <strong>AI & Emerging Tech</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN STATE 3: Contact Saved Successfully */}
            {step === 3 && (
              <div className="flex min-h-[350px] flex-col justify-end p-2.5 animate-in slide-in-from-bottom-6 duration-400">
                {/* Native iOS/Android Contact Sheet */}
                <div className="rounded-2xl border border-white/10 bg-slate-800 p-3 text-center shadow-2xl">
                  <div className="mx-auto -mt-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-700 bg-white shadow-md">
                    <img
                      src="/assets/aistudio/kodvit-hd-logo_08beeca1.png"
                      alt="KODVIT"
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <h4 className="mt-1.5 font-display text-xs font-bold text-white">
                    KODVIT Technologies
                  </h4>
                  <p className="text-[0.62rem] text-brand-light-blue">
                    Software & Digital Products
                  </p>

                  <div className="mt-2.5 space-y-1.5 text-left text-[0.65rem] text-slate-300">
                    <div className="flex items-center gap-1.5 rounded-lg bg-slate-900/60 p-1.5">
                      <Phone size={11} className="text-emerald-400" />
                      <span>+91 9160846529</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-slate-900/60 p-1.5">
                      <Mail size={11} className="text-brand-light-blue" />
                      <span className="truncate">kodvitsupport@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-slate-900/60 p-1.5">
                      <Globe size={11} className="text-brand-orange" />
                      <span>kodvit.com</span>
                    </div>
                  </div>

                  {/* Saved Status Badge */}
                  <div className="mt-3 flex items-center justify-center gap-1 rounded-xl bg-emerald-600 py-1.5 text-xs font-bold text-white shadow-lg animate-in zoom-in-95 duration-200">
                    <Check size={14} /> Added to Contacts!
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3D NFC Card Element */}
        <div
          className={`absolute transition-all duration-700 ease-out z-20 ${
            step === 0
              ? "top-6 right-2 sm:right-8 rotate-12 scale-90 opacity-90"
              : step === 1
                ? "top-14 left-1/2 -translate-x-1/2 -rotate-6 scale-95 opacity-100"
                : "top-2 right-2 sm:right-6 rotate-12 scale-75 opacity-70"
          }`}
        >
          {/* NFC Tap ripple waves */}
          {step === 1 && (
            <div className="pointer-events-none absolute -inset-6 flex items-center justify-center">
              <span className="absolute h-24 w-24 rounded-full border-2 border-brand-light-blue animate-ping opacity-75" />
              <span className="absolute h-36 w-36 rounded-full border-2 border-brand-orange animate-ping opacity-50" />
            </div>
          )}

          {/* Realistic 3D Card Graphic */}
          <div className="relative w-44 sm:w-56 overflow-hidden rounded-xl border border-white/30 bg-gradient-to-tr from-slate-900 via-zinc-800 to-black p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.7)] backdrop-blur-md">
            {/* Metallic shine reflection */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />

            <div className="flex items-start justify-between">
              <img
                src="/assets/aistudio/kodvit-hd-logo_08beeca1.png"
                alt="KODVIT"
                className="h-8 w-8 rounded-full bg-white/90 p-0.5 object-contain"
              />
              <div className="flex items-center gap-1 text-brand-light-blue">
                <Wifi size={14} className="rotate-90 animate-pulse" />
                <span className="text-[0.6rem] font-bold tracking-widest text-slate-300">NFC</span>
              </div>
            </div>

            <div className="mt-5">
              <p className="font-display text-sm font-bold tracking-wider text-white">KODVIT</p>
              <p className="text-[0.62rem] text-slate-400">Smart Digital Identity</p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-2 text-[0.55rem] text-slate-400">
              <span>Tap to Connect</span>
              <span className="text-brand-orange font-semibold">One Touch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Step Progress Indicator / Interactive Controls */}
      <div className="grid grid-cols-1 gap-2 border-t border-white/10 pt-4 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => handleJump(1)}
          className={`flex items-center justify-between rounded-lg p-2.5 text-left text-xs transition ${
            step <= 1
              ? "border border-brand-light-blue bg-white/10 text-white font-bold"
              : "border border-transparent bg-white/5 text-slate-400 hover:text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue text-[0.65rem] text-white">
              1
            </span>
            <span>1. Tap Card Near Phone</span>
          </div>
          <ChevronRight size={14} />
        </button>

        <button
          type="button"
          onClick={() => handleJump(2)}
          className={`flex items-center justify-between rounded-lg p-2.5 text-left text-xs transition ${
            step === 2
              ? "border border-brand-light-blue bg-white/10 text-white font-bold"
              : "border border-transparent bg-white/5 text-slate-400 hover:text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light-blue text-[0.65rem] text-slate-900 font-bold">
              2
            </span>
            <span>2. Auto-Opens KODVIT</span>
          </div>
          <ChevronRight size={14} />
        </button>

        <button
          type="button"
          onClick={() => handleJump(3)}
          className={`flex items-center justify-between rounded-lg p-2.5 text-left text-xs transition ${
            step === 3
              ? "border border-emerald-400 bg-emerald-950/40 text-emerald-300 font-bold"
              : "border border-transparent bg-white/5 text-slate-400 hover:text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[0.65rem] text-white">
              3
            </span>
            <span>3. Saves Contact Info</span>
          </div>
          <Check size={14} className="text-emerald-400" />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <span>No app download required. Works natively with iOS and Android.</span>
        <button
          type="button"
          onClick={handleRestart}
          className="inline-flex items-center gap-1 font-semibold text-brand-light-blue underline hover:text-white"
        >
          <RotateCcw size={12} /> Test tap again
        </button>
      </div>
    </div>
  );
}
