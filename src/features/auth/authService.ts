"use server";
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

  const user = await res.json();

  console.log(user);

  return user;
};

const register = async (email: string, password: string) => {
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
  const res = await fetch(`${BackendUrl}/register`, config);
  if (res.status === 200) {
    return true;
  }
  return false;
};

const validate = async (token: string) => {
  if (token) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    console.log("Solicitud a la API ", BackendUrl + "/verify");

    const res = await fetch(`${BackendUrl}/verify`, config);
    console.log("Respuesta de la API ", res.status);
    if (res.status < 300) {
      return true;
    }
    return false;
  }
};

export { login, register, validate };
