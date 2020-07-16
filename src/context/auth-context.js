import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const loginHandler = (user) => {
    setUser(user);
  };

  const logoutHandler = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
