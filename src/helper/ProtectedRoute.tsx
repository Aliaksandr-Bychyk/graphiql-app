import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '@/context/AuthContext';

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const userStore = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userStore?.user) {
      navigate('/editor');
      return;
    }
    navigate('/sign-in');
  }, [userStore?.user, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
