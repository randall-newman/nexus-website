import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ComponentType } from 'react';

type IconProps = { className?: string };

const Facebook = ({ className }: IconProps) => (
  <FontAwesomeIcon icon={faFacebookF} className={className} />
);

const Instagram = ({ className }: IconProps) => (
  <FontAwesomeIcon icon={faInstagram} className={className} />
);

const TikTok = ({ className }: IconProps) => <FontAwesomeIcon icon={faTiktok} className={className} />;

const X = ({ className }: IconProps) => <FontAwesomeIcon icon={faXTwitter} className={className} />;

const Linkedin = ({ className }: IconProps) => (
  <FontAwesomeIcon icon={faLinkedinIn} className={className} />
);

const Spaces = ({ className }: IconProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/images/icons/spaces-icon.png" alt="" className={className} />
);

export const socialIconMap: Record<string, ComponentType<IconProps>> = {
  facebook: Facebook,
  instagram: Instagram,
  x: X,
  tiktok: TikTok,
  linkedin: Linkedin,
  spaces: Spaces,
};
