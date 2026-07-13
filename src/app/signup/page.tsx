import SignUp from '@/src/components/auth/sign-up';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Sign Up | Nexus AI',
    'Create a free Nexus AI account, no card required, and start writing, researching and creating in one AI workspace.',
    '/signup'
  ),
};

const SignUpPage = () => {
  return <SignUp />;
};

export default SignUpPage;
