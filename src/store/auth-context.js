import react, { useState, useEffect } from "react";
const AuthContext = react.createContext({
  isLoggedIn: false,
  onLogout: {},
  onLogin: (email, password) => {},
});

export const AuthContentextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storeUserLoggedInInformation = localStorage.getItem("isLogedIn");
    if (storeUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandeler = () => {
    localStorage.removeItem("isLogedIn");
    setIsLoggedIn(false);
  };

  const loginHandeler = () => {
    localStorage.setItem("isLogedIn", 1);
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandeler,
        onLogin: loginHandeler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
