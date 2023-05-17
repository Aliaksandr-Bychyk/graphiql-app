import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '@/context/AuthContext';

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const userStore = useUserAuth();
  const navigate = useNavigate();

  if (!userStore?.user) {
    navigate('/sign-in');
  }

  return <>{children}</>;
};

export default ProtectedRoute;
