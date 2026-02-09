import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function getInitials(nameOrEmail) {
  if (!nameOrEmail) return "?";

  const name = nameOrEmail.split("@")[0];
  const parts = name.split(/[.\s_-]/);

  return parts
    .slice(0, 2)
    .map(p => p[0]?.toUpperCase())
    .join("");
}

function colorFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 5) - hash);

  const color = `hsl(${hash % 360}, 65%, 55%)`;
  return color;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load session
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // Save session
  useEffect(() => {
    if (user)
      localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = ({ email }) => {
    const initials = getInitials(email);

    const newUser = {
      email,
      name: email.split("@")[0],
      initials,
      avatarColor: colorFromString(email)
    };

    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);