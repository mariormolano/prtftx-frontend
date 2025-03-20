import { useState, useEffect } from "react";

const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(null);

  const saveToken = (newToken: string) => {
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
    setToken("");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setToken("");
    }
  }, []);

  const isAuthenticated = () => !!token;

  return { token, saveToken, removeToken, isAuthenticated };
};

export default useAuthToken;
