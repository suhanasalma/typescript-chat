



import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAuthCheck from '../hooks/useAuthCheck';

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoutes: React.FC<PublicRouteProps> = ({ children }) => {
  const isLoggedIn = useAuth();
  const authChecked = useAuthCheck();

  return !isLoggedIn ? <>{children}</> : <Navigate to="/" />;
};

export default PublicRoutes;