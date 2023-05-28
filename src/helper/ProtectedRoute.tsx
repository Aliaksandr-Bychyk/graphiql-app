import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '@/context/AuthContext';
import { RoutePath } from '@/routes/route';

type Props = {
  children: ReactNode;
  isReg?: boolean;
};

const ProtectedRoute = ({ children, isReg }: Props) => {
  const userStore = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userStore?.user) {
      navigate(RoutePath.EDITOR);
      return;
    }

    isReg ? navigate(RoutePath.SIGN_UP) : navigate(RoutePath.LOGIN);
  }, [userStore?.user, navigate, isReg]);

  return <>{children}</>;
};

export default ProtectedRoute;
