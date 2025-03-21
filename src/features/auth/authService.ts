"use server";
import { roleEnum } from "./roleEnum";

const BackendUrl = process.env.BACKEND_URL || "http://localhost:3001";

const login = async (email: string, password: string) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };
  const res = await fetch(`${BackendUrl}/login`, config);
  const data = await res.json();
  return data;
};

const register = async (
  name: string,
  email: string,
  password: string,
  roles: roleEnum
) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      roles,
    }),
  };
  const res = await fetch(`${BackendUrl}/register`, config);
  const data = await res.json();
  return data;
};

const validate = async (token: string) => {
  if (token.length > 0) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetch(`${BackendUrl}/verify`, config);
    if (res.status < 300) {
      return true;
    }
    return false;
  }
  return false;
};

export { login, register, validate };
