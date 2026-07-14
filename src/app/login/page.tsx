import Login from '@/src/components/auth/login';
import { authOptions } from '@/src/lib/auth';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  ...generateMetadata(
    'Login | Nexus AI',
    'Log in to your Nexus AI account to pick up your Folders, chats and documents where you left off.',
    '/login'
  ),
};

const LoginPage = async () => {
  if (await getServerSession(authOptions)) {
    redirect('/');
  }
  return <Login />;
};

export default LoginPage;
