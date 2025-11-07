import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [role, setRole] = useState("Guest");
  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
