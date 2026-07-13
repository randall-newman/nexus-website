'use client';

import privacyIcon from '@/public/images/privacy-choices-icon.png';
import { OPEN_COOKIE_SETTINGS_EVENT } from '@/src/components/shared/cookies-banner';
import Image from 'next/image';

export function PrivacyChoicesButton() {
  const open = () => {
    window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
  };

  return (
    <button
      type="button"
      onClick={open}
      className="footer-link-v2 inline-flex items-center gap-x-2"
    >
      <Image
        src={privacyIcon}
        alt="Privacy Choices"
        width={21}
        height={10}
        className="shrink-0"
        unoptimized
      />
      Your Privacy Choices
    </button>
  );
}
