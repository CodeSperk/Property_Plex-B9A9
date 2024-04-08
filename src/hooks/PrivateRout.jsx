import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRout = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  if(loading){
    return <div>
      Loading .......
    </div>
  }

  if(user){
    return children;
  }

  

  return <Navigate to="/login"></Navigate>
};

PrivateRout.propTypes={
  children: PropTypes.node,
}
export default PrivateRout;