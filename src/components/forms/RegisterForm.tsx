"use client";
import { useStore } from "exome/react";
import { useRouter } from "next/navigation";
import useAuthToken from "@/features/auth/useAuthToken";
import { useState } from "react";
import {
  FormGroup,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  InputLabel,
  Input,
} from "@mui/material";

import { authStore } from "@/features/auth/authStore";
import { roleEnum } from "@/features/auth/roleEnum";

const RegisterForm = () => {
  const router = useRouter();
  const { register, serverToken, showLoginModal } = useStore(authStore);
  const { saveToken } = useAuthToken();

  const [role, setRole] = useState<roleEnum>(roleEnum.USER);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await register(name, email, password, role);
    if (res) {
      saveToken(serverToken as string);
      showLoginModal();
      router.push("/dashboard");
    } else {
      alert("Error al crear usuario");
    }
  };

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
      <FormLabel>Registrar usuario nuevo</FormLabel>
      <FormControl variant="standard">
        <InputLabel htmlFor="role">Rol</InputLabel>
        <Select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value as roleEnum)}
          defaultValue={roleEnum.USER}
        >
          <MenuItem value={roleEnum.USER}>USER</MenuItem>
          <MenuItem value={roleEnum.ADMIN}>ADMIN</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormHelperText>Ingresa el nombre</FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormHelperText>Ingresa en email</FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="password">Contaseña</InputLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormHelperText>Ingresa la contraseña</FormHelperText>
      </FormControl>

      <Button variant="contained" onClick={handleRegister}>
        Registrar
      </Button>
    </FormGroup>
  );
};

export default RegisterForm;
