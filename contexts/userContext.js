import { Router } from "next/router";
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(undefined);

  const login = ({ user, token }) => {
    setUser({
      id: user.id,
      username: user.username,
      token: token,
    });
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
