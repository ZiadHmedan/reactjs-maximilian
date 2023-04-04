import { createContext, useState, useEffect } from "react";
const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: (email, password) => {},
});
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    loggedIn && setIsLoggedIn(true);
  }, []);
  const loginHandler = (email, password) => {
    localStorage.setItem("isLogIn", 1);

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
