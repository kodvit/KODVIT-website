import { useState, type FormEvent } from "react";
import { Check, Copy, ExternalLink, Mail, MessageCircle, Send } from "lucide-react";
import { contactSchema } from "@/lib/contact-schema";
import { buildWhatsAppUrl, socialProfileUrls } from "@/lib/social-links";
import { Button } from "@/components/ui/button";

interface PreparedEmail {
  to: string;
  subject: string;
  body: string;
  mailtoUrl: string;
  gmailUrl: string;
  whatsappUrl: string;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "preparing" | "ready">("idle");
  const [preparedEmail, setPreparedEmail] = useState<PreparedEmail | null>(null);
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setCopied(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setStatus("preparing");

    const recipient = socialProfileUrls.email;
    const emailSubject = `[KODVIT Enquiry] ${parsed.data.subject} - from ${parsed.data.name}`;
    const emailBody = [
      `New Enquiry for KODVIT:`,
      ``,
      `Full Name: ${parsed.data.name}`,
      `Email Address: ${parsed.data.email}`,
      `Phone Number: ${parsed.data.phone || "Not provided"}`,
      `Subject: ${parsed.data.subject}`,
      ``,
      `Message:`,
      `${parsed.data.message}`,
      ``,
      `---`,
      `Sent from KODVIT Website Contact Form`,
    ].join("\n");

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    const whatsappText = `*New Website Enquiry*\n*Name:* ${parsed.data.name}\n*Email:* ${parsed.data.email}\n*Phone:* ${parsed.data.phone || "N/A"}\n*Subject:* ${parsed.data.subject}\n*Message:* ${parsed.data.message}`;
    const whatsappUrl = buildWhatsAppUrl(whatsappText);

    const emailData: PreparedEmail = {
      to: recipient,
      subject: emailSubject,
      body: emailBody,
      mailtoUrl,
      gmailUrl,
      whatsappUrl,
    };

    setPreparedEmail(emailData);
    setStatus("ready");

    // Automatically trigger default mail application to send to recipient
    window.location.href = mailtoUrl;
  }

  function handleCopy() {
    if (!preparedEmail) return;
    const textToCopy = `To: ${preparedEmail.to}\nSubject: ${preparedEmail.subject}\n\n${preparedEmail.body}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="grid gap-6">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="form-field">
            <label htmlFor="contact-name">
              Full name <span aria-hidden="true">*</span>
            </label>
            <input
              className="form-control"
              id="contact-name"
              name="name"
              autoComplete="name"
              maxLength={100}
              required
              aria-invalid={Boolean(errors["name"])}
              aria-describedby={errors["name"] ? "contact-name-error" : undefined}
            />
            {errors["name"] && (
              <p id="contact-name-error" className="text-sm text-destructive">
                {errors["name"]}
              </p>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">
              Email address <span aria-hidden="true">*</span>
            </label>
            <input
              className="form-control"
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              maxLength={254}
              required
              aria-invalid={Boolean(errors["email"])}
              aria-describedby={errors["email"] ? "contact-email-error" : undefined}
            />
            {errors["email"] && (
              <p id="contact-email-error" className="text-sm text-destructive">
                {errors["email"]}
              </p>
            )}
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="contact-phone">
            Phone number <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            className="form-control"
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            maxLength={32}
            aria-invalid={Boolean(errors["phone"])}
            aria-describedby={errors["phone"] ? "contact-phone-error" : undefined}
          />
          {errors["phone"] && (
            <p id="contact-phone-error" className="text-sm text-destructive">
              {errors["phone"]}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="contact-subject">
            Subject <span aria-hidden="true">*</span>
          </label>
          <input
            className="form-control"
            id="contact-subject"
            name="subject"
            maxLength={160}
            required
            aria-invalid={Boolean(errors["subject"])}
            aria-describedby={errors["subject"] ? "contact-subject-error" : undefined}
          />
          {errors["subject"] && (
            <p id="contact-subject-error" className="text-sm text-destructive">
              {errors["subject"]}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="contact-message">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            className="form-control min-h-36 resize-y"
            id="contact-message"
            name="message"
            maxLength={3000}
            required
            aria-invalid={Boolean(errors["message"])}
            aria-describedby={errors["message"] ? "contact-message-error" : undefined}
          />
          {errors["message"] && (
            <p id="contact-message-error" className="text-sm text-destructive">
              {errors["message"]}
            </p>
          )}
        </div>

        {/* Confirmation banner when mail client is triggered */}
        {status === "ready" && preparedEmail && (
          <div
            role="status"
            className="rounded-lg border-2 border-emerald-500 bg-emerald-50/80 p-4 text-brand-navy dark:bg-emerald-950/30"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                <Check size={14} />
              </span>
              <div className="grid gap-2">
                <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                  Ready to send to <u>{preparedEmail.to}</u>!
                </p>
                <p className="text-xs leading-relaxed text-emerald-800 dark:text-emerald-300">
                  Your mail client was launched to send this enquiry directly to{" "}
                  <strong>{preparedEmail.to}</strong>. If your email app did not open automatically,
                  choose an option below:
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a
                    href={preparedEmail.gmailUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-emerald-800"
                  >
                    <Mail size={13} /> Open in Gmail <ExternalLink size={12} />
                  </a>
                  <a
                    href={preparedEmail.mailtoUrl}
                    className="inline-flex items-center gap-1.5 rounded-md border border-emerald-600 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 dark:bg-zinc-900 dark:text-emerald-300"
                  >
                    <Send size={13} /> Launch Mail App
                  </a>
                  <a
                    href={preparedEmail.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700"
                  >
                    <MessageCircle size={13} /> Send via WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 rounded-md border border-brand-line bg-white px-3 py-1.5 text-xs font-medium text-brand-navy transition hover:bg-brand-ice dark:bg-zinc-900 dark:text-white"
                  >
                    {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                    {copied ? "Copied!" : "Copy Details"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            type="submit"
            className="w-full bg-brand-blue text-primary-foreground hover:bg-brand-blue/90 sm:w-fit"
          >
            <Send className="mr-1.5 size-4" /> Send Enquiry
          </Button>

          <a
            href={socialProfileUrls.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-600/30 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100 sm:w-fit"
          >
            <MessageCircle size={16} className="text-emerald-600" /> Or chat on WhatsApp
          </a>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Enquiries are emailed directly to <strong>{socialProfileUrls.email}</strong> without
          intermediate database storage.
        </p>
      </form>
    </div>
  );
}
