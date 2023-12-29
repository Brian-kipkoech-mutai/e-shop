import { connect } from "react-redux";
import { login } from "../redux/actions/loginAction";
import { logout } from "../redux/actions/logoutAction";
import LoginPage from "../presentational/loginComponent.jsx";
 
    const LoginComponent=({isLoggedIn,user,login,logout})=>{
      return (
        <LoginPage
          isLoggedIn={isLoggedIn}
          user={user}
          onLogin={login}
          onLogout={logout}


        />
      )
    }
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userName, password) => dispatch(login(userName, password)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
