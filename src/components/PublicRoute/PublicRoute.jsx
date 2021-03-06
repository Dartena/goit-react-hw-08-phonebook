import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../../store/auth/selectors";
import PropTypes from "prop-types";

const PublicRoute = ({ component: Component, restricted = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/contacts" /> : <Component />;
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PublicRoute;
