import SmoothScrollProvider from "@/src/components/animation/smooth-scroll";
import { ConditionalShell } from "@/src/components/shared/layout/conditional-shell";
import { fontVariables } from "@/src/utils/font";
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
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","o4sm4brf15");`,
          }}
        />
        <Suspense>
          <SmoothScrollProvider>
            <ConditionalShell>{children}</ConditionalShell>
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
