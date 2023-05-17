import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '@/context/AuthContext';

type Props = {
  children: ReactNode;
  isLogged: boolean;
};

const ProtectedRoute = ({ isLogged, children }: Props) => {
  const userStore = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userStore?.user && !isLogged) {
      navigate('/sign-in');
    } else {
      navigate('/');
    }
  }, [navigate, userStore?.user, isLogged]);

  return <>{children}</>;
};

export default ProtectedRoute;
