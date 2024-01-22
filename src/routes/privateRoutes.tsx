
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAuthCheck from '../hooks/useAuthCheck';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useAuth();
  const authChecked = useAuthCheck();

  return isLoggedIn ? <>{children}</> : <Navigate to="/register" />;
};

export default PrivateRoute;
