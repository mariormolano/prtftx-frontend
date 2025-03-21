"use client";

import { useStore } from "exome/react";
import { useEffect } from "react";
import { FormGroup, Button } from "@mui/material";

import useAuthToken from "@/features/auth/useAuthToken";

import { authStore } from "@/features/auth/authStore";
import { useRouter } from "next/navigation";

const LogoutForm = () => {
  const router = useRouter();
  const { removeToken } = useAuthToken();
  const { isAuth, logout, setTokenStatus } = useStore(authStore);

  const handleLogout = () => {
    removeToken();
    logout();
    setTokenStatus(0);
    router.push("/");
  };

  useEffect(() => {
    if (!isAuth) {
    }
  }, [isAuth]);

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
      <Button variant="contained" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </FormGroup>
  );
};

export default LogoutForm;
