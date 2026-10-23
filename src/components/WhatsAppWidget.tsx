import { useState } from "react";
import { MessageCircle, Send, X, ExternalLink } from "lucide-react";
import { socialProfileUrls, buildWhatsAppUrl } from "@/lib/social-links";

const quickPrompts = [
  "Hi KODVIT, I'm interested in building a software application.",
  "Hello, I'd like to enquire about your NFC Digital Card.",
  "Hi, I want to learn more about Trinetra Tech workshops.",
  "Hello KODVIT team, I have a project collaboration idea.",
];

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  function handleSend(text?: string) {
    const messageToSend =
      text || customMessage || "Hello KODVIT, I would like to enquire about your services.";
    const url = buildWhatsAppUrl(messageToSend);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
    setCustomMessage("");
  }

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat on WhatsApp"
          className="mb-4 w-[20rem] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-brand-line bg-card shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-4 sm:w-[22rem]"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/whatsapp-3d.jpg"
                  alt="3D WhatsApp Logo"
                  className="h-10 w-10 rounded-full object-cover shadow-md ring-2 ring-white/40"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold leading-tight">Chat with KODVIT</h3>
                <p className="text-[0.7rem] text-emerald-100">Usually replies within minutes</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Close WhatsApp chat popup"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="bg-brand-ice/60 p-4">
            <div className="rounded-xl border border-brand-line bg-white p-3 text-xs leading-relaxed text-brand-navy shadow-xs">
              👋 <strong>Hello!</strong> How can we help turn your idea into code today? Choose a
              quick topic or type your message below.
            </div>

            {/* Quick action chips */}
            <div className="mt-3 grid gap-1.5">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="rounded-lg border border-brand-line bg-white px-2.5 py-1.5 text-left text-xs font-medium text-brand-navy transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="mt-3 flex items-center gap-1.5 rounded-xl border border-brand-line bg-white p-1.5 shadow-xs focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-500/20">
              <input
                type="text"
                placeholder="Type your message..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="w-full bg-transparent px-2 text-xs text-brand-navy outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white transition hover:bg-emerald-700"
                aria-label="Send WhatsApp message"
              >
                <Send size={14} />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-[0.68rem] text-muted-foreground">
              <span>Direct WhatsApp: {socialProfileUrls.phone}</span>
              <a
                href={socialProfileUrls.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-0.5 text-emerald-700 underline hover:text-emerald-800"
              >
                Open Web <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating 3D Button */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Open WhatsApp conversation with KODVIT"
          className="relative flex h-14 w-14 items-center justify-center rounded-full p-0 transition-transform duration-200 hover:scale-110 active:scale-95 shadow-xl hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/40"
        >
          {/* 3D WhatsApp Logo Image */}
          <img
            src="/whatsapp-3d.jpg"
            alt="3D WhatsApp Logo"
            className="h-14 w-14 rounded-full object-cover transition-shadow duration-200 ring-2 ring-emerald-400/60"
            referrerPolicy="no-referrer"
          />
          {/* Pulsing online status indicator */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
          </span>
        </button>

        {/* Hover tooltip when closed */}
        {!isOpen && (
          <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-brand-navy px-3 py-1.5 text-xs font-semibold text-white shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Chat on WhatsApp
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 border-4 border-transparent border-l-brand-navy" />
          </div>
        )}
      </div>
    </aside>
  );
}
