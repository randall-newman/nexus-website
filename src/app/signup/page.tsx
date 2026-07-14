import SignUp from '@/src/components/auth/sign-up';
import { authOptions } from '@/src/lib/auth';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  ...generateMetadata(
    'Sign Up | Nexus AI',
    'Create a free Nexus AI account, no card required, and start writing, researching and creating in one AI workspace.',
    '/signup'
  ),
};

const SignUpPage = async () => {
  if (await getServerSession(authOptions)) {
    redirect('/');
  }
  return <SignUp />;
};

export default SignUpPage;
