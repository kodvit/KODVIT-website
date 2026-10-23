/** Official social media profile and communication URLs for KODVIT */
export const socialProfileUrls = {
  instagram: "https://www.instagram.com/kodvit_?obrf=d3RqNmN0a3RsMnBp",
  linkedin: "https://www.linkedin.com/company/kodvit/",
  whatsapp: "https://wa.me/919160846529",
  email: "kodvitsupport@gmail.com",
  phone: "+91 9160846529",
  phoneNumberRaw: "919160846529",
} as const;

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${socialProfileUrls.phoneNumberRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
