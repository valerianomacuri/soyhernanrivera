"use client";

import { useEffect, useMemo } from "react";
import Script from "next/script";
import {
  CLARITY_PROJECT_ID,
  GA4_MEASUREMENT_ID,
  META_PIXEL_ID,
  isConfigured,
  revokeTracking,
} from "@/app/lib/analytics";
import { useConsent } from "@/app/lib/consent";
import { captureUtms } from "@/app/lib/utm";

export function Analytics() {
  const consent = useConsent();
  const allowed = consent === "granted" || consent === "unset";

  // Captured in an effect so it runs client-side only; stored for later events.
  const utms = useMemo(() => (allowed ? captureUtms() : {}), [allowed]);

  useEffect(() => {
    if (consent === "denied") {
      // Scripts may already be loaded from this session; revoke immediately.
      revokeTracking();
    }
  }, [consent]);

  if (!allowed) return null;

  const utmJson = JSON.stringify(utms);

  return (
    <>
      {isConfigured(GA4_MEASUREMENT_ID) && (
        <>
          <Script
            id="ga4-base"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {analytics_storage:'granted', ad_storage:'granted', ad_user_data:'granted', ad_personalization:'granted'});
              gtag('js', new Date());
              gtag('config', '${GA4_MEASUREMENT_ID}', ${utmJson === "{}" ? "{}" : `{campaign_source:${JSON.stringify(utms.utm_source ?? "")}, campaign_medium:${JSON.stringify(utms.utm_medium ?? "")}, campaign_name:${JSON.stringify(utms.utm_campaign ?? "")}, campaign_content:${JSON.stringify(utms.utm_content ?? "")}, campaign_term:${JSON.stringify(utms.utm_term ?? "")}}`});`}
          </Script>
        </>
      )}
      {isConfigured(META_PIXEL_ID) && (
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
            fbq('track', 'PageView');
            fbq('track', 'ViewContent', {content_name: 'Experiencia Origen', content_category: 'workshop', value: 97, currency: 'PEN'});`}
        </Script>
      )}
      {isConfigured(CLARITY_PROJECT_ID) && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","${CLARITY_PROJECT_ID}");
          ${Object.entries(utms)
            .filter(([k]) => k.startsWith("utm_"))
            .map(([k, v]) => `clarity("set", ${JSON.stringify(k)}, ${JSON.stringify(v)});`)
            .join("\n")}`}
        </Script>
      )}
    </>
  );
}
