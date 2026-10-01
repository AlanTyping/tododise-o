export function whatsappHref(message: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5491100000000";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
