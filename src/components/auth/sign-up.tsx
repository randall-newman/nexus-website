'use client';

import nexusLogo from '@/public/images/logo/nexus-ai-logo.png';
import Image from 'next/image';
import Link from 'next/link';

const inputCls =
  'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none transition-colors duration-200 backdrop-blur-sm';

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.18.07 2 .74 2.73.8.94-.19 1.84-.89 3.02-.84 1.26.06 2.21.57 2.83 1.44-2.56 1.54-1.97 5.18.65 6.36-.49 1.38-1.17 2.72-2.23 4.12zM13 3.5c.06 2.15-1.66 3.91-3.67 3.78-.31-1.89 1.67-3.79 3.67-3.78z" />
  </svg>
);

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5" fill="none">
    <path d="M21.7541 12.2199C21.7541 11.4182 21.6878 10.8332 21.5441 10.2266H12.2031V13.8449H17.6861C17.5756 14.744 16.9786 16.0982 15.6521 17.0082L18.7915 19.3916C20.6708 17.6907 21.7541 15.1882 21.7541 12.2199Z" fill="#4285F4" />
    <path d="M12.2002 21.7514C14.8864 21.7514 17.1415 20.8847 18.7886 19.3897L15.6492 17.0063C14.8091 17.5805 13.6815 17.9813 12.2002 17.9813C9.56932 17.9813 7.33635 16.2805 6.54036 13.9297L3.3125 16.378C4.94853 19.563 8.30907 21.7514 12.2002 21.7514Z" fill="#34A853" />
    <path d="M6.53907 13.9306C6.20749 13.3239 6.20749 12.6739 6.52802 10.0739L3.3112 7.62555C2.63691 8.94723 2.25 10.4314 2.25 12.0023C2.25 13.5731 2.63691 15.0572 3.3112 16.3789L6.53907 13.9306Z" fill="#FBBC05" />
    <path d="M12.2003 6.01997C14.0685 6.01997 15.3286 6.8108 16.0472 7.47168L18.855 4.785C17.1306 3.21417 14.8865 2.25 12.2003 2.25C8.3091 2.25 4.94854 4.43832 3.3125 7.62329L6.52933 10.0717C7.33638 7.72083 9.56936 6.01997 12.2003 6.01997Z" fill="#EB4335" />
  </svg>
);

const SignUp = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <Image
        src="/images/opai-img-137.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#000c60]/60 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-[400px] space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block mb-6">
            <Image src={nexusLogo} alt="Nexus AI" height={28} className="h-7 w-auto brightness-0 invert" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Create your account</h1>
          <p className="mt-1.5 text-sm text-white/60">Free forever. No credit card required.</p>
        </div>

        <div className="rounded-2xl bg-white/10 border border-white/20 p-8 backdrop-blur-md">
          <div className="space-y-3">
            <a
              href="https://app.mynexusai.com/signup?provider=google"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              <GoogleIcon />
              Continue with Google
            </a>
            <a
              href="https://app.mynexusai.com/signup?provider=apple"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white px-4 py-3 text-sm font-medium text-[#111] transition-colors hover:bg-white/90"
            >
              <AppleIcon />
              Continue with Apple
            </a>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/20" />
            <span className="text-xs text-white/40">or sign up with email</span>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = 'https://app.mynexusai.com/signup';
            }}
            className="space-y-4"
          >
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-sm font-medium text-white/80">Full name</label>
              <input id="name" type="text" name="name" placeholder="Your name" className={inputCls} required />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
              <input id="email" type="email" name="email" placeholder="you@example.com" className={inputCls} required />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-white/80">Password</label>
              <input id="password" type="password" name="password" placeholder="At least 8 characters" className={inputCls} required minLength={8} />
            </div>

            <button type="submit" className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#000c60] transition-colors hover:bg-white/90">
              Create free account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-white/60">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-white hover:underline">Log in</Link>
          </p>
        </div>

        <p className="text-center text-xs text-white/40">
          By signing up, you agree to our{' '}
          <Link href="/legal/terms-of-service" className="underline hover:text-white/70">Terms of Service</Link>{' '}
          and{' '}
          <Link href="/legal/privacy-policy" className="underline hover:text-white/70">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
