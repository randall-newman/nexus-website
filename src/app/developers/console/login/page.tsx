import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...generateMetadata('API Console Login | Nexus AI', undefined, '/developers/console/login'),
  robots: { index: false, follow: false },
};

const inputCls =
  'w-full rounded-xl border border-[#e2e8f2] bg-white px-4 py-3 text-sm text-[#0c1452] placeholder:text-[#94a0bc] focus:border-[#7458e8] focus:outline-none transition-colors duration-200';

export default function DeveloperConsolePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#070b3d] px-4 py-12">
      <div className="w-full max-w-[420px] space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block mb-6">
            <span className="text-xl font-bold text-white">Nexus AI</span>
          </Link>
          <div className="inline-flex items-center rounded-full bg-[#121a55] px-3 py-1 text-xs text-[#8ab0f5] mb-4">
            Developer Console
          </div>
          <h1 className="text-2xl font-bold text-white">API Console</h1>
          <p className="mt-1.5 text-sm text-[#8ab0f5]">
            Access your API keys, usage stats and documentation
          </p>
        </div>

        <div className="rounded-2xl bg-[#121a55] border border-[#2a3578] p-8">
          <form
            action="https://app.mynexusai.com/developers/console"
            method="post"
            className="space-y-4"
          >
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-[#c9d2e6]">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="developer@company.com"
                className={inputCls}
                required
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-[#c9d2e6]">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="At least 8 characters"
                className={inputCls}
                required
                minLength={8}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#3a5fd0] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4c7df0]"
            >
              Access Console
            </button>
          </form>

          <div className="mt-6 border-t border-[#2a3578] pt-6 space-y-2 text-center">
            <p className="text-sm text-[#8ab0f5]">
              Need an API key?{' '}
              <Link href="/signup" className="text-[#4c7df0] hover:underline font-medium">
                Create an account
              </Link>
            </p>
            <p className="text-xs text-[#5c6688]">
              <Link href="/developers/docs" className="hover:text-[#8ab0f5]">
                API Documentation
              </Link>
              {' · '}
              <Link href="/contact" className="hover:text-[#8ab0f5]">
                Contact support
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-[#5c6688]">
          By accessing the console, you agree to our{' '}
          <Link href="/legal/terms-of-service" className="underline hover:text-[#8ab0f5]">
            Terms
          </Link>{' '}
          and{' '}
          <Link href="/legal/privacy-policy" className="underline hover:text-[#8ab0f5]">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
