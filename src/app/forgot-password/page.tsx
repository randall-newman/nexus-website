import ForgotPassword from '@/src/components/auth/forgot-password';
import { authOptions } from '@/src/lib/auth';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  ...generateMetadata(
    'Forgot Password | Nexus AI',
    'Reset your Nexus AI account password.',
    '/forgot-password'
  ),
};

const ForgotPasswordPage = async () => {
  if (await getServerSession(authOptions)) {
    redirect('/');
  }
  return <ForgotPassword />;
};

export default ForgotPasswordPage;
