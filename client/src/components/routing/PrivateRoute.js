import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { Navigate } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";

const PrivateRoute = ({ component: Component }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  if (loading && isAuthenticated) return <Spinner />;
  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
