import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import Link from 'next/link';

/* ─── Platform icons (inline SVG) ───────────────────── */

const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
  </svg>
);

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);

const LinuxIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.39-.132.59.01.15.05.3.1.44a.424.424 0 00.344.297c.34.05.694-.049 1.003-.147.313-.1.584-.24.803-.395.182-.133.354-.276.506-.418a.74.74 0 00.168-.235 1.43 1.43 0 00.09-.342c.017-.148.027-.31.017-.47-.023-.345-.127-.669-.27-.968a1.748 1.748 0 00-.236-.35.9.9 0 01-.131-.204c.107-.107.24-.195.39-.265.146-.067.306-.117.473-.15.169-.033.344-.05.52-.05.175 0 .35.018.52.052.168.033.33.083.475.15.15.07.283.158.39.265a.898.898 0 01-.13.204 1.76 1.76 0 00-.237.35c-.143.299-.247.623-.27.968-.01.16 0 .322.017.47.02.132.053.253.09.342a.74.74 0 00.168.235c.152.142.323.285.506.418.22.155.49.295.803.395.31.098.663.198 1.003.147a.424.424 0 00.344-.297c.05-.14.09-.29.1-.44.004-.2-.042-.401-.132-.59-.206-.411-.551-.544-.864-.68-.312-.133-.598-.201-.797-.4-.213-.239-.403-.571-.663-.839a.424.424 0 00-.11-.135c.123-.805-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298A5.35 5.35 0 0012.504 0zm0 1.5c.106 0 .21.005.315.014 3.226.254 2.497 4.11 2.554 5.484.056 1.28.32 2.336 1.188 3.527.862 1.026 2.064 2.674 2.603 4.285.237.713.333 1.39.247 1.963a.42.42 0 01-.104.219c-.16.172-.32.428-.47.622a.417.417 0 01-.097.073c-.258.122-.516.247-.758.37-.49.246-.916.455-1.12.82-.094.17-.142.36-.139.55.006.17.052.343.122.505.16.373.432.686.776.906.355.227.79.37 1.22.344.086-.005.169-.02.25-.046a.42.42 0 00.27-.25c.08-.2.12-.42.11-.64-.022-.378-.17-.72-.354-.983a1.28 1.28 0 01-.108-.193c.07-.05.162-.096.267-.14.145-.061.3-.109.465-.14.165-.031.337-.047.51-.047.171 0 .343.016.508.047.165.031.32.079.465.14.105.044.197.09.267.14a1.28 1.28 0 01-.108.193c-.184.263-.332.605-.354.983-.01.22.03.44.11.64a.42.42 0 00.27.25c.081.026.164.04.25.046.43.026.865-.117 1.22-.344.344-.22.616-.533.776-.906.07-.162.116-.335.122-.505.003-.19-.045-.38-.139-.55-.204-.365-.63-.574-1.12-.82a14.744 14.744 0 01-.758-.37.417.417 0 01-.097-.073c-.15-.194-.31-.45-.47-.622a.42.42 0 01-.104-.219c-.086-.573.01-1.25.247-1.963.539-1.611 1.741-3.259 2.603-4.285.868-1.191 1.132-2.247 1.188-3.527.057-1.374-.672-5.23 2.554-5.484.105-.009.21-.014.315-.014z" />
  </svg>
);

const AndroidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.523 15.341c-.652 0-1.181-.529-1.181-1.181s.529-1.18 1.181-1.18c.652 0 1.18.528 1.18 1.18s-.528 1.181-1.18 1.181m-11.046 0c-.652 0-1.181-.529-1.181-1.181s.529-1.18 1.181-1.18c.652 0 1.18.528 1.18 1.18s-.528 1.181-1.18 1.181m11.386-6.209l1.366-2.356a.287.287 0 00-.499-.287l-1.382 2.387C16.099 8.34 14.14 7.8 12 7.8c-2.14 0-4.099.54-5.349 1.076L5.27 6.489a.287.287 0 00-.499.287l1.366 2.356C3.562 10.438 2 12.607 2 15.23v.77h20v-.77c0-2.623-1.562-4.792-4.137-6.098" />
  </svg>
);

const ChromeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 10.909a1.091 1.091 0 1 1 0 2.182 1.091 1.091 0 0 1 0-2.182z" />
  </svg>
);

/* ─── Platform data ──────────────────────────────────── */

type Platform = {
  title: string;
  subtitle: string;
  description: string;
  compatibility: string;
  cta: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  featured?: boolean;
  badge?: string;
};

const platforms: Platform[] = [
  {
    title: 'macOS',
    subtitle: 'Apple Silicon & Intel',
    description: 'Native app with full support for Apple Silicon and Intel Macs.',
    compatibility: 'macOS 12 Monterey or later',
    cta: 'Download for Mac',
    href: '/downloads/mac',
    icon: AppleIcon,
    iconBg: 'bg-secondary',
    iconColor: 'text-white',
    featured: true,
  },
  {
    title: 'Windows',
    subtitle: 'Windows 10 & 11',
    description: 'Full-featured desktop app for Windows 10 and Windows 11.',
    compatibility: 'Windows 10 version 1903 or later',
    cta: 'Download for Windows',
    href: '/downloads/windows',
    icon: WindowsIcon,
    iconBg: 'bg-[#0078D4]',
    iconColor: 'text-white',
  },
  {
    title: 'iOS',
    subtitle: 'iPhone & iPad',
    description: 'Take Nexus AI with you on iPhone and iPad — synced with desktop.',
    compatibility: 'iOS 16 or later',
    cta: 'Download on App Store',
    href: '/downloads/mobile',
    icon: AppleIcon,
    iconBg: 'bg-gradient-to-br from-[#007AFF] to-[#5856D6]',
    iconColor: 'text-white',
  },
  {
    title: 'Android',
    subtitle: 'Phones & Tablets',
    description: 'Full Nexus AI workspace on your Android phone or tablet.',
    compatibility: 'Android 8.0 Oreo or later',
    cta: 'Get on Google Play',
    href: '/downloads/mobile',
    icon: AndroidIcon,
    iconBg: 'bg-[#3DDC84]',
    iconColor: 'text-white',
  },
  {
    title: 'Linux',
    subtitle: 'AppImage & .deb',
    description: 'Available for Ubuntu/Debian and most major distributions.',
    compatibility: 'Ubuntu 20.04 LTS or equivalent',
    cta: 'Get Linux build',
    href: '/downloads/linux',
    icon: LinuxIcon,
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    badge: 'Beta',
  },
  {
    title: 'Browser Extension',
    subtitle: 'Chrome, Edge & Brave',
    description: 'Use Nexus AI in any web page — summarise, write, and ask questions.',
    compatibility: 'Chrome 100+, Edge 100+, Brave',
    cta: 'Add to browser',
    href: '/downloads/browser-extension',
    icon: ChromeIcon,
    iconBg: 'bg-gradient-to-br from-[#4285F4] to-[#34A853]',
    iconColor: 'text-white',
  },
];

const PlatformGrid = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-14 lg:space-y-18">
          {/* Heading */}
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Downloads</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h1>Nexus AI, on every device</h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-background-14/60 mx-auto max-w-[520px] text-lg leading-relaxed">
                Get the native app for your platform and take your AI workspace wherever
                you go. Conversations, folders and Creative Studio assets sync across
                every device automatically.
              </p>
            </TextReveal>
          </div>

          {/* Platform cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <RevealAnimation
                  key={platform.title}
                  delay={0.1 * (index + 1)}
                  asChild={false}
                  className={`relative flex flex-col gap-y-6 rounded-2xl border bg-white p-7 ${
                    platform.featured ? 'border-secondary' : 'border-stroke-3'
                  }`}
                >
                  {platform.badge && (
                    <span className="absolute top-5 right-5 rounded-full bg-secondary/8 px-2.5 py-0.5 text-[11px] font-semibold text-secondary/60">
                      {platform.badge}
                    </span>
                  )}
                  {platform.featured && (
                    <span className="absolute top-5 right-5 rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-white">
                      Recommended
                    </span>
                  )}

                  <div className="flex items-center gap-x-4">
                    <div
                      className={`${platform.iconBg} flex size-12 shrink-0 items-center justify-center rounded-2xl`}
                    >
                      <Icon className={`size-6 ${platform.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-heading-6 text-secondary">{platform.title}</h3>
                      <p className="text-[13px] text-secondary/50">{platform.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <p className="text-[14px] text-secondary/70 leading-relaxed">{platform.description}</p>
                    <p className="text-[12px] text-secondary/40">{platform.compatibility}</p>
                  </div>

                  <Link href={platform.href} className="block">
                    {platform.featured ? (
                      <ButtonPrimary
                        className="w-full"
                        textClassName="text-center flex-1 px-0! pr-8!"
                      >
                        {platform.cta}
                      </ButtonPrimary>
                    ) : (
                      <ButtonWhite
                        className="w-full"
                        textClassName="text-center flex-1 px-0! pr-8!"
                      >
                        {platform.cta}
                      </ButtonWhite>
                    )}
                  </Link>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformGrid;
