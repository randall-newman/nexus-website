import {
  IBM_Plex_Mono,
  Instrument_Serif,
  Manrope,
  Onest,
  Sora,
  Space_Grotesk,
} from 'next/font/google';

const onest = Onest({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

/** Onest is the primary brand font, served via the --font-inter-tight CSS variable so all existing utility classes work unchanged. */
export const fontVariables = [
  onest.variable,
  ibmPlexMono.variable,
  instrumentSerif.variable,
  manrope.variable,
  sora.variable,
  spaceGrotesk.variable,
].join(' ');

export { ibmPlexMono, instrumentSerif, onest as interTight, manrope, sora, spaceGrotesk };
