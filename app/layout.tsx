import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import Script from "next/script";
import business from "@/content/business.json";
import { META_PIXEL_ID, GA4_MEASUREMENT_ID } from "@/app/lib/analytics";
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
  title: `Experiencia Origen — Taller de Daygame en Lima | ${business.coachName}`,
  description:
    "Un día, 6 horas, experiencias reales: aprende a acercarte, conversar y conectar con naturalidad y respeto. Cupos limitados en Lima. Reserva por WhatsApp.",
  openGraph: {
    title: "Experiencia Origen — Deja de quedarte con las ganas de hablarle",
    description:
      "Taller presencial de un día en Lima para desbloquear tus habilidades sociales con práctica real, no teoría. Cupos limitados · S/ 97.",
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
    description: "Taller de daygame en Lima. Cupos limitados · S/ 97.",
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
        <Script
          id="ga4-base"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_MEASUREMENT_ID}');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');`}
        </Script>
      </body>
    </html>
  );
}
