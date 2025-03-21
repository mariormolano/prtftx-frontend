"use client";
import { useState, useEffect } from "react";

const useAuthToken = () => {
  const storedToken = localStorage.getItem("authToken") || "";
  const [token, setToken] = useState<string | null>(storedToken);

  const saveToken = (newToken: string) => {
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
    setToken("");
  };

  useEffect(() => {
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
