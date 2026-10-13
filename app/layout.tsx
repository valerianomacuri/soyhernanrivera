import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import business from "@/content/business.json";
import { Analytics } from "@/app/components/analytics/Analytics";
import { ConsentBanner } from "@/app/components/analytics/ConsentBanner";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

function resolveSiteUrl(): URL {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "");
  } catch {
    return new URL("https://example.com");
  }
}

const siteUrl = resolveSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `Experiencia Origen — Día de prueba en Lima | ${business.coachName}`,
  description:
    "Vive un entrenamiento real en Lima, descubre tu nivel actual y recibe claridad sobre qué trabajar para avanzar. Día de prueba S/ 97 · cupos limitados.",
  openGraph: {
    title: "Experiencia Origen — Deja de bloquearte cuando realmente importa",
    description:
      "Día de prueba presencial en Lima para descubrir tu nivel real con práctica acompañada. Cupos limitados · S/ 97.",
    url: siteUrl,
    siteName: "Experiencia Origen",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Experiencia Origen",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiencia Origen",
    description: "Día de prueba en Lima. Cupos limitados · S/ 97.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-ivory">
        {children}
        <Analytics />
        <ConsentBanner />
      </body>
    </html>
  );
}
