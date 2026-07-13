import Login from '@/src/components/auth/login';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Login | Nexus AI',
    'Log in to your Nexus AI account to pick up your Folders, chats and documents where you left off.',
    '/login'
  ),
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
