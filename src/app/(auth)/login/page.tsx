"use client";
import { useStore } from "exome/react";

import Box from "@mui/material/Box";
import { Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";

import LoginFrom from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import LogoutForm from "@/components/forms/LogoutForm";

import { authStore } from "@/features/auth/authStore";

import useAuthToken from "@/features/auth/useAuthToken";
export default function Login() {
  const { loginModal, showLoginModal, showRegisterModal } = useStore(authStore);

  const { isAuthenticated } = useAuthToken();

  const SelectForm = () => {
    if (isAuthenticated()) {
      return <LogoutForm />;
    } else {
      return <LoginFrom />;
    }
  };

  return (
    <>
      <Box
        my={2}
        mb={10}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TabContext value={isAuthenticated() ? 1 : loginModal}>
          <TabList>
            <Tab
              label={isAuthenticated() ? "Cerrar sesión" : "Iniciar sesión"}
              value={1}
              onClick={showLoginModal}
            />
            {!isAuthenticated() && (
              <Tab label="Registro" value={2} onClick={showRegisterModal} />
            )}
          </TabList>
        </TabContext>
        {loginModal === 1 ? <SelectForm /> : <RegisterForm />}
      </Box>
    </>
  );
}
