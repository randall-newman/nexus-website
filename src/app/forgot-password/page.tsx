import ForgotPassword from '@/src/components/auth/forgot-password';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Forgot Password | Nexus AI',
    'Reset your Nexus AI account password.',
    '/forgot-password'
  ),
};

const ForgotPasswordPage = () => {
  return <ForgotPassword />;
};

export default ForgotPasswordPage;
