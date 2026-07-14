import SmoothScrollProvider from "@/src/components/animation/smooth-scroll";
import { ConditionalShell } from "@/src/components/shared/layout/conditional-shell";
import { SessionProvider } from "@/src/components/providers/session-provider";
import { fontVariables } from "@/src/utils/font";
import { Analytics } from "@vercel/analytics/next";
import { ReactNode, Suspense } from "react";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        {/* Google Tag Manager — script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W92MM2DZ');`,
          }}
        />
        {/* Google Tag Manager — noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W92MM2DZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","o4sm4brf15");`,
          }}
        />
        <SessionProvider>
          <ConditionalShell>
            <Suspense>
              <SmoothScrollProvider>
                {children}
              </SmoothScrollProvider>
            </Suspense>
          </ConditionalShell>
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
