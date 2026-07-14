import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo/logo.svg';
import verbosecLogo from '@/public/images/logo/verbosec-logo.svg';

export default function HelpFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <figure className="relative mb-3 h-9 w-9">
              <Image src={logo} alt="Nexus AI" fill className="object-contain" sizes="36px" />
            </figure>
            <p className="text-sm font-semibold text-gray-900">Nexus AI Help Centre</p>
            <p className="mt-1 text-xs text-gray-500">
              Built by Verbosec. We&apos;re here to help.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Help
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/help" className="hover:text-gray-900">Help Home</Link></li>
                <li><Link href="/help/what-is-nexus-ai" className="hover:text-gray-900">Getting Started</Link></li>
                <li><Link href="/help/contact-support" className="hover:text-gray-900">Contact Support</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Account
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/help/upgrade-your-plan" className="hover:text-gray-900">Upgrade Plan</Link></li>
                <li><Link href="/help/reset-password" className="hover:text-gray-900">Reset Password</Link></li>
                <li><Link href="/help/cancel-subscription" className="hover:text-gray-900">Cancel Subscription</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Nexus AI
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="https://app.mynexusai.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                    Open App
                  </Link>
                </li>
                <li><Link href="/pricing" className="hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Verbosec. All rights reserved.
          </p>
          <Link
            href="https://verbosec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            aria-label="Verbosec website"
          >
            <figure className="relative h-7 w-28">
              <Image src={verbosecLogo} alt="Verbosec" fill className="object-contain object-left" sizes="112px" />
            </figure>
          </Link>
        </div>
      </div>
    </footer>
  );
}
