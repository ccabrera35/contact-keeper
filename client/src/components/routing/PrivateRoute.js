import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { Navigate } from "react-router-dom";
// import { useAuth } from '../../context/auth/AuthState';

// const PrivateRoute = ({ children }) => {
//     const authContext = useContext(AuthContext);
//     const { isAuthenticated, loading } = authContext;

//     if (!isAuthenticated && !loading) {
//         return <Navigate to="/login" />;
//     }

//     return children;
// };
const PrivateRoute = ({ component: Component }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;
    if (loading) return 'WHatever'
    if (isAuthenticated) return <Component />;
    return <Navigate to='/login' />;
  };
  
export default PrivateRoute;
