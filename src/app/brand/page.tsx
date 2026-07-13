import colorLogo from '@/public/images/logo/main-logo.svg';
import whiteLogo from '@/public/images/logo/main-logo-white.svg';
import blackLogo from '@/public/images/logo/main-logo-outline.svg';
import iconLogo from '@/public/images/logo/logo.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { ArrowDownToLine, Check, Mail, X } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Brand | Nexus AI',
    'Official Nexus AI brand assets, logo downloads, color palette, and usage guidelines for press and partners.',
    '/brand'
  ),
};

/* ─── Data ──────────────────────────────────────────────── */

const colors = [
  { name: 'Brand Navy', hex: '#000C60', rgb: '0, 12, 96', bg: '#000C60', text: 'text-white', role: 'Primary buttons, headings, icon backgrounds' },
  { name: 'Text Ink', hex: '#0C1452', rgb: '12, 20, 82', bg: '#0C1452', text: 'text-white', role: 'Body text, dark UI elements' },
  { name: 'Blue Primary', hex: '#217BFE', rgb: '33, 123, 254', bg: '#217BFE', text: 'text-white', role: 'Gradient start — icon and accent' },
  { name: 'Blue Bright', hex: '#078EFB', rgb: '7, 142, 251', bg: '#078EFB', text: 'text-white', role: 'Gradient second stop' },
  { name: 'Purple', hex: '#AC87EB', rgb: '172, 135, 235', bg: '#AC87EB', text: 'text-white', role: 'Gradient third stop' },
  { name: 'Coral', hex: '#EE4D5D', rgb: '238, 77, 93', bg: '#EE4D5D', text: 'text-white', role: 'Gradient end — accent' },
  { name: 'White', hex: '#FFFFFF', rgb: '255, 255, 255', bg: '#FFFFFF', text: 'text-secondary', role: 'Backgrounds, reversed text' },
  { name: 'Surface', hex: '#F4F8FC', rgb: '244, 248, 252', bg: '#F4F8FC', text: 'text-secondary', role: 'Page and card backgrounds' },
];

const dos = [
  'Use the colour logo on white or very light backgrounds',
  'Use the white logo on dark or coloured backgrounds',
  'Use the black logo for single-colour print applications',
  'Maintain clear space equal to the height of the circle mark on all sides',
  'Download assets directly from this page for the most current versions',
];

const donts = [
  'Alter, recolour, or recreate any part of the logo',
  'Apply drop shadows, outlines, or other effects',
  'Stretch, skew, or change the proportions of the logo',
  'Place the logo on busy or low-contrast backgrounds',
  'Use the logo in a way that implies endorsement or partnership without written permission',
];

/* ─── Download button ───────────────────────────────────── */
function DownloadButton({ href, filename }: { href: string; filename: string }) {
  return (
    <a
      href={href}
      download={filename}
      className="inline-flex items-center gap-x-1.5 rounded-full border border-stroke-3 bg-background-13 px-4 py-2 text-[12px] font-medium text-secondary transition-colors hover:bg-white hover:border-stroke-2"
    >
      <ArrowDownToLine className="size-3.5" />
      SVG
    </a>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function BrandPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="bg-secondary pt-[160px] pb-20">
        <div className="main-container">
          <div className="mx-auto max-w-[720px] space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Brand</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1 className="text-white leading-[1.1]">Nexus AI Brand</h1>
            </TextReveal>
            <RevealAnimation delay={0.3}>
              <p className="text-white/60 mx-auto max-w-[520px] text-lg leading-relaxed">
                Official brand assets, logo downloads, colour palette, and usage guidelines
                for press, partners, and approved third-party use.
              </p>
            </RevealAnimation>
          </div>

          {/* Large icon display */}
          <RevealAnimation
            delay={0.4}
            asChild={false}
            className="mt-14 flex justify-center"
          >
            <div
              className="relative flex size-28 items-center justify-center rounded-3xl"
              style={{ background: 'linear-gradient(135deg, #217bfe 23%, #078efb 38%, #ac87eb 70%, #ee4d5d 100%)' }}
            >
              <Image
                src={iconLogo}
                alt="Nexus AI icon"
                width={72}
                height={72}
                className="relative z-10"
              />
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ══ LOGO DOWNLOADS ════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-4 mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Logo</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Logo variants</h2>
            </TextReveal>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-secondary/60 max-w-[480px]">
                Download the correct variant for your background. Never modify or recreate
                the logo — always use the files provided here.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Colour logo on white */}
            <RevealAnimation
              delay={0.1}
              asChild={false}
              className="border-stroke-3 rounded-2xl border overflow-hidden"
            >
              <div className="flex h-36 items-center justify-center bg-white px-6">
                <Image src={colorLogo} alt="Nexus AI colour logo" width={200} height={38} />
              </div>
              <div className="bg-background-13 px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-tagline-2 font-medium text-secondary">Colour</p>
                  <p className="text-tagline-3 text-secondary/50">For white or light backgrounds</p>
                </div>
                <DownloadButton href="/images/logo/main-logo.svg" filename="nexus-ai-logo-colour.svg" />
              </div>
            </RevealAnimation>

            {/* White logo on dark */}
            <RevealAnimation
              delay={0.2}
              asChild={false}
              className="border-stroke-3 rounded-2xl border overflow-hidden"
            >
              <div className="flex h-36 items-center justify-center bg-secondary px-6">
                <Image src={whiteLogo} alt="Nexus AI white logo" width={200} height={38} />
              </div>
              <div className="bg-background-13 px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-tagline-2 font-medium text-secondary">White</p>
                  <p className="text-tagline-3 text-secondary/50">For dark or coloured backgrounds</p>
                </div>
                <DownloadButton href="/images/logo/main-logo-white.svg" filename="nexus-ai-logo-white.svg" />
              </div>
            </RevealAnimation>

            {/* Black logo on light */}
            <RevealAnimation
              delay={0.3}
              asChild={false}
              className="border-stroke-3 rounded-2xl border overflow-hidden"
            >
              <div className="flex h-36 items-center justify-center bg-[#f4f8fc] px-6">
                <Image src={blackLogo} alt="Nexus AI black logo" width={200} height={38} />
              </div>
              <div className="bg-background-13 px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-tagline-2 font-medium text-secondary">Black</p>
                  <p className="text-tagline-3 text-secondary/50">For single-colour print</p>
                </div>
                <DownloadButton href="/images/logo/main-logo-outline.svg" filename="nexus-ai-logo-black.svg" />
              </div>
            </RevealAnimation>

            {/* Icon */}
            <RevealAnimation
              delay={0.4}
              asChild={false}
              className="border-stroke-3 rounded-2xl border overflow-hidden"
            >
              <div className="flex h-36 items-center justify-center bg-white px-6">
                <Image src={iconLogo} alt="Nexus AI icon" width={60} height={60} />
              </div>
              <div className="bg-background-13 px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-tagline-2 font-medium text-secondary">Icon mark</p>
                  <p className="text-tagline-3 text-secondary/50">App icon and favicon use</p>
                </div>
                <DownloadButton href="/images/logo/logo.svg" filename="nexus-ai-icon.svg" />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ BRAND COLORS ══════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-4 mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Colours</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Brand colour palette</h2>
            </TextReveal>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-secondary/60 max-w-[480px]">
                These are the only approved colours for use in Nexus AI brand materials.
                The four gradient colours always appear in sequence and are never used individually.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {colors.map((color, i) => (
              <RevealAnimation
                key={color.hex}
                delay={0.06 * (i + 1)}
                asChild={false}
                className="border-stroke-3 rounded-2xl border overflow-hidden"
              >
                <div
                  className="h-20 w-full"
                  style={{ backgroundColor: color.bg, border: color.hex === '#FFFFFF' ? '1px solid #e2e8f2' : undefined }}
                />
                <div className="bg-white px-3 py-3 space-y-0.5">
                  <p className="text-[11px] font-semibold text-secondary">{color.name}</p>
                  <p className="font-mono text-[10px] text-secondary/50">{color.hex}</p>
                  <p className="font-mono text-[10px] text-secondary/40">rgb({color.rgb})</p>
                </div>
              </RevealAnimation>
            ))}
          </div>

          {/* Gradient swatch */}
          <RevealAnimation
            delay={0.5}
            asChild={false}
            className="mt-5 border-stroke-3 rounded-2xl border overflow-hidden"
          >
            <div
              className="h-16 w-full rounded-t-2xl"
              style={{ background: 'linear-gradient(90deg, #217bfe 23%, #078efb 38%, #ac87eb 70%, #ee4d5d 100%)' }}
            />
            <div className="bg-white px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-tagline-2 font-semibold text-secondary">Brand gradient</p>
                <p className="text-tagline-3 text-secondary/50">Used in the icon mark and AI motifs — always all four stops in sequence</p>
              </div>
              <p className="font-mono text-[11px] text-secondary/40 hidden sm:block">#217BFE → #078EFB → #AC87EB → #EE4D5D</p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ══ TYPOGRAPHY ════════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-4 mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Typography</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Brand typefaces</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Primary */}
            <RevealAnimation
              delay={0.2}
              asChild={false}
              className="border-stroke-3 rounded-2xl border bg-white p-8 space-y-5"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40 mb-1">Primary typeface</p>
                <p className="text-heading-4 text-secondary font-semibold">Onest</p>
              </div>
              <p className="text-secondary/60 text-tagline-2">
                Used for all UI text, body copy, and marketing communications. Available on Google Fonts.
              </p>
              <div className="space-y-2">
                {['Regular 400', 'Medium 500', 'Semibold 600', 'Bold 700'].map((weight) => (
                  <div key={weight} className="flex items-baseline justify-between">
                    <p
                      className="text-secondary text-lg"
                      style={{ fontWeight: weight.split(' ')[1] }}
                    >
                      The quick brown fox
                    </p>
                    <span className="text-[11px] text-secondary/40 shrink-0 ml-4">{weight}</span>
                  </div>
                ))}
              </div>
            </RevealAnimation>

            {/* Display */}
            <RevealAnimation
              delay={0.3}
              asChild={false}
              className="border-stroke-3 rounded-2xl border bg-white p-8 space-y-5"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary/40 mb-1">Display / accent typeface</p>
                <p className="font-sora text-heading-4 text-secondary font-semibold">Sora</p>
              </div>
              <p className="text-secondary/60 text-tagline-2">
                Used for display headings and navigation labels. Available on Google Fonts.
              </p>
              <div className="space-y-2">
                {['Regular 400', 'Medium 500', 'Semibold 600', 'Bold 700'].map((weight) => (
                  <div key={weight} className="flex items-baseline justify-between">
                    <p
                      className="font-sora text-secondary text-lg"
                      style={{ fontWeight: weight.split(' ')[1] }}
                    >
                      The quick brown fox
                    </p>
                    <span className="text-[11px] text-secondary/40 shrink-0 ml-4">{weight}</span>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ══ USAGE GUIDELINES ══════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="space-y-4 mb-12">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Usage</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Logo usage guidelines</h2>
            </TextReveal>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-secondary/60 max-w-[480px]">
                Following these guidelines helps maintain the integrity and consistency of the
                Nexus AI brand across all applications.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Do */}
            <RevealAnimation
              delay={0.2}
              asChild={false}
              className="border-stroke-3 rounded-2xl border bg-white p-6 md:p-8 space-y-5"
            >
              <div className="flex items-center gap-x-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-green-50">
                  <Check className="size-4 text-green-600" strokeWidth={2.5} />
                </div>
                <h3 className="text-heading-6 text-secondary">Do</h3>
              </div>
              <ul className="space-y-3">
                {dos.map((item) => (
                  <li key={item} className="flex items-start gap-x-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" strokeWidth={2} />
                    <span className="text-tagline-2 text-secondary/70">{item}</span>
                  </li>
                ))}
              </ul>
            </RevealAnimation>

            {/* Don't */}
            <RevealAnimation
              delay={0.3}
              asChild={false}
              className="border-stroke-3 rounded-2xl border bg-white p-6 md:p-8 space-y-5"
            >
              <div className="flex items-center gap-x-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-red-50">
                  <X className="size-4 text-red-500" strokeWidth={2.5} />
                </div>
                <h3 className="text-heading-6 text-secondary">Don&apos;t</h3>
              </div>
              <ul className="space-y-3">
                {donts.map((item) => (
                  <li key={item} className="flex items-start gap-x-3">
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" strokeWidth={2} />
                    <span className="text-tagline-2 text-secondary/70">{item}</span>
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>

          <RevealAnimation
            delay={0.4}
            asChild={false}
            className="mt-5 border-stroke-3 rounded-2xl border bg-background-13 p-5"
          >
            <p className="text-tagline-2 text-secondary/60">
              <span className="font-semibold text-secondary">Permissions.</span>{' '}
              Use of the Nexus AI name, logo, and brand assets requires written permission from Verbosec, Inc.
              except for editorial, journalistic, and factual references where no endorsement is implied.
              Unauthorised commercial use is prohibited.
            </p>
          </RevealAnimation>
        </div>
      </section>

      {/* ══ PRESS CONTACT ═════════════════════════════════════ */}
      <section className="pt-20 md:pt-25 lg:pt-39 pb-0">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="bg-secondary rounded-3xl px-8 py-14 text-center space-y-6"
          >
            <div className="flex justify-center">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10">
                <Mail className="size-5 text-white" />
              </div>
            </div>
            <div className="space-y-3">
              <TextReveal delay={0.2}>
                <h2 className="text-white">Press and media</h2>
              </TextReveal>
              <RevealAnimation delay={0.3}>
                <p className="text-white/60 mx-auto max-w-[460px] text-lg leading-relaxed">
                  For press enquiries, interview requests, or to ask about approved use
                  of Nexus AI brand assets, contact our communications team.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4}>
              <a
                href="mailto:press@verbosec.com"
                className="inline-flex items-center gap-x-2 rounded-full bg-white px-6 py-3 text-tagline-1 font-semibold text-secondary transition-colors hover:bg-white/90"
              >
                <Mail className="size-4" />
                press@verbosec.com
              </a>
            </RevealAnimation>
          </RevealAnimation>
        </div>
      </section>

      <div className="pb-24" />
    </>
  );
}
