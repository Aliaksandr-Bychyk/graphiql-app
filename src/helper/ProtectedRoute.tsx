import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '@/context/AuthContext';

type Props = {
  children: ReactNode;
  isReg?: boolean;
};

const ProtectedRoute = ({ children, isReg }: Props) => {
  const userStore = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userStore?.user) {
      navigate('/editor');
      return;
    }

    isReg ? navigate('/sign-up') : navigate('/sign-in');
  }, [userStore?.user, navigate, isReg]);

  return <>{children}</>;
};

export default ProtectedRoute;
