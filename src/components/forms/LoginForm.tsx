"use client";

import { useStore } from "exome/react";
import { useEffect, useState } from "react";
import {
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  InputLabel,
  Input,
} from "@mui/material";

import useAuthToken from "@/features/auth/useAuthToken";

import { authStore } from "@/features/auth/authStore";
import { redirect, useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const { saveToken } = useAuthToken();
  const { login } = useStore(authStore);
  const [loginSuscess, setLoginSuscess] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await login(email, password);
    if (res) {
      console.log("Login success ", res);
      saveToken(res);
      setLoginSuscess(true);
      router.push("/dashboard");
    } else {
      console.log("Login failed");
      alert("Error al iniciar sesión");
    }
  };

  useEffect(() => {
    if (loginSuscess) {
      console.log("Redirecting to dashboard");

      setLoginSuscess(false);
      redirect("/dashboard");
    }
  }, [loginSuscess]);

  return (
    <FormGroup
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        mt: 2,
      }}
    >
      <FormLabel>Iniciar sesión</FormLabel>
      <FormControl variant="standard">
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <FormHelperText>Ingresa en email</FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="password">Contaseña</InputLabel>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
        <FormHelperText>Ingresa la contraseña</FormHelperText>
      </FormControl>

      <Button variant="contained" onClick={handleLogin}>
        Iniciar sesión
      </Button>
    </FormGroup>
  );
};

export default LoginForm;
