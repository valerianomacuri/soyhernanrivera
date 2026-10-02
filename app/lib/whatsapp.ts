const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "51[NUMERO]";
const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Hola, quiero reservar mi cupo para la Experiencia Origen";

export function getWhatsAppLink(utmParams?: URLSearchParams): string {
  const params = new URLSearchParams();
  params.set("text", WHATSAPP_MESSAGE);

  utmParams?.forEach((value, key) => {
    if (key.startsWith("utm_")) params.set(key, value);
  });

  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`;
}
